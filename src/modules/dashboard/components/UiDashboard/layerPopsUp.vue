<template>
    <div class="layerPopsUp" id="layerPopsUp" @click="closeSlideBar">
        <formNewPassword v-if="showFormNewPassword"></formNewPassword>
        <ConfirmDeletePassword v-if="showConfirmDeletePassword"></ConfirmDeletePassword>
        <ConfirmDeleteNote v-if="showConfirmDeleteNote"></ConfirmDeleteNote>
        <EditNote v-if="showEditNote"></EditNote>
        <ConfirmLogOut v-if="showLayerLogout"></ConfirmLogOut>
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
import ConfirmLogOut from '../viewsPasswords/ConfirmLogOut.vue';
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';
import { useShowLayerPopsUp } from '../../store/layerPopsUpStore';
import { useNavStore } from '../../store/navStore';

const newPasswordStore = useNewPasswordStore();
const noteStore = useNoteStore();
const authenticationStore = useAuthenticationStore();
const showLayerPopsUpStore = useShowLayerPopsUp();

const showConfirmDeletePassword = computed(() => newPasswordStore.getShowConfirmDeletePassword())
const showFormNewPassword = computed(() => newPasswordStore.getShow());
const showConfirmDeleteNote = computed(() => noteStore.showConfirmDeleteNote);
const showEditNote = computed(() => noteStore.showEditNote);
const showLayerLogout = computed(() => authenticationStore.showLayerLogout);
const navStore = useNavStore();


const closeSlideBar = computed( () => {
    if(authenticationStore.showSlideBar === true){
        authenticationStore.setSlideBar(false);
        showLayerPopsUpStore.setShowLayerPopsUp(false);
    }
    if(navStore.showSideBar === true) {
        navStore.showSideBar = false;
        showLayerPopsUpStore.setShowLayerPopsUp(false);
    }
})

</script>

<style scoped>

.layerPopsUp {
    background-color: rgba(0, 0, 0, 0.642);
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    z-index: 1500;
}


</style>