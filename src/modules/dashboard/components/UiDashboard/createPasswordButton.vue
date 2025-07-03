<template>
    <div class="container-button-create-password" @click="onClick">
        <i class="fa-solid fa-plus"></i>
        <h3 class="text-button-create-password">Nueva contraseña</h3>
    </div>
</template>

<script setup>
import { useShowLayerPopsUp } from '../../store/layerPopsUpStore';
import { useNewPasswordStore } from '../newPassword/store/newPasswordStore';
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';
import { useLoaderPasswordsStore } from '@/modules/loading/store/loadingPasswordsStore';

const loaderPasswordsStore = useLoaderPasswordsStore();

const onClick = () => {
    const authenticationStore = useAuthenticationStore();

    if (!loaderPasswordsStore.load) {
        const showLayerPopsUp = useShowLayerPopsUp();
        const showNewPassword = useNewPasswordStore();

        showLayerPopsUp.setShowLayerPopsUp(true);
        showNewPassword.setShow(true)
    } else {
        console.log("")
    }
    
}


</script>

<style scoped>

.container-button-create-password {
    background-color: #16DB65;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    /* width: 120px; */
    border-radius: 15px;
    padding: 0 10px;
    gap: 8px;
    border: 1px solid rgba(5, 77, 3, 0.278);
    box-shadow:  
        inset 3px 3px 5px rgba(101, 101, 101, 0.474);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

.text-button-create-password {
    font-family: 'Inter';
    font-size: 17px;
    font-weight: 500;
}

.container-button-create-password:hover {
    transform: translateY(-3px);
    box-shadow:  
        0 3px 9px rgba(0, 0, 0, 0.503),
        inset 3px 3px 5px rgba(101, 101, 101, 0.474);
    /* background-color: #1DBb65; */
}

</style>