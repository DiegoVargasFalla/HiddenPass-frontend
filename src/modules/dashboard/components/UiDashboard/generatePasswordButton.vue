<template>
    <div class="container-button">
        <div class="continer-text-button">
            <i class="fa-solid fa-arrows-rotate"></i>
            <h3 class="text-generate">Generar contraseña</h3>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.container-button {
    position: relative;
    background-color: #16DB65;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0 8px;
    border-radius: 15px;
    border: 1px solid rgba(5, 77, 3, 0.278);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    box-shadow:  
        inset 3px 3px 5px rgba(101, 101, 101, 0.474);
}

.container-button:hover {
    transform: translateY(-2px);
    box-shadow:  
        0 3px 9px rgba(0, 0, 0, 0.503),
        inset 3px 3px 5px rgba(101, 101, 101, 0.474);
}

.text-generate {
    font-family: 'Inter';
    font-size: 17px;
    font-weight: 500;
}

.continer-text-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
}

</style>