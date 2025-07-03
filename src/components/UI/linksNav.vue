<template>
    <div class="sections">
        <a :href="link" class="textSections" :style="{color: colorText}">{{ lable }}</a>
    </div>
</template>

<script setup>

const porps = defineProps({
    lable: String,
    link: String,
    colorText: String
})
</script>

<style scoped>

.sections {
    position: relative;
    font-family: "Inter", serif;
    font-size: 20px;
    transition: 0.3s all ease-in-out;
    cursor: pointer;
}

.textSections {
    color: black;
    text-decoration: none;
    font-weight: 250;
    word-spacing: -1px;
}

.textSections:hover {
    color: rgba(0, 0, 0, 0.83);
}

.sections:hover {
    transform: scale(1.1);
}

</style>