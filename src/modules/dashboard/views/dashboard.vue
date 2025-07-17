<template>
    <div class="container-major"  >
        <div class="container-sidebar-main" :class="{'side-bar-2': showSideBarResponsive}">
            <SideBar></SideBar>
        </div>
        <div class="container-header-majordashboard">
            <HeaderDasboard></HeaderDasboard>
            <showDashboard></showDashboard>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';
import router from '@/router';
import SideBar from '@/modules/dashboard/components/SideBar.vue';
import HeaderDasboard from '@/modules/dashboard/components/HeaderDasboard.vue';
import showDashboard from '@/modules/dashboard/views/showDashboard.vue';
import { useEncryptionsUtilsStore } from '../store/EncryptionsUtilsStore';
import { useLoaderPasswordsStore } from '@/modules/loading/store/loadingPasswordsStore';
import { useNoteStore } from '../store/NoteStore';
import { useNavStore } from '../store/navStore';
import { computed } from 'vue';
import { useShowLayerPopsUp } from '../store/layerPopsUpStore';
import { useRegisterStore } from '@/modules/register/store/registerStore';


const registerStore = useRegisterStore();
const AuthenticationStore = useAuthenticationStore()
const encryptionsUtilsStore = useEncryptionsUtilsStore();
const loaderPasswordsStore = useLoaderPasswordsStore();
const noteStore = useNoteStore();
const layerPopsUpStore = useShowLayerPopsUp();

function beforeUnload() {
    sessionStorage.setItem('dk', registerStore.getDerivedKey());
}
window.addEventListener('beforeunload', beforeUnload);

async function init() {

    // const mk = sessionStorage.getItem('mk');
    // if (mk) {
    //     AuthenticationStore.setPassword(mk);
    //     sessionStorage.removeItem('mk');
    //     await encryptionsUtilsStore.bringPublicKeyBack();
    // }

    

    if (AuthenticationStore.checkAuthentication()) {

        if(registerStore.getIv().length === 0 || registerStore.getSalt().length === 0 ) {
            await AuthenticationStore.bringIvAndSalt();
        }

        const derivedKey = sessionStorage.getItem('dk');
        if(derivedKey != null) {
            registerStore.setDerivedKey(derivedKey);
            sessionStorage.removeItem('dk');
        }
        
        // await encryptionsUtilsStore.generateKeyPair();
        await encryptionsUtilsStore.generateAesKey();

        const token = sessionStorage.getItem("tokenAuthentication");
        AuthenticationStore.setToken(token);

        loaderPasswordsStore.startLoadPasswords();
        await AuthenticationStore.bringPasswords();
        loaderPasswordsStore.stopLoadPassword();
        // AuthenticationStore.checkAuthentication()
        noteStore.bringNotes();
    } else {
        router.push("/login")
    }
}

onMounted(() => {

    init();
    
    let timer = null;

    // Detectar el movimiento del ratón
    const handleMouseMove = () => {
        clearTimeout(timer);
        AuthenticationStore.stopSessionCheck()
        timer = setTimeout(() => {
            console.log("Inicia la verificacion del token")
            AuthenticationStore.startSession(); // Llamada para iniciar la sesión después de inactividad
        }, 10000); // 10 segundos de inactividad
    };

    // Añadir el evento mousemove al documento
    document.addEventListener('mousemove', handleMouseMove);

    // Limpiar el evento cuando el componente se desmonte
    onUnmounted(() => {
        document.removeEventListener('mousemove', handleMouseMove);
        clearTimeout(timer); // Limpiar el temporizador al desmontar
        window.removeEventListener('beforeunload', handleMouseMove)
    });
});

const navStore = useNavStore();

const showSideBarResponsive = computed(() =>{
   
    return navStore.showSideBar;
});


</script>

<style scoped>

.container-major {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    flex-wrap: 1;
    /* filter: brightness(0.8); */
    /* padding: 1rem; */
    /* background-color: gray; */
}

.container-sidebar-main {
    position: relative;
    height: 100%;
    width: 15%;
    
}

.container-header-majordashboard {
    /* background: url('@/assets/img/bgroundPass2.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
    /* background-color: rgba(224, 222, 222, 0.815); */
    /* background-color: rebeccapurple; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 85%;
    padding: 1rem 0.2rem 0 0.2rem;
    gap: 10px;
}



/* @media screen and (min-width: 950px) and (max-width: 1200px) {
    .container-header-majordashboard {
        width: 100%;
    }
    .container-sidebar-main {
        display: none;
    }
} */

@media screen and (min-width: 1000px) and (max-width: 1300px)  {
    .container-sidebar-main  {
        width: 20%;
    }
}

@media screen and (max-width: 1000px) {
    .container-sidebar-main {
        display: none;
    }
    .container-major {
        justify-content: center;
    }
}

@media screen and (max-width: 1000px) {
    .container-header-majordashboard {
        width: 100%;
    }
}

.side-bar-2 {
    position: fixed;
    display: flex;
    width: clamp(15rem, 30vw, 17rem);
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: black;
    z-index: 1800;
    box-shadow: 8px 0px 10px rgba(0, 0, 0, 0.333);
}

/* @media screen and (max-width: 1000px) {
    .container-header-majordashboard {
        width: 100%;
    }
} */
</style>