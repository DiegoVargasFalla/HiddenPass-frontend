<template>
    <div class="feature-item">
        <i :class="['icons', icon]"></i>
        <h3 class="title-items-funtions">{{ textTittle }}</h3>
        <p class="text-item">{{ textP }}</p>
    </div>
</template>

<script setup>

defineProps({
    icon: String,
    textTittle: String,
    textP: String
})

</script>

<style scoped>

.feature-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    padding: 0 10px;
    gap: 0.5rem;
    max-width: 100%;
}

.title-items-funtions {
    font-size: 1.2rem;
    font-family: "Archivo Black", serif;
    /* font-weight: 600; */
}

.icons {
    color: #16DB65;
    font-size: 2rem;
}

.text-item {
    font-family: "inter";
    font-size: clamp(0.9rem, 2.2vw, 1rem);
    text-align: center;
    margin: 0 auto;
    max-width: 15.6rem;
}

@media screen and (max-width: 400px) {
    .feature-item {
        max-width: 100%;
    }
    .text-item {
        text-align: center;
        font-size:0.95rem;
        max-width: 90%;
    }
    .title-items-funtions {
        text-align: center;
    }
}

</style>