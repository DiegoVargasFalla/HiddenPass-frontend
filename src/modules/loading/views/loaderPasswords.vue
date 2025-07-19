<template>
    <div class="container-loader" :style="{width: width + 'rem'}">
        <div class="circle-center"></div>
    </div>
</template>

<script setup>

const props = defineProps({
    width: Number
})


</script>

<style scoped>
.container-loader {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.158);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    /* max-width: 1.6rem; */
    border-radius: 50%;
    padding: 0.25rem;
    overflow: hidden;
}

.container-loader::before {
    content: "";
    position: absolute;
    top: 50%;
    height: 2rem;
    width: 2rem;
    transform-origin: top center;
    background: linear-gradient(to right, #09873b 40%, #0e873f 40%, #0e9042 20%, transparent);
    animation: spin 0.5s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    } 
    100% {
        transform: rotate(360deg);
    }
}

.circle-center {
    background-color: whitesmoke;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border-radius: 50%;
}


</style>