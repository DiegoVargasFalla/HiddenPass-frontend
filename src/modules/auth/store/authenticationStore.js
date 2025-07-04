import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";
import { boolean, number } from "yup";
import { useEncryptionsUtilsStore } from "@/modules/dashboard/store/EncryptionsUtilsStore";

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
        listAlphabeticPassword: Array
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
            const token = sessionStorage.getItem('tokenAuthentication');
            const encryptionsUtilsStore = useEncryptionsUtilsStore();

            const AESKeyRaw = await encryptionsUtilsStore.exportAESKey(encryptionsUtilsStore.getAesKeyFront())
            const importedPublicKey = await encryptionsUtilsStore.importRSAPublicKey(encryptionsUtilsStore.getPublicKeyBack());
            const enryptedAESKey = await encryptionsUtilsStore.encryptAESKeyWithPublicKeyBackend(AESKeyRaw, importedPublicKey);

            if (token) {
                const masterKeyDTO = {
                    masterKey: this.password,
                    aesKey: encryptionsUtilsStore.exportUnit8ArrayToBase64(enryptedAESKey),
                    ivFront: encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptionsUtilsStore.getIvFront())
                }

                try {  // http://localhost:8080/system/api/v1/passwords-user
                    const response = await axios.post('/api/v1/passwords-user',
                        masterKeyDTO,
                        { headers: { Authorization: `Bearer ${this.token}` } }
                    );
                    
                    const data = response.data;

                    if (data) {
                        this.updateListPasword(data);
                        this.decryptAllPasswords();
                    }
                }
                catch (error) {
                    console.log(error)
                    alert("Error while processing request")
                }
            }
            else {
                alert("you are not logged in")
                router.push('/login')
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

        async checkMail(value) {
            try { // http://localhost:8080/system/api/v1/checkmail
                const response = await axios.post('/api/v1/checkmail', 
                    value
                )
                const data = response.data;
                this.verifyEmail = data;
            } catch (Error) {
               console.log(Error.status)
               alert("Error whit server")
            }
        },

        logout() {
            this.stopSessionCheck();
            sessionStorage.removeItem('tokenAuthentication');
            this.isAuthenticate = false;
            this.token = null;
        },

        async checkAuthentication() {
            const tokenUser = sessionStorage.getItem('tokenAuthentication');
            if (tokenUser) {
                this.isAuthenticate = true;
                this.token = tokenUser;

                try { // http://localhost:8080/system/api/v1/checktoken
                    const response = await axios.get('/api/v1/checktoken', {
                        headers: {
                            'Authorization': `Bearer ${this.token}`
                        }
                    })
                    .then(response => {
                        if (!response.data) {
                            this.logout();
                            alert("your session has ended")
                            router.push("/login")
                        }
                        else {
                            console.log("")
                        }
                    })
                }
                catch (error) {
                    if (error.response || error.response.status === 403) {
                        this.logout();
                        alert("your session has ended")
                        router.push("/login")
                    }
                }
            }
            else {
                this.isAuthenticate = false;
                this.token = null;
                alert("you are not logged session")
                router.push("/login")
                this.stopSessionCheck()
            }
        },

        startSession() {
            if (!this.sessionCheckInterval) {
                this.sessionCheckInterval = setInterval(() => {
                    this.checkAuthentication();
                }, 5000); // check the token every 5 min
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