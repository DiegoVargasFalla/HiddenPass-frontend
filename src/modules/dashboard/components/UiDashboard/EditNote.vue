<template>
  <div class="popup-note">
    <div class="popup-header">
        <span class="note-date">{{ noteStore.date }}</span>
        <div class="icons-read-and-close-pop">
          <span v-if="readonlyNote" >  <i class="fa-solid fa-lock icon-read"></i>  Modo lectura</span>
          <span v-else class="">  <i class="fa-solid fa-unlock icon-write"></i> Modo escritura</span>  
          <i class="fa-solid fa-xmark icon-close" @click="closePopup"></i>
        </div>
    </div>
    <input
      :readonly="readonlyNote"
      v-model="valueModelInputTitle"
      class="note-title"
      placeholder="Título de la nota"
    />
    <textarea
      :readonly="readonlyNote"
      v-model="valueModelInputNote"
      class="note-content"
      placeholder="Escribe tu nota aquí..."
    ></textarea>
    <div v-if="!readonlyNote" class="popup-footer">
        <div>
            <p v-if="checkFileds" class="text-no-changes">¡No se encontraron cambios para guardar!</p>
        </div>
      <button class="btn-save" @click="saveNote"> <div v-if="noteStore.showLoaderSaveUpdate" class="container-main-loader-update"> <div class="container-loader-update"></div></div> <p v-if="!noteStore.showLoaderSaveUpdate" class="text-save-update">Guardar</p></button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useShowLayerPopsUp } from '../../store/layerPopsUpStore'
import { useNoteStore } from '../../store/NoteStore';

const layerPopsUpStore = useShowLayerPopsUp();
const noteStore = useNoteStore();


const props = defineProps({
  id: String,
  title: String,
  content: String,
  date: String
})

const checkFileds = computed(() => {
    return noteStore.noChanges;
})

const readonlyNote = computed(() => noteStore.readonly);
console.log("-> readOnly: " + readonlyNote.value)

const noNullFieldsEditionNote = () => {
    if(noteStore.newNoteDTO.title !== null ||
        noteStore.newNoteDTO.content !== null) {
        return true;
    } else {
        noteStore.noChanges = true

        setTimeout(() => {
            noteStore.noChanges = false;
        }, 2000)
        return false;
    }
}

const closePopup = () => {
    layerPopsUpStore.setShowLayerPopsUp(false);
    noteStore.showEditNote = false;

    noteStore.id = 0;
    noteStore.title = "";
    noteStore.note = "";

    noteStore.readonly = false;

}

const saveNote = async () => {
    if(noNullFieldsEditionNote()) {
        console.log("ingresando en edit a actualizar la nota");
        await noteStore.updateNote();
        layerPopsUpStore.setShowLayerPopsUp(false);
        noteStore.showEditNote = false;
    }
}

const valueModelInputTitle = computed({
    get() {
        return noteStore.title;
    },
    set(value) {
        noteStore.newNoteDTO.id = noteStore.idNote;
        noteStore.title = value;
        noteStore.newNoteDTO.title = value;
    }
})

const valueModelInputNote = computed({
    get() {
        return noteStore.note;
    },
    set(value) {
        noteStore.newNoteDTO.id = noteStore.idNote;
        noteStore.note = value;
        noteStore.newNoteDTO.content = value;
    }
})
</script>

<style scoped>
.popup-note {
  background-color: white;
  border-radius: 14px;
  padding: 0.7rem 1.3rem;
  width: 60%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Inter';
  position: relative;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.note-date {
  font-size: 0.8rem;
  font-weight: 500;
  color: #555;
}

.icons-read-and-close-pop {
  position: relative;
  /* background-color: red; */
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 2rem;
}

.icon-read {
  font-size: 1.2rem;
  /* font-weight: 400; */
  color: rgba(255, 0, 0, 0.695);
}

.icon-write {
  font-size: 1.2rem;
  /* font-weight: 400; */
  color: #16db65;
}

.icon-close {
  font-size: 25px;
  cursor: pointer;
  color: #333;
  transition: transform 0.2s ease;
}
.icon-close:hover {
  transform: rotate(90deg);
  color: red;
}

.note-title {
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-bottom: 2px solid #16DB65;
  outline: none;
  margin-top: 10px;
  padding: 8px 0;
  color: #333;
  background-color: transparent;
}

.note-content {
  flex: 1;
  margin-top: 20px;
  border: none;
  border-radius: 12px;
  background-color: #efebebd0;
  padding: 9px;
  font-size: 16px;
  resize: none;
  outline: none;
  color: #333;
  font-family: 'Inter';
  box-shadow: inset 0 1px 3px rgba(0,0,0,0.1);
}

.popup-footer {
  display: flex;
  justify-content: space-between;
  height: 9%;
  width: 100%;
  margin-top: 20px;
  /* background-color: red; */
}

.text-no-changes {
    bottom: 10px;
    /* display: none; */
    font-family: 'Inter';
    font-size: 1rem;
    font-weight: 700;
    color: rgb(255, 12, 12);
    transition: all ease;
    animation: transitionNoChanges 0.5s ease;
}

@keyframes transitionNoChanges {
    0% {
        transform: translateY(-10px);
    }
}

.btn-save {
  background-color: #16DB65;
  border: none;
  color: white;
  /* padding: 10px 18px; */
  border-radius: 10px;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90%;
  width: 12%;
  transition: background-color 0.2s ease;
}

.btn-save:hover {
  background-color: #13c058;
}

.container-main-loader-update {
    position: relative;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85%;
    width: 35%;
    border-radius: 50%;
    padding: 2px;
    overflow: hidden;
}

.container-main-loader-update::before {
    content: "";
    position: absolute;
    top: 50%;
    height: 30px;
    width: 30px;
    transform-origin: top center;
    background: linear-gradient(to right, #09873bd5 40%, #0e873eb3 20%, transparent);
    animation: spin 0.5s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    } 
    100% {
        transform: rotate(360deg);
    }
}

.container-loader-update {
    background-color: #16DB65;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 50%;
}

.text-save-update {
    /* display: none; */
    font-family: 'Inter';
    color: white;
}

@media screen and (max-width: 1000px) {
  .popup-note {
    width: 80%;

  } 
}

@media screen and (max-width: 800px) {
  .popup-note {
    width: 80%;
  } 
}

@media screen and (max-width: 600px) {
  .popup-note {
    width: 95%;
    padding: 0.7rem 0.9rem;
  } 
}

@media screen and (max-width: 500px) {
  .icons-read-and-close-pop{
    width: 70%;
  } 
}

@media screen and (max-width: 340px) {
  .icons-read-and-close-pop{
    width: 55%;
    gap: 0.2rem;
  } 
}

</style>
