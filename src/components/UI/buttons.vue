<template>
    <div class="buttonLog" @click="handleSlideBar" :style="{backgroundColor: bgColor, height: height +'rem', width: width +'%', borderRadius: bordeRadius + 'px', border: `2px solid ${colorBorder}`, boxShadow: `0px 2px 6px ${boxShadowColor}`}">
        <a v-if="typeLink" :style="{ color: textColor, fontSize: fontSize + 'rem', fontWeight: fontWeight}" :href="link">{{ label }}</a>
        <RouterLink @click="" v-else :to="link" :style="{ color: textColor, fontSize: fontSize + 'rem', fontWeight: fontWeight}" >{{ label }}</RouterLink>
    </div>
</template>
    
<script setup>
import { computed } from 'vue';

import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';
import { useShowLayerPopsUp } from '@/modules/dashboard/store/layerPopsUpStore';

const authenticationStore = useAuthenticationStore();
const layerPopsUpStore = useShowLayerPopsUp();


const handleSlideBar = () => {
  if (authenticationStore.showSlideBar === true) {
    authenticationStore.setSlideBar(false);
    layerPopsUpStore.setShowLayerPopsUp(false);
  }
}


const props = defineProps({
    label: String,
    link: String,
    bgColor: String,
    textColor: String,
    colorBorder: String,
    boxShadowColor: String,
    height: Number,
    width: Number,
    fontSize: Number,
    fontWeight: Number,
    bordeRadius: Number
})
const typeLink = computed(() => props.link.startsWith('#'));


</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

.buttonLog {
    position: relative;
    height: 2rem;
    width: 10rem;
    border-radius: 7px;
    transition: 0.3s all ease-in-out;
    /* border: 1px solid rgba(0, 128, 0, 0.593); */
    /* box-shadow: 0px 2px 5px 0 rgb(157, 154, 154); */
    display: flex;
    align-items: center;
    text-align: center;
    font-family: "Inter", serif;
    font-size: 1rem;
    overflow: hidden;
}

a {
    position: relative;
    margin: 0 auto;
    text-decoration: none;
    background: none;
    cursor: pointer;
    color: black;
    height: 100%;
    width: 100%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
}

.buttonLog:hover {
    transform: scale(1.04);
    background-color: rgba(179, 178, 178, 0.223);
}
</style>