<template>
  <div class="container-inputs">
    <div class="container-title-note">
      <input
        v-model="title"
        type="text"
        name="title-note"
        id="titelNoteId"
        class="inptut-titel-note"
        placeholder="Título"
      />
    </div>
    <div class="container-square-text">
      <textarea
        v-model="note"
        name="note"
        id="noteId"
        placeholder="Escribe una nota..."
        class="container-textarea"
      ></textarea>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useNoteStore } from '../../store/NoteStore';

const noteStore = useNoteStore();
const { note, title } = storeToRefs(noteStore);
</script>

<style scoped>
.container-inputs {
    /* background-color: red; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    gap: 2%;
}

.container-title-note {
    /* background-color: orange; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    height: 15%;
}

.container-square-text {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 85%;
}

.inptut-titel-note {
  width: 100%;
  /* padding: 10px 14px; */
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  border: none;
  border-bottom: 2px solid #16DB65;
  background-color: transparent;
  outline: none;
  transition: border-color 0.2s ease;
  height: 80%;
}

.inptut-titel-note:focus {
  border-color: #13c058;
}

.container-textarea {
  width: 100%;
  height: 100%;
  padding: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  border: none;
  border-radius: 12px;
  background-color: #efebebd0;
  resize: none;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  outline: none;
}

@media screen and (max-width: 1000px) {
  .container-title-note{
    height: 10%;
  }
  .container-square-text {
    height: 90%;
  }
}
</style>
