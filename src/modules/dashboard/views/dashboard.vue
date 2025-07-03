<template>
    <div class="container-major">
        <div class="container-sidebar-main">
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
import NotesUser from '../components/viewsPasswords/NotesUser.vue';
import { useNoteStore } from '../store/NoteStore';


const AuthenticationStore = useAuthenticationStore()
const encryptionsUtilsStore = useEncryptionsUtilsStore();
const loaderPasswordsStore = useLoaderPasswordsStore();
const noteStore = useNoteStore();

function beforeUnload() {
    sessionStorage.setItem('mk', AuthenticationStore.getPassword());
}
window.addEventListener('beforeunload', beforeUnload);

async function init() {

    const mk = sessionStorage.getItem('mk');
    if (mk) {
        AuthenticationStore.setPassword(mk);
        sessionStorage.removeItem('mk');
        await encryptionsUtilsStore.bringPublicKeyBack();
    }

    if (sessionStorage.getItem('tokenAuthentication')) {
        
        await encryptionsUtilsStore.generateKeyPair();
        await encryptionsUtilsStore.generateAesKey();
    

        const token = sessionStorage.getItem("tokenAuthentication");
        AuthenticationStore.setToken(token);

        loaderPasswordsStore.startLoadPasswords();
        await AuthenticationStore.bringPasswords();
        loaderPasswordsStore.stopLoadPassword();
        AuthenticationStore.checkAuthentication()
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
        window.removeEventListener('beforeunload')
    });
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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 85%;
    padding: 1rem;
    gap: 10px;
}

</style>