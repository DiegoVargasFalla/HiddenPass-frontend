import { defineStore } from "pinia";

import { useEncryptionsUtilsStore } from "@/modules/dashboard/store/EncryptionsUtilsStore";
import axios from "axios";
import router from "@/router";
import { useAuthenticationStore } from "@/modules/auth/store/authenticationStore";


export const useRegisterStore = defineStore('registerStore', {
    state: () => ({
        name: '',
        email: '',
        password: '',
        verifyMailRegister: false,
    }),
    actions:{
        getName() {
            return this.name;
        },
        setName(value) {
            this.name = value;
        },
        getEmail() {
            return this.email;
        },
        setEmail(value) {
            this.email = value;
        },
        getPassword() {
            return this.password;
        },
        setPassword(value) {
            this.password = value;
        },
        getVerifyMailRegister() {
            return this.verifyMailRegister
        },
        setVerifyMailRegister(value) {
            this.verifyMailRegister = value;
        },
        async registerUser() {

            const encryptionsUtilsStore = useEncryptionsUtilsStore();
            const authenticationStore = useAuthenticationStore();

            await authenticationStore.checkMail({email: this.email});

            if(this.verifyMailRegister === false) {
                this.verifyMailRegister = false;
                authenticationStore.setVerifyEmail(Boolean);

                await encryptionsUtilsStore.bringPublicKeyBack();
                // const importedPublicKeyback = await encryptionsUtilsStore.importRSAPublicKey(encryptionsUtilsStore.getPublicKeyBack());

                console.log("-> name: " + this.name)
                console.log("-> usename: " + this.email)
                console.log("-> password: " + this.password)

                const encryptedName = await encryptionsUtilsStore.encryptPlainTexWithRSA(this.name);
                const encryptedEmail = await encryptionsUtilsStore.encryptPlainTexWithRSA(this.email)
                const encryptedPassword = await encryptionsUtilsStore.encryptPlainTexWithRSA(this.password)

                try {
                    const request = await axios.post('/api/v1/create', {
                        name: encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedName),
                        username: encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedEmail),
                        password: encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedPassword),
                        listPass: [],
                        roles: [],
                        accessCode: null,
                        userSalt: "",
                        userIv: ""
                    })

                    const data = request.data;
                    console.log(request.error)

                    if(data) {
                        router.push("/login");
                    }

                } catch (error) {
                    console.log(error.message)
                }
            } else {
                this.verifyMailRegister = true;
            }


        }
    }
})