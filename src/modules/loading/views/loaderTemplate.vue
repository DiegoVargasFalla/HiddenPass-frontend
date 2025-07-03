<template>
    <div class="container-loader">
        <div class="content-loader">
            <div class="container-logo">
                <i id="icon" class="fa-solid fa-lock"></i>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>

.container-loader {
    position: fixed;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    backdrop-filter: blur(10px);
    z-index: 10000;
}

.content-loader {
    background-color: black;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* padding: 10px; */
    height: 160px;
    width: 160px;
    border-radius: 50%;
    overflow: hidden;
}

.content-loader::before {
    content: "";
    position: absolute;
    top: 50%;
    height: 200px;
    width: 90px;
    transform-origin: top center;
    background: linear-gradient(to left, #00ff66 45%, #00ff66 35%, #00ff66 20%, transparent);
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(-360deg);
    }
}

.container-logo {
    /* background: linear-gradient(to top, rgb(173, 171, 171), rgb(128, 138, 128), rgb(91, 111, 91)); */
    background-color: whitesmoke;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    width: 150px;
    border-radius: 50%;
}

.fa-solid {
    position: relative;
    color: #00ff66;
    font-size: 70px;
    animation: spinIncon 1s linear infinite;
}

@keyframes spinIncon {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

</style>