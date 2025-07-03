<template>
    <div class="feature-item">
        <i :class="['icons', icon]"></i>
        <h3 class="title-items-funtions">{{ textTittle }}</h3>
        <p>{{ textP }}</p>
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
    position: relative;
}

.title-items-funtions {
    font-size: 20px;
    font-family: "Archivo Black", serif;
    /* font-weight: 600; */
}

.icons {
    color: #16DB65;
    font-size: 30px;
}

p {
    font-family: "inter";
    font-size: 17px;
}

</style>