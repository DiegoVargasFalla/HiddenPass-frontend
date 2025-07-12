<template>
    <div class="containerHeader" id="container-header">
        <div class="background-header"></div>
        <div class="background-efect">
            <div class="ballEfect1 animation"></div>
            <div class="ballEfect2 animation"></div>
            <div class="ballEfect3 animation"></div>
        </div>
        <logo></logo>
        <div class="containerWidgets">
            <div class="containerNavigator">
                <linksNav lable="Acerca de" :link="linkAbout" :colorText=ColorText></linksNav>
                <linksNav lable="Guia de uso" :link="linkGuide" :colorText=ColorText></linksNav>
                <linksNav lable="Planes" :link="linkPlans"  :colorText=ColorText></linksNav>
                <linksNav lable="Contacto" :link="linkContact" :colorText=ColorText></linksNav>
            </div>
            <div class="containerButtons transition">
                <div class="contentButtons">
                    <buttons 
                    label="Iniciar sesion" 
                    link="/login"
                    :textColor=ColorText
                    colorBorder="black" 
                    boxShadowColor="rgba(157, 154, 154, 0.27)"
                    ></buttons>
                </div>
                <div  class="contentButtons">
                    <buttons label="Registrarse" 
                    link="/register"
                    bgColor="black"
                    textColor="white"
                    boxShadowColor="rgba(157, 154, 154, 0.27)"
                    ></buttons>
                </div>
                <div class="container-icon-more-options">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import buttons from '../UI/buttons.vue';
import logo from '../UI/logo.vue';
import linksNav from '../UI/linksNav.vue';
import { useRoute } from 'vue-router';

const routeActually = useRoute()

const props = defineProps({
    linkAbout: String,
    linkGuide: String,
    linkPlans: String,
    linkContact: String,
    bgroud: String,
    ColorText: String
})

onMounted(() => {
    showHeader(routeActually.path)
})

watch(() => routeActually.path, (newPath) => {
    showHeader(newPath)
})

function showHeader(route) {
    const headerElement = document.getElementById('container-header')

    if (!headerElement) return;

    if (route === '/login' || route === '/register' ) {
        headerElement.classList.add('scrolled2');
    }
    else {
        headerElement.classList.remove('scrolled2');
    }
};

document.addEventListener("scroll", () => {
    const header = document.getElementById("container-header");

    if (window.scrollY > 1) {
        header.classList.add("scrolled");
    }
    else {
        header.classList.remove("scrolled");
    }

});


</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

/* circles efect background */

.background-efect {
    position: absolute;
    filter: blur(6px) brightness(0.9);
    width: 280px;
    height: 50px;
    left: 5%;
}

.ballEfect1 {
    animation-name: random-move1;
    animation-duration: 20s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
}

.ballEfect2 {
    animation-name: random-move2;
    animation-duration: 22s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
}

.ballEfect3 {
    animation-name: random-move3;
    animation-duration: 18s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-direction: alternate;
    animation-iteration-count: infinite;
}

@keyframes random-move1 {
    0% {
        transform: translate(0, 0);
    }
    15% {
        transform: translate(-150px, -10px);
    }
    35% {
        transform: translate(65px, 5px);
    }
    50% {
        transform: translate(-40px, -8px);
    }
    65% {
        transform: translate(30px, 6px);
    }
    80% {
        transform: translate(-20px, -5px);
    }
    100% {
        transform: translate(0, 0);
    }
}

@keyframes random-move2 {
    0% {
        transform: translate(0, 0);
    }
    20% {
        transform: translate(-30px, -6px);
    }
    40% {
        transform: translate(-50px, 8px);
    }
    55% {
        transform: translate(40px, -12px);
    }
    75% {
        transform: translate(-30px, 5px);
    }
    100% {
        transform: translate(0, 0);
    }
}

@keyframes random-move3 {
    0% {
        transform: translate(0, 0);
    }
    10% {
        transform: translate(-40px, 8px);
    }
    30% {
        transform: translate(120px, -12px);
    }
    50% {
        transform: translate(-20px, -10px);
    }
    70% {
        transform: translate(30px, 12px);
    }
    90% {
        transform: translate(-50px, -7px);
    }
    100% {
        transform: translate(0, 0);
    }
}

.ballEfect1, .ballEfect2, .ballEfect3 {
    position: absolute;
    border-radius: 50%;
    background-color: #0c933bc7 ;
    border: 4px solid rgb(183, 255, 0);
}

.ballEfect1 {
    width: 25px;
    height: 25px;
    margin-left: 200px;
    margin-top: 15px;
}

.ballEfect2 {
    width: 22px;
    height: 22px;
    margin-left: 120px;
    margin-top: 20px;
}

.ballEfect3 {
    width: 30px;
    height: 30px;
    margin-left: 100px;
    margin-top: 10px;
}

/* <a> of links */
.link-sec-start {
    background-color: green;
    position: relative;
    width: 100%;
    height: 100px;
}

/* all containers in header the side left */

.containerHeader {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 15px;
    height: 3.9rem;
    width: 90%;
    border-radius: 28px;
    transition: all 0.4s ease;
    animation-name: header-efect;
    animation-duration: 0.8s;
    animation-timing-function: ease-in-out;
    animation-delay: 0s;
    animation-direction: alternate;
    /* background-color: green; */
    z-index: 1000;

}

@keyframes header-efect {

    0% {
        transform: translateY(20px) scale(0.95);
        opacity: 0.85;
    }
    100% {
        transform: translateY(0) scale(1);
    }
}

/* styles for scrollbar */

.scrolled {
    backdrop-filter: blur(6px);
    box-shadow: 0 4px 10px 0 rgba(111, 111, 111, 0.36);
    background: rgba(200, 198, 198, 0.522);
}

.scrolled2 {
    backdrop-filter: blur(6px);
    box-shadow: 0 4px 10px 0 rgba(111, 111, 111, 0.36);
    background: rgba(194, 205, 199, 0.31);
}

.containerWidgets{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 20px;
    flex-grow: 1;
    /* background-color: gray; */
}

.containerNavigator {
    position: relative;
    display: flex;
    gap: 19px;
    /* width: 100%; */
    /* background-color: red; */
}



.containerButtons {
    position: relative;
    display: flex;
    margin-right: 5%;

}

.contentButtons {
    position: relative;
    margin-right: 20px;
}

.container-icon-more-options {
    position: relative;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
}

@media screen and (max-width: 1400px) {
    .containerNavigator {
        display: none;
    }
    .containerWidgets {
        justify-content: end;
    }
    .container-icon-more-options {
        display: flex;
    }
}

@media screen and (max-width: 900px) {
    .contentButtons {
        display: none;
    }
    .containerHeader {
        width: 95%;
        height: 4.1rem;
    }
}

</style>