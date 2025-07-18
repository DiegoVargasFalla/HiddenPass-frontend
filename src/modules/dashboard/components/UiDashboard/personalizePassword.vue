<template>
    <div class="container-personalize">
        <div class="container-tittle-personalize-password">
            <h3 class="text-tittle-personalize-password">Personalice su contraseña</h3>
        </div>
        <div class="container-options-personalize">
            <div class="length-bar">
                <h4 class="text-longitud">Longitud: </h4>
                <input type="range" min="0" max="100" v-model="sliderRef" @change="changeSlider" class="range-slider">
                <div class="container-length-num">
                    <input type="number" min="0" max="100" v-model="sliderRef" class="range-number" readonly>
                </div>
            </div>
            <nav class="nav-options">
                <itemOptionsPersonalize 
                v-for="(item, index) in listChecks"
                :key="index"
                :text="item.text"
                :checked="item.checked"
                :id="item.id"
                ></itemOptionsPersonalize>
            </nav>
        </div>
    </div>
</template>

<script setup>
import itemOptionsPersonalize from './itemOptionsPersonalize.vue';
import { useGeneratorPassStore } from '../../store/generatePassStore';
import { ref } from 'vue';


const generatorPassStore = useGeneratorPassStore();

const listChecks = [
    {text: "Mayúsculas", checked: true, id: "capital"},
    {text: "Minúsculas", checked: false, id: "lowercase"},
    {text: "Números", checked: true, id: "number"},
    {text: "Símbolos", checked: false, id: "symbol"}
]

const sliderRef = ref(22);
const numRef = ref(generatorPassStore.length);

const changeSlider = () => {
    generatorPassStore.setvalueCheckBox('length', sliderRef.slider);
}

const changeNum = () => {
    sliderRef.value = generatorPassStore.length;
}

</script>

<style scoped>

.container-personalize {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 8px;
}

.container-tittle-personalize-password {
    position: relative;
    /* background-color: green; */
    display: flex;
    align-items: center;
    height: 1.2rem;
    width: 100%;
    /* margin-top: -5px; */
}

.text-tittle-personalize-password {
    font-family: 'Inter';
    font-size: 1.15rem;
    font-weight: 600;
}

.container-options-personalize {
    position: relative;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 0.4rem;
}

.length-bar {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    /* justify-content: center; */
    width: 100%;
    gap: 0.7rem;
}

.text-longitud {
    font-family: 'Inter';
    font-size: 1rem;
    font-weight: 500;
}

.container-length-num {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(190, 189, 189);
    border-radius: 7px;
    width: 2.5rem;
    height: 1.9rem;
    box-shadow: inset -1px 1px 2px rgba(128, 128, 128, 0.64);
}

.range-slider {
    width: 60%;
    appearance: none;
    height: 0.7rem;
    background: #cdc9c9;
    border-radius: 5px;
    outline: none;
    /* accent-color: red; */
}

.range-number {
    /* background-color: red; */
    position: relative;
    border: none;
    appearance: none;
    outline: none;
    background: none;
    width: 100%;
    font-size: 1.05rem;
}

.range-slider::-webkit-slider-thumb {
    appearance: none;
    width:1.2rem;
    height: 1.2rem;
    background: #16DB65;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.range-slider::-webkit-slider-thumb:hover {
    box-shadow: 1px 1px 15px #04ff00aa,
                -1px -1px 15px #04ff00aa,
                1px 1px 20px #00ff9de2
}

.range-slider::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    /* background: #16DB65; */
    /* border-radius: 50%; */
    cursor: pointer;
    /* background-color: red; */
}

.nav-options {
    /* background-color: #16DB65; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    height: 100%;
    width: 100%;
    /* flex-direction: column; */
    flex-wrap: wrap;
    row-gap: 0.3rem;
    column-gap: 0.5rem;
}

</style>