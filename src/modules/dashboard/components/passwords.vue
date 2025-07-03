<template>
    <div class="container-passwords">
        <div v-if="loadshowPassword" class="container-icon-previus">
                <i class="fa-solid fa-circle-arrow-left icon-previus" @click="previus"></i>
            </div>
        <div class="container-list-pasword-card-password">
            <div class="container-text-copy">
                <p class="text-copy">Contraseña copiada</p>
            </div>
            <component v-if="!loadshowPassword" v-bind:is="listComponets.ListPasswords"></component>
            <component v-if="loadshowPassword" v-bind:is="listComponets.viewCardPassword"></component>
            <p v-if="showNoChanges" class="text-no-changes">¡No se encontraron cambios para guardar!</p>
        </div>
        <div class="container-gen-analityc">
            <component v-bind:is="listComponets.generatorPassword"></component>
            <component v-bind:is="listComponets.notes"></component>
        </div>
    </div>
</template>

<script setup>
import { computed, defineAsyncComponent, ref } from 'vue';
import { useExistingPasswordStore } from '../store/existingPasswordStore';


const listComponets = {
    ListPasswords: defineAsyncComponent(() => import('@/modules/dashboard/components/viewsPasswords/listPasswords.vue')),
    generatorPassword: defineAsyncComponent(() => import('@/modules/dashboard/components/viewsPasswords/generatorPasswords.vue')),
    notes: defineAsyncComponent(() => import('@/modules/dashboard/components/viewsPasswords/NotesUser.vue')),
    viewCardPassword: defineAsyncComponent(() => import('@/modules/dashboard/components/viewsPasswords/viewCardPassword.vue'))
}

const existingPasswordStore = useExistingPasswordStore();

const showNoChanges = computed(() => existingPasswordStore.noChanges);

function previus() {
    existingPasswordStore.setCancel(false);
    existingPasswordStore.noEdit = true;
}
const loadshowPassword = computed(() => existingPasswordStore.getCancel());

</script>

<style scoped>

.container-icon-previus {
    position: absolute;
    /* background-color: red; */
    display: flex;
    align-items: center;
    height: 35px;
    width: 100%;
    top: 15px;
    padding-left: 15px;
    z-index: 100;
}

.icon-previus {
    text-shadow: 0 0 5px #16DB65;
    font-size: 35px;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
}

.container-icon-previus i:hover {
    color: rgba(0, 0, 0, 0.726);
    transform: scale(1.05);
    text-shadow: 1px 5px 5px rgba(59, 58, 58, 0.611);
    font-size: 35px;
}

.container-passwords {
    position: relative;
    /* background-color: red; */
    height: 100%;
    width: 100%;
    /* border: 2px solid green; */
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20PX;
}


.container-list-pasword-card-password {
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
    overflow: hidden;
}

.container-text-copy {
    position: absolute;
    top: 17px;
    display: none;
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 700;
    transition: all ease;
    animation: transitionCopyText 0.5s ease;
}

.text-no-changes {
    position: absolute;
    bottom: 10px;
    /* display: none; */
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 700;
    color: rgb(255, 12, 12);
    transition: all ease;
    animation: transitionCopyText 0.5s ease;
}

.copied-password {
    display: flex;
}

@keyframes transitionCopyText {
    0% {
        transform: translateY(-10px);
    }
}

.container-list-pasword-card-password::before {
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

.container-gen-analityc {
    /* background-color: #16DB65; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 40%;
    gap: 4%;
}

</style>