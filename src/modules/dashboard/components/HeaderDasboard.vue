<template>
    <div class="container-header">
        <div class="text-panel">
            <h1>Panel</h1>
        </div>
        <div class="container-search-profile">
            <div class="icon-notification">
                <i class="fa-solid fa-bell"></i>
            </div>
            <div class="container-profile">
                <div class="container-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="container-see-more">
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
            <div @click="slideSideBar" class="container-icon-side-bar">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { useNavStore } from '../store/navStore';
import { useShowLayerPopsUp } from '../store/layerPopsUpStore';

const layerPopsUpStore = useShowLayerPopsUp();

const navStore = useNavStore();

const slideSideBar = () => {
    if(navStore.showSideBar === false) {
        layerPopsUpStore.setShowLayerPopsUp(true);
        navStore.showSideBar = true;
    } else {
        navStore.showSideBar = false;
    }
}

</script>

<style scoped>

.container-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 62px;
    width: 97%;
    border-radius: 20px;
    box-shadow: 0 1px 4px #00000062;

    backdrop-filter: blur(8px);
    box-shadow: 0 4px 10px rgba(9, 4, 4, 0.3);
    /* background-color: red; */
    overflow: hidden;
    z-index: 1500;
    margin-top: 0.7rem;
}

.container-header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(165, 164, 164, 0.074) 0.5mm, transparent 1px);
    background-size: 5px 5px;
    opacity: 0.4;
    pointer-events: none;
    background-size: 2mm 2mm;
}

.text-panel {
    /* background-color: #16DB65; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    color: black;
    font-family: 'Archivo Black';
    font-size: 14px;
    height: 100%;
    width: 50%;
    padding-left: 50px;
}

.container-search-profile {
    /* background-color: orange; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100%;
    width: 50%;
    padding: 0 1.1rem;
    /* padding-left: 15px; */
    /* padding-right: 15px; */
    /* gap: 0.2rem; */
}

.container-profile {
    position: relative;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100px;
    gap: 5px;
}

.container-avatar {
    position: relative;
    background-color: #16DB65;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.4rem;
    width: 2.4rem;
    border-radius: 50%;
}

.container-icon-side-bar {
    position: relative;
    font-size: clamp(1.3rem, 2.5vw, 1.5rem);
    border-radius: 50%;
    height: 2.4rem;
    width: 2.4rem;
    align-items: center;
    justify-content: center;
    display: none;
}

.container-icon-side-bar:active {
    background-color: #16db6532;
}

.icon-notification {
    font-size: clamp(1.1rem, 2.5vw, 1.2rem);
}

@media screen and (max-width: 1000px) {
    .container-icon-side-bar {
        display: flex;
    }
}

/* @media screen and (max-width: 1000px) {
    .container-header {
        position: fixed;
        top: 1rem;
    }
} */

</style>