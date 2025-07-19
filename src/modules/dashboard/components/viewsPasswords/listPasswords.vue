<template>
    <div class="cont-filters-main">
        <containerFilters></containerFilters>
        <sekeer></sekeer>
    </div>
    <div class="cont-passwords">
        <div class="cont-title-list-pass">
            <i class="fa-solid fa-list"></i>
            <h2 class="tittle-list-pass">Lista de contraseñas</h2>
        </div>
        <div class="container-create-password">
            <div class="container-num-passwords">
                <h3 class="text-num-passwords">Contraseñas:</h3>
                <span class="text-num-passwords">{{ numPassword }}</span>
            </div>
            <createPasswordButton></createPasswordButton>
        </div>
        <div class="cont-cards-pass">
            <span v-if="noPassword" class="text-no-passwords">No tienes contraseñas aun </span>
            <!-- <div class="se"></div> -->
            <div class="loader-passwords">
                <loaderPasswords v-if="loaderPasswordsStore.load"></loaderPasswords>
            </div>
             
            <passwordCard v-if="!showListFoundPassword"
            v-for="(item, index) in authenticationStore.getListPassword()"
            :key="index"
            :id="item.id"
            :namesite="item.url"
            :logo="'fa-solid fa-circle'"
            ></passwordCard>

            <passwordCard v-if="showListFoundPassword"
            v-for="(item, index) in listFoundPassword"
            :key="index"
            :id="item.id"
            :namesite="item.url"
            :logo="'fa-solid fa-circle'"
            ></passwordCard>
        </div>
    </div>
</template>

<script setup>
import createPasswordButton from '../UiDashboard/createPasswordButton.vue';
import passwordCard from '../UiDashboard/passwordCard.vue';
import containerFilters from '../UiDashboard/containerFilters.vue';
import sekeer from '../UiDashboard/sekeer.vue';
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';
import { computed, onMounted } from 'vue';
import loaderPasswords from '@/modules/loading/views/loaderPasswords.vue';
import { useLoaderPasswordsStore } from '@/modules/loading/store/loadingPasswordsStore';
import LoaderPasswords from '@/modules/loading/views/loaderPasswords.vue';
import { useSeekerStore } from '../../store/seekerStore';

const seekerStore = useSeekerStore();
const authenticationStore = useAuthenticationStore();
const loaderPasswordsStore = useLoaderPasswordsStore();

const numPassword = computed(() =>  authenticationStore.getNumPasswords());

const noPassword = computed(() => authenticationStore.getListPassword().length === 0 ? true : false)

const showListFoundPassword = computed(() => seekerStore.writtenPassword.length > 0);
const wordPassword = computed(() => seekerStore.getWrittenPassword());

const listFoundPassword = computed(() => {
    return authenticationStore.getListPassword().filter(p => p.url.toLowerCase().includes(wordPassword.value.toLocaleLowerCase()))
})

// window.addEventListener('beforeunload', saveTempKey)

</script>

<style scoped>

.container-list-passwords-and-filters {
    /* background-color: green; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 60%;
    border-radius: 20px;
    box-shadow:  
        0 5px 20px rgba(0, 0, 0, 0.282), /* Sombra principal difusa */
        0 4px 6px rgba(0, 0, 0, 0.05),  /* Sombra más cercana */
        0 1px 3px rgba(0, 0, 0, 0.03);  /* Detalle fino */
    border: 1px solid rgba(0, 0, 0, 0.119);
}

.container-list-passwords-and-filters::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(165, 164, 164, 0.074) 0.5mm, transparent 1px);
    background-size: 5px 5px;
    opacity: 0.4;
    pointer-events: none;
    background-size: 2mm 2mm;
}

.cont-filters-main {
    position: relative;
    background-color: #12100D;
    height: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
}

.cont-passwords {
    position: relative;
    /* background-color: bisque; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    height: 90%;
    width: 100%;
    gap: 10px;
    overflow: hidden;
    padding: 0.7rem 0;
}

.cont-title-list-pass {
    position: relative;
    /* background-color: aliceblue; */
    display: flex;
    align-items: center;
    height: 20px;
    width: 100%;
    margin-left: 65px;
    gap: 10px;
}

.cont-title-list-pass i {
    font-size: 20px;
    font-weight: 700;
}


.tittle-list-pass {
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 700;
}

.container-create-password {
    position: relative;
    /* background-color: rebeccapurple; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: 90%;
    /* margin-top: 15px; */
    padding-left: 15px;
}

.container-num-passwords {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
}

.text-num-passwords,
.text-no-passwords {
    font-family: 'Inter';
    font-size: clamp(0.8rem, 1.5vw, 1rem);
    font-weight: 500;
}

.text-no-passwords {
    color: rgba(0, 0, 0, 0.523);
    font-size: 17px;
}

.cont-cards-pass {
    position: relative;
    /* background-color: brown; */
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 0.8rem;
    overflow-y: auto;
    overflow-x: hidden;
    /* padding-bottom: 20px; */
    overflow-y: scroll;
    animation: slidePasswords 0.2s ease;
}

@keyframes slidePasswords {
    0% {
        transform: translateX(-300px);
    }
}

.loader-passwords {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    margin-top: 120px;
}

/* Personalización de la barra de desplazamiento para Webkit */
.cont-cards-pass::-webkit-scrollbar {
    width: 7px; /*Ancho de la barra de desplazamiento */
    /* height: 5px; Altura si es un scroll horizontal */

}

.cont-cards-pass::-webkit-scrollbar-thumb {
    background-color: #16DB65; /* Color de la parte que puedes mover (thumb) */
    border-radius: 4px; /* Bordes redondeados */
}

.cont-cards-pass::-webkit-scrollbar-thumb:hover {
    background-color: #16DB65; /* Color al hacer hover sobre la parte desplazable */
}

.cont-cards-pass::-webkit-scrollbar-track {
    background-color: #0000007a; /* Color de la parte de fondo de la barra de scroll */
    border-radius: 6px; /* Bordes redondeados */
}



.container-list-notes::-webkit-scrollbar {
    width: 4.5px;
}

.container-list-notes::-webkit-scrollbar-thumb {
    background-color: #16DB65; /* Color de la parte que puedes mover (thumb) */
    border-radius: 4px;
}

.container-list-notes::-webkit-scrollbar-thumb:hover {
    background-color: #16DB65; /* Color al hacer hover sobre la parte desplazable */
}

.container-list-notes::-webkit-scrollbar-track {
    background-color: #0000007a; /* Color de la parte de fondo de la barra de scroll */
    border-radius: 6px; /* Bordes redondeados */
}

@media screen and (max-width: 600px) {
    .cont-filters-main {
        /* background-color: red; */
        height: 17%;
        align-items: start;
        flex-direction: column;
        padding: 0.6rem 1rem;
        gap: 0.28rem;
    }
    .cont-passwords {
        height: 83%;
    }
    .container-create-password {
        flex-direction: column;
        align-items: start;
        gap: 0.5rem;
    }
    .container-num-passwords {
        order: 2;
    }
}
</style>