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
        ></itemMenu>
    </nav>
</template>

<script setup>
import itemMenu from './itemMenu.vue';

const menuItems = [
    {text: "Contraseñas", icon: "fa-solid fa-lock", size: 17, weight: 300, name: "passwords", id: "passwordsId", link:'', component: 'Passwords'},
    // {text: "Seguridad", icon: " fa-solid fa-shield-halved", size: 17, weight: 300, name: "menu", id: "seguridad", link:'/', component: 'Security'},
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