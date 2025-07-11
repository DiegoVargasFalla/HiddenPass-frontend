<template>
    <nav class="nav-settings-options">
        <itemMenu 
        v-for="(item, index) in itemSetting"
        :key="index"
        :text="item.text"
        :icon="item.icon"
        :size="item.size"
        :name="item.name"
        :id-element="item.id"
        :link="item.link"
        :componet=item.component
        ></itemMenu>
    </nav>
</template>

<script setup>
import itemMenu from './itemMenu.vue';

const itemSetting =[
    // {text: "Configuraciones", icon: "fa-solid fa-gear", size: 15, name: "Settings", id: 'settingsId', component: "Settings"},
    {text: "Cerrar sesión", icon: "fa-solid fa-right-from-bracket", size: 15, name: "logout", id: 'logout',},
]
</script>

<style scoped>

.nav-settings-options {
    position: relative;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    width: 100%;

}

</style>