<template>
    <div class="container-search">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="search" id="" placeholder="busca una contraseña">
    </div>
</template>

<script setup></script>

<style scoped>

.container-search { 
    position: relative;
    background-color: #cdc9c9;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    height: 35px;
    width: 60%;
    padding-left: 15px;
    gap: 5px;
    overflow: hidden;
    padding-right: 5px;
}

.container-search input {
    background: none;
    border: none;
    height: 100%;
    width: 100%;
    outline: none;
    font-family: 'Inter';
    font-size: 15px;
}

</style>