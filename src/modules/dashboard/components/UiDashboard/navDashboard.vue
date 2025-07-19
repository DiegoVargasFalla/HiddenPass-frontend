<template>
    <nav class="nav-options">
        <itemMenu
        v-for="(item, index) in menuItems"
        :key="index"
        :text="item.text"
        :icon="item.icon"
        :size="item.size"
        :weight="item.weight"
        :name="item.name"
        :id-element="item.id"
        :link="item.link"
        :componet="item.component"
        :show="item.show"
        ></itemMenu>
    </nav>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import itemMenu from './itemMenu.vue';
import { useNavStore } from '../../store/navStore';
import { useNoteStore } from '../../store/NoteStore';
import { useGeneratorPassStore } from '../../store/generatePassStore';


// const generatePassStore = useGeneratorPassStore();
// const noteStore = useNoteStore();
// const navStore = useNavStore();
const windowWidth = ref(window.innerWidth);

onMounted(() => {
    window.addEventListener('resize', updateWidth);
})

onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
})

function updateWidth() {
    windowWidth.value = window.innerWidth;
}

const showItemNavDashboard = computed(() =>  windowWidth.value <= 1000);


const menuItems = [
    {text: "Contraseñas", icon: "fa-solid fa-lock", size: 17, weight: 300, name: "passwords", id: "passwordsId", link:'', component: 'Passwords', show: true},
    {text: "Notas", icon: "fa-solid fa-clipboard", size: 17, weight: 300, name: "notes", id: "notesId", link:'', component: 'Notes', show: showItemNavDashboard.value},
    {text: "Generador", icon: "fa-solid fa-repeat", size: 17, weight: 300, name: "generator", id: "generatorId", link:'', component: 'Generator', show: showItemNavDashboard.value},
    // {text: "Seguridad", icon: " fa-solid fa-shield-halved", size: 17, weight: 300, name: "menu", id: "seguridad", link:'/', component: 'Security', show: true},
    // {text: "Otros", icon: "fa-solid fa-ellipsis", size: 17, weight: 300, name: "others" , id: "othersId", link:'/', component: 'Settings'},
]
</script>

<style scoped>

.nav-options {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    gap: 10px;
}

</style>