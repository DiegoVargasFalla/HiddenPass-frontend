<template>
    <div class="container-notes">
        <div class="container-title">
            <div class="second-container-title">
                <i class="fa-solid fa-clipboard"></i>
                <h1 class="text-title">Notas</h1>
            </div>
            <p v-if="checkSavedNote" class="text-confirm-saved-note">Nota guardada</p>
            <div class="container-menu-notes" ref="menuRef">
                <i class="fa-solid fa-bars icon-menu-notes" @click="toggleMenu"></i>
                <div class="container-options-menu-notes" v-if="showMenu" >
                    <ul class="list-notes-ul">
                        <li @click="showCreteNote" class="list-notes-item"> <i class="fa-solid fa-circle-plus icon-add"></i>Crear nota</li>
                        <li @click="showListNotes" class="list-notes-item"> <i class="fa-solid fa-rectangle-list icon-list"></i>Lista de notas</li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-if="!handleShowListNote" class="container-components">
            <titleAndNoteComponent ></titleAndNoteComponent>
        </div>
        <div v-if="handleShowListNote" class="container-componetn-list-note">
            <listNotes ></listNotes>
        </div>
        <div class="container-bottom">
            <p v-if="showError" class="errorNote">Ingresa una nota para guardar</p>
            <div v-if="!handleShowListNote" class="container-buttons">
                <button @click="noteClean" class="button-clean button">Limpiar</button>
                <button @click="saveNote" class="button-save button"> <div v-if="loadCircle" class="ContainerLoadCircle"> <div class="loadCircle"></div></div> <p v-if="!loadCircle" class="saveText">Guardar</p></button>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useNoteStore } from '../../store/NoteStore';
import { computed, onBeforeMount, onMounted, ref } from 'vue';
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';
import titleAndNoteComponent from '../UiDashboard/titleAndNoteComponent.vue';
import listNotes from '../UiDashboard/listNotes.vue';

const noteStore = useNoteStore();
const authenticationStore = useAuthenticationStore();

const checkSavedNote = ref(false);

const loadCircle = computed(() => {
    return  noteStore.getLoadCirlce();
});

const showError = computed(() => {
    return noteStore.getError();
})

const noteClean = () => {
    noteStore.setNote('');
    noteStore.setTitle('');
    noteStore.setError(false);
}

const showMenu = ref(false);
const menuRef = ref(null);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const showListNotes = () => {
    noteStore.showListNotes = true;
    showMenu.value = false;
}

const showCreteNote = () => {
    noteStore.showListNotes = false;
    showMenu.value = false;
}

const handleShowListNote = computed(() => noteStore.showListNotes);

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    showMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeMount(() => {
  document.removeEventListener('click', handleClickOutside);
});

const saveNote = async () => {

    if(noteStore.getTitle() && noteStore.getNote()) {
        noteStore.setError(false);
        const note = await noteStore.saveNote(noteStore.getTitle(), noteStore.getNote(), authenticationStore.getPassword(), authenticationStore.getToken());
        checkSavedNote.value = true;

        noteStore.getListNotes().unshift(note);
        noteClean();

        setTimeout(() => {
            checkSavedNote.value = false;
        }, 2000)
    
    } else {
        noteStore.setError(true);
    }
    
}
</script>

<style scoped>

.container-notes {
    position: relative;
    /* background-color: rgba(17, 135, 66, 0.699); */
    height: 48%;
    width: 100%;
    border-radius: 20px;
    padding: 0px 13px;
    flex: none;
    overflow: hidden;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
    
}

.container-analitics::before {
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

.container-title {
    position: relative;
    /* background-color: gray; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 18%;
    /* gap: 6px; */
}

.second-container-title {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
}

.container-title i {
    font-size: 20px;
}

.container-menu-notes {
    position: relative;
    display: inline-block;
}

.icon-menu-notes {
    font-size: 20px;
    cursor: pointer;
    transition: all 0.1s ease;
}

.icon-menu-notes:hover {
    transform: translateY(-2px);
    color: rgb(30, 29, 29);
}

.text-title {
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 700;
}

.text-confirm-saved-note {
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 600;
    animation: transitionCopyText 1s ease;
}

@keyframes transitionCopyText {
    0% {
        transform: translateY(-14px);
    }
}


.container-options-menu-notes {
    position: absolute;
    /* top: 30px; */
    right: 0;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 50;
    width: 128px;
    /* background-color: rgb(202, 202, 202); */
    z-index: 200;
}

.list-notes-ul {
    list-style: none;
    margin: 0;
    padding: 3px 3px;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    gap: 3px;
    border-radius: 8px;
    border: solid 0.5px black;
}

.list-notes-item {
    padding: 2px 4px;
    width: 100%;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 500;
    color: black;
    cursor: pointer;
    transition: background-color 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
    border-radius: 7px;
    }

.list-notes-item .icon-add {
    font-size: 15px;
    color: #16DB65;
}

.list-notes-item .icon-list {
    font-size: 15px;
    color: rgb(36, 36, 255);
}

.list-notes-item:hover {
    background-color: rgba(174, 173, 173, 0.805);
}

.container-square-text {
    position: relative;
    /* background-color: gray; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
}

.container-components,
.container-componetn-list-note {
    /* background-color: red; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 65%;
    width: 100%;
}

.container-componetn-list-note {
    height: 80%;
}

.container-textarea {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 12px;
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 500;
    color: #333;
    resize: none;
}

.container-bottom {
    position: relative;
    /* background-color: gray; */
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 16px;
}

.errorNote {
    position: relative;
    font-family: 'Inter';
    font-size: 12px;
    font-weight: 700;
    color: red;
}

.container-buttons {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 85%;
    width: 52%;
}

.button {
    position: relative;
    height: 100%;
    width: 100px;
    font-family: 'Inter';
    text-transform: uppercase;
}

.button:hover {
    transform: translateY(-2px);
    box-shadow:  
        0 2px 9px rgba(0, 0, 0, 0.503),
        inset 3px 3px 5px rgba(101, 101, 101, 0.474);
}

.button {
  width: 100px;
  height: 90%;
  border: none;
  border-radius: 11px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Botón Limpiar */
.button-clean {
  background-color: #ffffff;
  color: #000000;
  border: 2px solid #000000;
  height: 100%;
}

.button-clean:hover {
  background-color: #f2f2f2;
}

/* Botón Guardar */
.button-save {
  background-color: #16db65;
  color: black;
  border: 2px solid #16db65;
  box-shadow: inset 3px 3px 5px rgba(101, 101, 101, 0.474);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.button-save:hover {
  background-color: #13c058;
}

.container-title-note {
    /* background-color: gray; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
}

.inptut-titel-note {
    position: relative;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 500;
    color: #333;
}

.ContainerLoadCircle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* centra en pantalla */
    
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 85%;
    width: 24%;
    border-radius: 50%;
    padding: 3px;
    overflow: hidden;
}

.ContainerLoadCircle::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 100%;
    height: 100%;
    width: 100%;
    transform-origin: top center;
    background: linear-gradient(to right, #09873b 30%, #0e873f 30%, transparent, transparent);
    animation: spinLoad 0.5s linear infinite;
}

@keyframes spinLoad {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    } 
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

.loadCircle {
    background-color: #13c058;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    width: 100%;
    border-radius: 50%;
}


</style>