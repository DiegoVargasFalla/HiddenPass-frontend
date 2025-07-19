import axios from "axios";
import { defineStore } from "pinia";
import { useAuthenticationStore } from "@/modules/auth/store/authenticationStore";
import { useEncryptionsUtilsStore } from "./EncryptionsUtilsStore";
import { useRegisterStore } from "@/modules/register/store/registerStore";


export const useExistingPasswordStore = defineStore('existingPassword', {
    state: () => ({
        previus: false,
        id: 0,
        username: "",
        password: "",
        url: "",
        note: "",
        nameSite: "",
        noEdit: true,
        successUpdate: false,
        passwordUpdate: null,
        confirmDelete: false,
        confirmUpdate: false,
        noChanges: false,

        passwordEntityDTO: {
            id: null,
            username: null,
            password: null,
            url: null,
            note: null
            // passWord: {
            //     id: null,
            //     username: null,
            //     password: null,
            //     url: null,
            //     note: null
            // },
            // masterKey: null,
            // aesKey: null,
            // ivFront: null,
        }
    }),
    actions: {
        setCancel(value) {
            this.previus = value;
        },
        getCancel() {
            return this.previus;
        },
        getId() {
            return this.id;
        },
        setId(value) {
            this.id = value
        },
        getUsername() {
            return this.username;
        },
        setUsername(value) {
            this.username = value;
        },
        getPassword() {
            return this.password
        },
        setPassword(value) {
            this.password = value;
        },
        getUrl() {
            return this.url;
        },
        setUrl(value) {
            this.url = value;
        },
        getNote() {
            return this.note;
        },
        setNote(value) {
            this.note = value;
        },
        getNameSite() {
            return this.nameSite;
        },
        setNameSite(value) {
            this.nameSite = value;
        },
        getNewPassword() {
            return this.PasswordEntityDTO;
        },
        setNewPassword(key, newValue) {
            this.passwordEntityDTO[key] = newValue;
        },
        setMasterKey(value) {
            this.PasswordEntityDTO.masterKey = value;
        },
        setAesKeyExistingPassword(value) {
            this.PasswordEntityDTO.aesKey = value;
        },
        setIvFrontExistiingPassord(value){
            this.PasswordEntityDTO.ivFront = value;
        },
        getNoEdit() {
            return this.noEdit;
        },
        setNoEdit(value) {
            this.noEdit = value;
        },
        getSuccessUpdate() {
            return this.successUpdate;
        },
        setSuccessUpdate(value) {
            this.successUpdate = value;
        },
        getPasswordUpdate() {
            return this.passwordUpdate;
        },
        setPasswordUpdate(value) {
            this.passwordUpdate = value;
        },
        async updatePassword(token) {
            this.confirmUpdate = true;

            const encryptionsUtilsStore = useEncryptionsUtilsStore();

            if(this.passwordEntityDTO.password !== null) {
                const encryptedPassword = await encryptionsUtilsStore.encryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), this.passwordEntityDTO.password);
                this.passwordEntityDTO.password = encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedPassword);
            } if(this.passwordEntityDTO.username !== null) {
                const encryptedUsername = await encryptionsUtilsStore.encryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), this.passwordEntityDTO.username);
                this.passwordEntityDTO.username = encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedUsername);
            } if(this.passwordEntityDTO.note !== null) {
                const encryptedNote = await encryptionsUtilsStore.encryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), this.passwordEntityDTO.note);
                this.passwordEntityDTO.note = encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedNote);
            }

            try { // http://localhost:8080/system/api/v1/update-password

                // console.log(this.passwordEntityDTO);
                const response = await axios.patch('/api/v1/update-password',
                    this.passwordEntityDTO,
                    {headers: {Authorization: `Bearer ${token}`}}
                );

                const data = response.data;

                if (response.status === 200 && data) {

                    data.password = this.password;
                    data.username = this.username;
                    data.url = this.url;
                    data.note = this.note;

                    this.setNewPassword("id", null)
                    this.setNewPassword("password", null)
                    this.setNewPassword("username", null)
                    this.setNewPassword("note", null)
                    this.setNewPassword("url", null)

                    this.confirmUpdate = false
                    this.passwordUpdate = response.data;
                    this.successUpdate = true;
                    this.noEdit = true
                    this.previus = false
                    
                }
            } catch (error) {
                console.log(error);
            }     
        },
        async deletePassowrd() {

            const authenticationStore = useAuthenticationStore();
            const token = authenticationStore.getToken();

            try { // http://localhost:8080/system/api/v1/delete-password
                const response = await axios.delete('/api/v1/delete-password',
                    {
                        headers: {Authorization: `Bearer ${token}`},
                        data: { idPassword: this.id },
                    }
                )

                const data = response.data;
                if (data === true) {
                    this.confirmDelete = true;

                    const listPasswords = [...authenticationStore.getListPassword()];
                    const indexPasswordDelete = listPasswords.findIndex(item => item.id === this.id);

                    if (indexPasswordDelete !== -1) {
                        listPasswords.splice(indexPasswordDelete, 1);
                        authenticationStore.updateListPasword(listPasswords.reverse());
                    }
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
})