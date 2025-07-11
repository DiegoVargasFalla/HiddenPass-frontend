import axios from "axios";
import { useAuthenticationStore } from "@/modules/auth/store/authenticationStore";
import { defineStore } from "pinia";
import { useEncryptionsUtilsStore } from "@/modules/dashboard/store/EncryptionsUtilsStore";


export const useNewPasswordStore = defineStore('newPassword', {
    state: () => ({
        id: 0,
        username: "",
        url: "",
        password: "",
        note: "",
        show: false,
        save: false,
        showConfirmDeletePassword: false,
        iconConfirm: false,
    }),

    actions: {
        getUsername() {
            return this.username
        },
        setUsername(value) {
            this.username = value
        },
        getPassword() {
            return this.password
        },
        setPassword(value) {
            this.password = value
        },
        getUrl() {
            return this.url
        },
        setUrl(value) {
            this.url = value
        },
        getNote() {
            return this.note
        },
        setNote(value) {
            this.note = value
        },
        getShow() {
            return this.show
        },
        setShow(value) {
            this.show = value
        },
        getSave() {
            return this.save;
        },
        setSave(value) {
            this.save = value
        },
        getShowConfirmDeletePassword() {
            return this.showConfirmDeletePassword;
        },
        setShowConfirmDeletePassword(value) {
            this.showConfirmDeletePassword = value;
        },
        async savePassword(values, token) {
            try {
                const response = await axios.post("/api/v1/add-password", 
                    values,
                    {headers: {Authorization: `Bearer ${token}`}}
                )
                const data = response.data;

                if (data) {
                    
                    // console.log("-> constraseña recien agregada: " + data)
                    const authenticationStore = useAuthenticationStore();
                    // const encryptionsUtilsStore = useEncryptionsUtilsStore();

                    data.password = this.password;
                    data.username = this.username;
                    data.url = this.url;
                    data.note = this.note;

                    authenticationStore.getListPassword().reverse().push(data);
                    authenticationStore.updateListPasword(authenticationStore.getListPassword());

                    this.save = true;
                }
                
            } catch (error) {
                alert('Ocurrio un error con el servidor')
            }
        }
    }
})