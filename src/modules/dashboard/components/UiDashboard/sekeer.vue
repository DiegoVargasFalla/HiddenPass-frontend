<template>
    <div class="container-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input v-model="seekerStore.writtenPassword" type="text" name="search" id="" placeholder="Busca una contraseña con el link">
    </div>
</template>

<script setup>
import { useSeekerStore } from '../../store/seekerStore';


const seekerStore = useSeekerStore();

</script>

<style scoped>

.container-search { 
    position: relative;
    background-color: whitesmoke;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    height: 2rem;
    width: 50%;
    padding-left: 15px;
    gap: 5px;
    overflow: hidden;
    padding-right: 0.3rem;
}

.container-search input {
    background: none;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    font-family: 'Inter';
    font-size: 0.95rem;
}

@media screen and (max-width: 600px) {
    .container-search {
        width: 100%;
        min-height: 2rem;
    }
}

</style>