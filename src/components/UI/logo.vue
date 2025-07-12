<template>
    <div class="containerLogo">
        <a href="/">
            <div class="containerLogoText">
                <div class="imgLogo"></div>
                <a href="/" class="hiddenText">Hidden </a>
                <a href="/"  class="passText trasnition">Pass</a>
            </div>
        </a>
    </div>
</template>

<script setup></script>

<style scoped>

.containerLogo {
    position: relative;
    width: 45%;
    /* background: red; */
    height: 100%;
    margin-left: 5%;
    /* margin-top: 15px; */
}

.containerLogoText {
    display: flex;
    position: relative;
    justify-content: start;
    align-items: center;
    /* background-color: black; */
    height: 100%;
}

.imgLogo {
    background-image: url('@/assets/img/logo.svg');
    height: 52px;
    width: 52px;
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
}

.hiddenText {
    font-family: "Archivo Black", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 38px;
    color: #16DB65;
    margin-left: 10px;
    cursor: pointer;
    text-decoration: none;
}

.passText {
    font-family: "Roboto Condensed", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 38px;
    color: #16DB65;
    cursor: pointer;
    text-decoration: none;
}

</style>