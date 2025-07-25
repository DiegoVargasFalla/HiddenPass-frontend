<template>
    <div class="container-button" @click="onClick">
        <span v-if="showText"> {{ text }}</span>
        <div v-if="loaderStore.load && !showText" class="loaderSavePassword">
            <loaderPasswords></loaderPasswords>
        </div>
    </div>
</template>

<script setup>

import { useShowLayerPopsUp } from '../../store/layerPopsUpStore';
import { useNewPasswordStore } from '../newPassword/store/newPasswordStore';
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';
import loaderPasswords from '@/modules/loading/views/loaderPasswords.vue';
import { useLoaderPasswordsStore } from '@/modules/loading/store/loadingPasswordsStore';
import { useEncryptionsUtilsStore } from '../../store/EncryptionsUtilsStore';
import { useRegisterStore } from '@/modules/register/store/registerStore';

const props = defineProps({
    text: String,
    action: String,
    loader: Boolean
})

const loaderStore = useLoaderPasswordsStore();
const showLayerPopsUp = useShowLayerPopsUp();
const authenticationStore = useAuthenticationStore();
const newPasswordStore = useNewPasswordStore();
const encryptionsUtilsStore = useEncryptionsUtilsStore();
const registerStore = useRegisterStore();


let showText = true;

const onClick = async () => {

    if(!newPasswordStore.iconConfirm) {
            if(props.action === "cancel") {
            showLayerPopsUp.setShowLayerPopsUp(false);
            newPasswordStore.setShow(false);
            deleteTextField();
        } else if (props.action === 'save') {
            
            if(await authenticationStore.checkAuthentication()) {

                if(newPasswordStore.getPassword().length > 1 && newPasswordStore.getUsername().length > 1 && newPasswordStore.getUrl().length > 1) {
            
                    const encryptedPassword = await encryptionsUtilsStore.encryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), newPasswordStore.getPassword());
                    const encryptedUsername = await encryptionsUtilsStore.encryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), newPasswordStore.getUsername());
                    const encrypteUrl = await encryptionsUtilsStore.encryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), newPasswordStore.getUrl());
                    const encryptNote = await encryptionsUtilsStore.encryptWithDerivedKey(await encryptionsUtilsStore.importKey(registerStore.getDerivedKey()), encryptionsUtilsStore.exportBase64ToUnit8Array(registerStore.getIv()), newPasswordStore.getNote());

                    const requestBody = {

                        "username": encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedUsername),
                        "password": encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedPassword),
                        "url": encryptionsUtilsStore.exportUnit8ArrayToBase64(encrypteUrl),
                        "note": encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptNote)

                    };
                    
                    if (props.loader === true) {
                        showText = false;
                    }

                    loaderStore.startLoadPasswords();

                    await newPasswordStore.savePassword(requestBody, authenticationStore.getToken());

                    if (newPasswordStore.getSave()) {
                        loaderStore.stopLoadPassword();
                        showText = true;
                        newPasswordStore.iconConfirm = true;

                        setTimeout(() => {
                            showLayerPopsUp.setShowLayerPopsUp(false);
                            newPasswordStore.setShow(false);
                            newPasswordStore.iconConfirm = false;
                            deleteTextField();
                        }, 1000);
                    }

                } else {

                    const listInputs = [
                        document.getElementById("field-username"),
                        document.getElementById("field-password"),
                        document.getElementById("field-url")
                    ]

                    listInputs.forEach(input => {
                        input.focus();
                        input.blur();
                    })
                }
            }
        }
    }
    
    
}

const urlFavicon = () => {
    "aasad";
}

function deleteTextField() {
    newPasswordStore.setUsername("");
    newPasswordStore.setPassword("");
    newPasswordStore.setUrl("");
    newPasswordStore.setNote("");
}

</script>

<style scoped>

.container-button {
    background-color: #16DB65;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 4.8rem;
    border-radius: 9px;
    padding: 0 10px;
    gap: 8px;
    border: 1px solid rgba(5, 77, 3, 0.278);
    box-shadow:  
        inset 3px 3px 5px rgba(101, 101, 101, 0.474);
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    font-family: 'Inter';
    font-size: 14px;
    font-weight: 500;
}

.container-button:hover {
    transform: translateY(-2px);
}

.loaderSavePassword {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90%;
    width: 45%;
}

</style>