<template>
    <div class="cont-options">
        <div class="content-items-menu" @click="handleClick">
            <i id="iconId" :style="{fontSize: size + 'px'}" :class="['iconUnselected', {'icon-selected': isSelected}, icon]"></i>
            <a :id="idElement" :class="{'styles-selected': isSelected}" class="text-options" :style="{fontSize: size + 'px', fontWeight: weight}">{{ text }}</a>
        </div>
        <div style="" :id="idElement" :class="{['unselected']: noSelected}"></div>
        <div :class="{['efect-select']: isSelected}" style="" :id="idElement"></div>
    </div>
</template>

<script setup>
import { useNavStore } from '@/modules/dashboard/store/navStore';
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';
import { computed } from 'vue';
import { useShowLayerPopsUp } from '../../store/layerPopsUpStore';


const props = defineProps({
    text: String,
    size: Number,
    weight: Number,
    icon: String,
    colorIcon: String,
    name: String,
    idElement: String,
    link: String,
    componet: String
})


const navStore = useNavStore();
const authenticationStore = useAuthenticationStore();
const showLayerPopsUp = useShowLayerPopsUp();

// Computed para verificar si el elemento actual está seleccionado
const isSelected = computed(() => navStore.selectedElement === props.idElement);
const noSelected = computed(() => navStore.selectedElement != props.idElement);


const handleClick = () => {

    if (props.idElement != 'logout'){
        navStore.setElement(props.idElement);
        navStore.setSection(props.componet);
    } else {
        showLayerPopsUp.setShowLayerPopsUp(true);
        authenticationStore.setShowLayerLogout(true);
        navStore.showSideBar = false;
    }
};

</script>

<style scoped>

.content-items-menu {
    /* background-color: red; */
    position: relative;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.content-items-menu:hover ~ .unselected {
    position: absolute;
    background-color: rgba(231, 226, 226, 0.148);
    height: 100%;
    width: 85%;
    left: 0;
    border-radius: 0 30px 30px 0;
    z-index: 50;
}

.cont-options {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: start;
    height: 30px;
    width: 100%;
    padding-left: 30px;
    /* gap: 5px; */
}

.iconUnselected {
    position: relative;
    color: #16db65;
    font-size: 17px;
    z-index: 200;
}

.text-options {
    position: relative;
    color: white;
    font-family: 'Inter';
    font-size: 17px;
    font-weight: 300;
    z-index: 100;
    text-decoration: none;
    margin-left: 10px;
    /* cursor: pointer; */
}

.efect-select {
    position: absolute;
    background-color: #16DB65;
    height: 100%;
    width: 85%;
    left: 0;
    border-radius: 0 30px 30px 0;
    animation: slideitemmenu 0.1s ease-in forwards;
    z-index: 100;
}

@keyframes slideitemmenu {
    0% {
        transform: translateX(-190px);
    }
}

.styles-selected {
    color: black;
    position: relative;
    font-family: 'Inter';
    /* font-size: 30px; */
    font-weight: 500;
    font-weight: 300;
    z-index: 200;
    text-decoration: none;
    margin-left: 10px;
}

.icon-selected {
    position: relative;
    color: white;
    font-size: 17px;
    z-index: 200;
}

</style>