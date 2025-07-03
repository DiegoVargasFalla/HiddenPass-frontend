<template>
    <div class="container-header">
        <div class="text-panel">
            <h1>Panel</h1>
        </div>
        <div class="container-search-profile">
            <div class="container-profile">
                <div class="container-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="container-see-more">
                    <i class="fa-solid fa-angle-down"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>

.container-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 62px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 0 1px 4px #00000062;

    backdrop-filter: blur(8px);
    box-shadow: 0 4px 10px rgba(9, 4, 4, 0.3);
    overflow: hidden;
    /* margin-left: -15px; */
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
    /* background-color: red; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: end;
    height: 100%;
    width: 50%;
    padding-left: 15px;
    padding-right: 15px;
    gap: 10PX;
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
    height: 40px;
    width: 40px;
    border-radius: 50%;
}

</style>