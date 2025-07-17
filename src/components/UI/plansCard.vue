<template>
    <div :class="['container-card', popularClass]">
        <div class="container-tittle-price">
            <div class="content-tittle">
                <h2 class="tittle-card">
                    {{ tittle }}
                </h2>
                <sub class="p-recomended" v-if="showRecomended">(recomendado)</sub>
            </div>
            
            <div class="content-price">
                <h3>
                    {{ price }}
                    <sub class="sub-month">/por mes</sub>
                </h3>
            </div>
            <hr class="separator-line">
        </div>
        <div class="container-list-features">
            <ul>
                <li v-for="(feature, index) in features" :key="index">
                    <i class="fa-solid fa-check"></i>
                    {{ feature }}
                </li>
            </ul>
        </div>
        <div class="container-button-get" id="contact-section">
            <buttons label="Obtener" link="/register" bgColor="black" textColor="white" boxShadowColor="#058C42"></buttons>
        </div>
    </div> 
</template>

<script setup>
import { computed } from 'vue';
import buttons from './buttons.vue';

const props = defineProps({
    tittle: String,
    price: String,
    features: Array,
    popular: Boolean
});

const popularClass = computed(() => (props.popular ? 'highlight' : ''));

const showRecomended = computed(() => (props.popular == true))
</script>

<style scoped>

.container-card {
    /* background-color: #16db6510; */
    /* background-color: orange; */
    position: relative;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    flex-direction: column;
    border-radius: 35px;
    height: auto;
    width: 50%;
    padding: 20px;
    border: 2px solid #16db658f;
    border-top: inset 7px #00ff66;
    box-shadow: 0 0 8px #16db655d;
}

@media screen and (max-width: 870px) {
    .container-card {
        width: 100%;
    }
}


.container-tittle-price {
    /* background-color: red; */
    position: relative;
    display: flex;
    align-items: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    row-gap: 15px;
}

.content-tittle {
    position: relative;
    align-items: center;
    font-family: "Archivo Black";
    font-weight: 500;
    font-size: 0.9rem;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.p-recomended {
    position: relative;
    margin-top: 5px;
    margin-left: 5px;
    font-family: 'Inter';
    color: #058C42;
    font-size: 15px;
    font-weight: 400;
}

.separator-line {
    position: relative;
    background-color: #058C42;
    height: 1px;
    width: 90%;
    border: none;
    margin: 10px 0;
}

.content-price {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Archivo Black", serif;
    font-size: 2rem;
}

.sub-month {
    font-family: 'Inter';
    color: #058C42;
    font-size: 0.95rem;
    font-weight: 300;
    margin-left: -12px;
}

.container-list-features {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: left;
    width: 100%;
    padding-left: 25px;
    /* background-color: gray; */
}

.container-list-features ul {
    list-style: none;
    /* margin-left: -15px; */
    padding: 0;
    row-gap: 15px;
    /* background-color: green; */
}

.container-list-features i {
    color: #058C42;
    font-size: 13px;
    background-color: #16db6532;
    border-radius: 50%;
    padding: 3px;
    margin-right: 7px;
}

.container-list-features li {
    /* color: #16DB65; */
    font-size: 14px;
    font-family: 'Inter';
    font-weight: 200;
    margin-top: 20px;
}

.container-button-get {
    position: relative;
    height: auto;
    display: flex;
    margin-top: 50px;
}

.highlight {
    border: 2px solid #16db65;
    box-shadow: 0 0 7px #16db65;
    transform: scale(1.2);
    border-top: inset 7px #00ff66;
}

</style>