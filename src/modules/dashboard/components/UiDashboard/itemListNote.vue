<template>
    <div class="note-item" @click="showNoteReadOnly">
        <div class="note-title" >
            <h3 class="text-title">{{ modifiedTitle }}</h3>
            <p class="date-note">{{ formatedDate }}</p>
        </div>
        <div class="note-actions">
            <i class="fa-solid fa-pen edit-icon" @click.stop="editNote"></i>
            <i class="fa-solid fa-trash delete-icon" @click.stop="deleteNote"></i>
        </div>
    </div>
</template>

<script setup>

import { computed } from 'vue';
import { useNoteStore } from '../../store/NoteStore';
import { useShowLayerPopsUp } from '../../store/layerPopsUpStore';

const noteStore = useNoteStore();
const layerPopsUpStore = useShowLayerPopsUp();

const props = defineProps({
    id: Number,
    title: String,
    content: String,
    date: String
})

const date = new Date(props.date);
const formatedDate = date.toLocaleDateString("en-CA");

const modifiedTitle = computed(() => {
    if(props.title.length > 25) {
        let newText = '';
        for(let i = 0; i < 25; i++) {
            newText += props.title[i];
        }
        return newText + "...";
    } else {
        return props.title;
    }
})


const editNote = () => {
    layerPopsUpStore.setShowLayerPopsUp(true);
    noteStore.showEditNote = true;
    noteStore.idNote = props.id;
    noteStore.title = props.title;
    noteStore.note = props.content;
    noteStore.date = formatedDate;
    
}

const deleteNote = () => {
    noteStore.noteToDeleteId = props.id;
    layerPopsUpStore.setShowLayerPopsUp(true)
    noteStore.setShowConfirDeleteNote(true);
}

const showNoteReadOnly = () => {
    layerPopsUpStore.setShowLayerPopsUp(true);
    noteStore.showEditNote = true;
    noteStore.readonly = true;

    noteStore.title = props.title;
    noteStore.note = props.content;
    noteStore.date = formatedDate;
}

</script>

<style scoped>

.note-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 14px;
    background-color: #ffffff;
    border: 2px solid #16db65;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
    transition: box-shadow 0.3s ease, transform 0.2s ease;
    cursor: pointer;
    gap: 5%;
}

.note-item:hover {
    background-color: rgba(128, 128, 128, 0.122);
}

.note-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
    /* background-color: #13c058; */
    cursor: pointer;
    /* overflow: hidden; */
    /* max-width: 70%; */
}

.text-title {
    font-size: 15px;
    font-weight: 500;
}

.date-note {
    color: #484747bb;
    font-family: 'Inter';
    font-size: 12px;
}

.note-actions {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 12px;
    /* background-color: red; */
    z-index: 150;
}

.edit-icon,
.delete-icon {
    font-size: 17px;
    cursor: pointer;
    transition: color 0.2s ease;
}

.edit-icon {
    color: #16db65;
}

.edit-icon:hover {
    color: #13c058;
}

.delete-icon {
    color: #ff5555;
}

.delete-icon:hover {
    color: #e60000;
}


</style>