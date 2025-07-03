<template>
    <div class="container-logo">
        <a href="/dashboard" class="link">
            <div class="imgLogoDashboard">
                <img src="@/assets/logo.svg" alt="" class="img-logo">
            </div>
        </a>
        <div class="container-logo">
            <div class="containerLogoText">
                <div class="container-text">
                    <a href="/dashboard" class="hiddenText text">Hidden </a>
                    <a href="/dashboard"  class="passText trasnition text">Pass</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>

.container-logo {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
}

.container-text {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

}

.text {
    color: #16DB65;
    text-decoration: none;
    font-size: 25px;
}

.imgLogoDashboard {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hiddenText {
    font-family: 'Archivo Black';
}

.passText {
    font-family: 'Inter';
    font-weight: 700;
    
}

.img-logo {
    box-shadow: 
        0 4px 6px rgba(117, 115, 115, 0.626), /* Sombra suave hacia abajo */
        0 2px 12px rgba(0, 0, 0, 0.663), /* Sombra más difusa y grande para darle el efecto de elevación */
        0 2px 12px rgba(198, 195, 195, 0.514);
    border-radius: 30px;
}

</style>