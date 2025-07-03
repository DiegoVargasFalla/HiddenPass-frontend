<template>
    <div class="layerPopsUp" id="layerPopsUp">
        <formNewPassword v-if="showFormNewPassword"></formNewPassword>
        <ConfirmDeletePassword v-if="showConfirmDeletePassword"></ConfirmDeletePassword>
        <ConfirmDeleteNote v-if="showConfirmDeleteNote"></ConfirmDeleteNote>
        <EditNote v-if="showEditNote"></EditNote>
    </div>
</template>

<script setup>

import formNewPassword from '../newPassword/views/formNewPassword.vue';
import { useNewPasswordStore } from '../newPassword/store/newPasswordStore';
import { computed, onMounted } from 'vue';
import ConfirmDeletePassword from '../viewsPasswords/ConfirmDeletePassword.vue';
import ConfirmDeleteNote from '../viewsPasswords/ConfirmDeleteNote.vue';
import { useNoteStore } from '../../store/NoteStore';
import EditNote from './EditNote.vue';

const newPasswordStore = useNewPasswordStore();
const noteStore = useNoteStore();

const showConfirmDeletePassword = computed(() => newPasswordStore.getShowConfirmDeletePassword())
const showFormNewPassword = computed(() => newPasswordStore.getShow());
const showConfirmDeleteNote = computed(() => noteStore.showConfirmDeleteNote);
const showEditNote = computed(() => noteStore.showEditNote);

</script>

<style scoped>

.layerPopsUp {
    background-color: rgba(0, 0, 0, 0.642);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    z-index: 200;
}


</style>