import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
import { useEncryptionsUtilsStore } from "@/modules/dashboard/store/EncryptionsUtilsStore";
import { useRegisterStore } from "@/modules/register/store/registerStore";
import { useNoteStore } from "@/modules/dashboard/store/NoteStore";
import { useLoaderPasswordsStore } from "@/modules/loading/store/loadingPasswordsStore";
import { useNewPasswordStore } from "@/modules/dashboard/components/newPassword/store/newPasswordStore";
import { date, object } from "yup";
import { useShowLayerPopsUp } from "@/modules/dashboard/store/layerPopsUpStore";

export const useAuthenticationStore = defineStore('authentication', {
    state: () => ({
        isAuthenticate: false,
        token: null,
        sessionCheckInterval: null,
        forbidden: Boolean,
        verifyEmail: Boolean,
        verifyPassword: Boolean,
        password: "",
        numPasswords: 0,
        listPassword: [],
        reload: false,
        listOldPassword: Array,
        listRecentPasssword: Array,
        listAlphabeticPassword: Array,
        showLayerLogout: false,
        showSlideBar: false,
        userPermissions: object,

    }),
    actions: {

        getForbbiden() {
            return this.forbidden;
        },
        getVerifyPassword() {
            return this.verifyPassword;
        },
        setVerifyPassword(value) {
            this.verifyPassword = value;
        },
        getVerifyEmail() {
            return this.verifyEmail;
        },
        setVerifyEmail(value) {
            this.verifyEmail = value;
        },
        getAuthenticate() {
            return this.isAuthenticate;
        },
        getToken() {
            return this.token;
        },
        setToken(value) {
            this.token = value;
        },
        setPassword(value) {
            this.password = value;
        },
        getPassword() {
            return this.password;
        },
        getReload() {
            return this.reload;
        },
        setReload(value) {
            this.reload = value;
        },
        getListPassword() {
            return this.listPassword;
        },
        getNumPasswords() {
            return this.numPasswords;
        },
        setNumPasswords(value) {
            this.numPasswords = value
        },
        setShowLayerLogout(value) {
            this.showLayerLogout = value;
        },
        setSlideBar(value) {
            this.showSlideBar = value;
        },
        setListPassword(List) {
            this.listPassword = List;
        },
        setListRecentPassword(list) {
            this.listRecentPasssword = list.reverse();
            // console.log(this.listRecentPasssword);
        },
        setListOld(list) {
            this.listOldPassword = list;
            // console.log(this.listOldPassword);
        },
        setListAlphabetic(list) {
            this.listAlphabeticPassword = list.sort((a, b) => a.url.localeCompare(b.url));
        },
        updateListPasword(data) {
            this.setListRecentPassword([...data]);
            this.listPassword = this.listRecentPasssword;
            this.setListOld([...data]);
            this.setListAlphabetic([...data]);
            this.numPasswords = this.listRecentPasssword.length
        },
        decryptAllPasswords() {
            const encryptionsUtilsStore = useEncryptionsUtilsStore();
            this.listPassword.forEach(async p => {
                p.password = await encryptionsUtilsStore.decryptWithAES(p.password, encryptionsUtilsStore.getAesKeyFront(), encryptionsUtilsStore.getIvFront());
            });
        },
        async bringPasswords() {

            const registerStore = useRegisterStore();
            const encryptionsUtilsStore = useEncryptionsUtilsStore();
            const token = sessionStorage.getItem('tokenAuthentication');
            if (await this.checkAuthentication()) {

                try {  // http://localhost:8080/system/api/v1/passwords-user
                    const response = await axios.post('/api/v1/passwords-user',
                        {},
                        { headers: { Authorization: `Bearer ${this.token}` } }
                    );
                    
                    const data = response.data;
                    if (data) {

                        const decryptedPasswords = [];

                        for(const p of data) {
                            const decrypted = {
                                id: p.id,
                                username: await encryptionsUtilsStore.decryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), encryptionsUtilsStore.exportBase64ToUnit8Array(p.username)),
                                password: await encryptionsUtilsStore.decryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), encryptionsUtilsStore.exportBase64ToUnit8Array(p.password)),
                                url: await encryptionsUtilsStore.decryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), encryptionsUtilsStore.exportBase64ToUnit8Array(p.url)),
                                note: await encryptionsUtilsStore.decryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), encryptionsUtilsStore.exportBase64ToUnit8Array(p.note))
                            }
                            decryptedPasswords.push(decrypted);
                        }

                        this.updateListPasword(decryptedPasswords);
                    }
                }
                catch (error) {
                    console.log(error)
                    alert("Error while processing request")
                }
            }
        },
        async login(credentials) {

            try { // http://localhost:8080/system/api/login
                const response = await axios.post('/api/login', { 
                    username: credentials.email,
                    password: credentials.password
                })

                const data = response.data;
                if (data) {
                    this.isAuthenticate = true;
                    this.token = data.token;
                    this.forbidden = false;
                    sessionStorage.setItem('tokenAuthentication', this.token)
                }
            } catch (Error) {
                if (Error.status === 403) {
                    this.forbidden = true;
                    this.verifyPassword = false;
                } else {
                    console.log("-> Error: " + Error)
                    alert("Error with server")
                }
            }
        },
        async bringIvAndSalt() {
            try {
                const request = await axios.get('/api/v1/salt', 
                    {
                        headers: {
                            'Authorization': `Bearer ${this.token}`
                        }
                    }
                );

                const data = request.data;
                if(data) {
                    const registerStore = useRegisterStore();
                    // const encryptionsUtilsStore = useEncryptionsUtilsStore();

                    registerStore.setIv(data.iv)
                    registerStore.setSalt(data.salt);
                }
            } catch (error) {
                console.log(error);
            }
        },
        async checkMail(value) {

            const registerStore = useRegisterStore();
            try { // http://localhost:8080/system/api/v1/checkmail
                const response = await axios.post('/api/v1/checkmail', 
                    value
                )
                const data = response.data;
                if(data) {
                    registerStore.setVerifyMailRegister(data);
                    this.verifyEmail = data;
                }
            } catch (Error) {
                console.log(" ")
            }
        },
        logout(message) {
            // this.stopSessionCheck();
            sessionStorage.removeItem('tokenAuthentication');
            this.isAuthenticate = false;
            this.token = null;
            alert(message);
            this.closeAllLayouts();
            router.push('/login');
        },
        closeAllLayouts() {
            const newPasswordStore = useNewPasswordStore();
            const loaderStore = useLoaderPasswordsStore();
            const noteStore = useNoteStore();
            const showLayerPopsUpStore = useShowLayerPopsUp();

            showLayerPopsUpStore.setShowLayerPopsUp(false);
            this.userPermissions = object; 
            newPasswordStore.setShow(false);
            noteStore.loadCirlce = false;
            this.showLoaderSaveUpdate = false;
            noteStore.showEditNote = false;
            loaderStore.stopLoadPassword();
        },
        async checkAuthentication() {
            
            const tokenUser = sessionStorage.getItem('tokenAuthentication');
            
            if (tokenUser) {
                const showLayerPopsUpStore = useShowLayerPopsUp()
                this.isAuthenticate = true;
                this.token = tokenUser;

                try { // http://localhost:8080/system/api/v1/checktoken
                    const response = await axios.get('/api/v1/checktoken', {
                        headers: {
                            'Authorization': `Bearer ${this.token}`
                        }
                    })
                    const data = response.data
                    this.userPermissions = data;
                    if(data.accountNonExpired === true && data.accountNonLocked === true && data.credentialsNonExpired === true &&  data.enabled === true) {
                        return true;
                    } else if(data.accountNonExpired === false) {
                        // este atributo es para verificar si tiene el plan activo
                    } else if(data.accountNonLocked === false) {
                        this.logout('Su cuenta esta bloqueda, contacte a soporte para mas informacion')
                    } else if(data.credentialsNonExpired === false) {
                        this.logout('Sus credenciales han expirado');
                    } else if(data.enabled === false) {
                        showLayerPopsUpStore.setShowLayerPopsUp(true);
                    } else {
                        this.closeAllLayouts();
                        this.logout();
                        return false;
                    }
                }
                catch (error) {
                    if (error.response || error.response.status === 403) {
                        this.closeAllLayouts();
                        this.logout('Tu sesión se ha vencido, por seguridad vuelve a iniciar sesión');
                        return false;
                    }
                }
            }
            else {
                this.closeAllLayouts();
                this.token = null;
                this.stopSessionCheck()
                return false;
            }
        },
        async enabledToken() {
            const token = sessionStorage.getItem('tokenAuthentication');
            if(token) {
                this.isAuthenticate = true;
                this.token = token;

                try {
                    const response = await axios.get('/api/v1/enabled-token', {
                        headers: {
                            'Authorization': `Bearer ${this.token}`
                        }
                    })

                    const data = response.data;

                    if(data === true) {
                        return true;
                    } else {
                        this.closeAllLayouts();
                        this.token = null;
                        return false;
                    }
                } catch(error) {
                    if (error.response || error.response.status === 403) {
                        this.closeAllLayouts();
                        this.token = null;
                        return false;
                    }
                }
            }
        },
        startSession() {
            if (!this.sessionCheckInterval) {
                this.sessionCheckInterval = setInterval(() => {
                    this.checkAuthentication();
                }, 1000);
            }
        },

        stopSessionCheck() {
            if (this.sessionCheckInterval) {
                clearInterval(this.sessionCheckInterval);
                this.sessionCheckInterval = null;
            }
        }
    }
})