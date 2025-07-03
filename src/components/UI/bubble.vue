<template>
    <div :style="{top:`${top1}px`, left:`${left1}px`}" class="ball-background ball1"></div>
    <div :style="{top:`${top2}px`, left:`${left2}px`}" class="ball-background ball2"></div>
    <div :style="{top:`${top3}px`, left:`${left3}px`}" class="ball-background ball3"></div>
    <div :style="{top:`${top4}px`, left:`${left4}px`}" class="ball-background ball4"></div>
</template>

<script setup>
defineProps({
    top1: Number,
    top2: Number,
    top3: Number,
    top4: Number,

    left1: Number,
    left2: Number,
    left3: Number,
    left4: Number
})
</script>

<style scoped>
.ball-background {
    position: absolute;
    border-radius: 50%;
    filter: blur(32px);
}

.ball1 {
    background-color: #16DB65;
    width: 200px;
    height: 200px;
    z-index: -100;
    animation: ball 3s infinite alternate ease-in-out;
}

.ball2 {
    background-color: #29fe65;
    width: 120px;
    height: 140px;
    z-index: -200;
    animation: ball 4s infinite alternate ease-in-out;
}

.ball3 {
    background: linear-gradient(153deg, rgba(132,224,132,1) 18%, rgba(60,168,60,1) 44%, rgba(32,117,32,1) 73%, rgba(7,69,7,1) 95%);
    top: 480px;
    left: 450px;
    width: 150px;
    height: 150px;
    z-index: -140;
    animation: ball 4s infinite alternate ease-in-out;
}

.ball4 {
    background: linear-gradient(43deg, rgba(109, 176, 109, 0.785) 22%, rgba(48, 102, 28, 0.368) 45%, rgba(7, 177, 95, 0.742) 47%, rgba(19, 194, 156, 0.199) 73%, rgba(7,69,7,1) 95%);
    top: 500px;
    left: 310px;
    width: 190px;
    height: 190px;
    z-index: -150;
    animation: ball 3s infinite alternate ease-in-out;
}

@keyframes ball {
    0% {
        transform: translate(0, 0) scale(1);
    }
    50% {
        transform: translate(20px, -30px) scale(1.2);
    }
    100% {
        transform: translate(-20px, 25px) scale(1);
    }
}
</style>