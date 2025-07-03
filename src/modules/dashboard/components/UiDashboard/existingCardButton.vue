<template>
    <div class="container-button" @click="onClick" :class="{'disabledButton': disableButton, 'style-defect-button-save': styleDefect}">
        <i v-if="!showLoaderUpdatePassword" :style="{color: iconColor}" :class="icon"></i>
        <h3 v-if="!showLoaderUpdatePassword" class="text-button">{{ label }}</h3>
        <div v-if="showLoaderUpdatePassword" class="container-loader">
            <loaderPasswords></loaderPasswords>
        </div>
    </div>
</template>

<script setup>
import { useExistingPasswordStore } from '../../store/existingPasswordStore';
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';
import { useShowLayerPopsUp } from '../../store/layerPopsUpStore';
import { useNewPasswordStore } from '../newPassword/store/newPasswordStore';
import { useEncryptionsUtilsStore } from '../../store/EncryptionsUtilsStore';
import loaderPasswords from '@/modules/loading/views/loaderPasswords.vue';
import { computed, ref } from 'vue';

const props = defineProps({
    label: String,
    icon: String,
    type: String,
    iconColor: String,
})

const disableButton = computed(() => {
    if(props.type === 'save' && !existingPasswordStore.noEdit) {
        return true;
    } else {
        return false;
    }
})

const showLoaderUpdatePassword = computed(() => {
    if(props.type === 'save' && existingPasswordStore.confirmUpdate === true) {
        return true
    }
    return false;
})

const styleDefect = computed(() => {
    if(props.type === 'save') {
        return true;
    } else {
        return false;
    }
})


const existingPasswordStore = useExistingPasswordStore();
const authenticationStore = useAuthenticationStore();
const showLayerPopsUp = useShowLayerPopsUp();
const newPasswordStore = useNewPasswordStore();
const encryptionsUtilsStore = useEncryptionsUtilsStore();


const noNullFieldsEditionPassword = () => {
    if(existingPasswordStore.PasswordEntityDTO.passWord.password !== null ||
    existingPasswordStore.PasswordEntityDTO.passWord.username !== null ||
    existingPasswordStore.PasswordEntityDTO.passWord.note !== null ) {
        return true
    } else {
        existingPasswordStore.noChanges = true

        setTimeout(() => {
            existingPasswordStore.noChanges = false;
        }, 2000)
        return false;
    }
}

async function onClick() {
    if (props.type === 'edit') {

        if (existingPasswordStore.noEdit) {
            disableButton.value = false;
            existingPasswordStore.noEdit = false;
        }
        else {
            disableButton.value = true;
            existingPasswordStore.noEdit = true;
        }
    } else if(props.type === 'save' && !existingPasswordStore.getNoEdit() && noNullFieldsEditionPassword()) {

        existingPasswordStore.setMasterKey(authenticationStore.getPassword())
        existingPasswordStore.setAesKeyExistingPassword(encryptionsUtilsStore.getAesKeyFront());
        existingPasswordStore.setIvFrontExistiingPassord(encryptionsUtilsStore.getIvFront());

        await existingPasswordStore.updatePassword(existingPasswordStore.getNewPassword(), authenticationStore.getToken());

        if (existingPasswordStore.getSuccessUpdate()) {

            const listPasword = authenticationStore.getListPassword();
            const passwordResponse = existingPasswordStore.getPasswordUpdate();
            listPasword.forEach(password => {
                if (password.id === passwordResponse.id) {

                    password.id = passwordResponse.id;
                    password.username = passwordResponse.username;
                    password.password = passwordResponse.password;
                    password.url = passwordResponse.url;
                    password.note = passwordResponse.note;

                }
            })
        }
    } else if(props.type === 'delete') {
        showLayerPopsUp.setShowLayerPopsUp(true);
        newPasswordStore.setShowConfirmDeletePassword(true);
        newPasswordStore.setShow(false);
    }
}

</script>

<style scoped>

.container-button {
    background: #14cb5d;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65%;
    width: 30%; 
    gap: 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    /* padding: 10px 15px; */
}

.style-defect-button-save {
    background: gray;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65%;
    width: 30%; 
    gap: 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.container-button:hover {
    transform: translateY(-2px);
    box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.236);
    background: #1ac05c;
}

.container-button:active {
    transform: translateY(1px);
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.15);
}

.text-button {
    font-size: 13px;
    font-weight: 500;
    color: white;
}

.container-loader {
    /* background-color: red; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85%;
    width: 40%;
}

.disabledButton {
    background: #14cb5d;;
}

</style>