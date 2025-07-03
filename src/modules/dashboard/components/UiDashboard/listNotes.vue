<template>
    <div class="container-list-notes">
        <p v-if="showLoadNotes" class="text-load-note">Cargando notas...</p>
        <div v-if="showLoadNotes" class="container-loader-notes">
            <loaderPasswords></loaderPasswords>
        </div>

        <itemListNote 
        v-for="note, index in noteStore.listNotes"
        :key="index"
        :id="note.id"
        :title="note.title"
        :content="note.content"
        :date="note.creationDateClient"
        ></itemListNote>
    </div>
</template>

<script setup>
import itemListNote from './itemListNote.vue';
import { useNoteStore } from '../../store/NoteStore';
import loaderPasswords from '@/modules/loading/views/loaderPasswords.vue';
import { compile, computed } from 'vue';

const noteStore = useNoteStore();

const showLoadNotes = computed(() => noteStore.showLoaderNotes);

</script>

<style scoped>
.container-list-notes {
    /* background-color: orange; */
    position: relative;
    max-height: 100%;
    height: 100%;
    width: 100%;
    font-family: 'Inter';
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    padding: 4px;
    overflow-y: auto;
}

.text-load-note {
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
    color: gray;
    /* margin-top: 30px; */
}

.container-loader-notes {
    /* margin-top: 50px; */
    position: relative;
    height: 50px;
    width: 50px;
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

</style>
