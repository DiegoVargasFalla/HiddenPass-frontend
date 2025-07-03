<template>
    <div class="container-option-personalice">
        <input class="check" type="checkbox" v-model="checkedRef" :id="props.id" @change="check">
        <label class="text-label" :for="props.id">{{ text }}</label>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useGeneratorPassStore } from '../../store/generatePassStore';

const generatePasswordStore = useGeneratorPassStore()

const props = defineProps({
    text: String,
    checked: Boolean,
    id: String
})

onMounted(() => {
    generatePasswordStore.setvalueCheckBox(props.id, props.checked)
})

const checkedRef = ref(props.checked)

const check = () => {
    generatePasswordStore.setvalueCheckBox(props.id, checkedRef)
}


</script>

<style scoped>

.container-option-personalice {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.text-label {
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 500;
}

input[type="checkbox"] {
    appearance: none;
    width: 17px;
    height: 17px;
    border: 2px solid #16DB65;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    position: relative;
    display: inline-block;
    margin-right: 5px;
}

/* Cuando está marcado */
input[type="checkbox"]:checked {
    background-color: #16DB65; /* Cambia el color cuando está marcado */
    border-color: #799182;
}

/* Agregar un check dentro */
input[type="checkbox"]:checked::after {
    content: "✔";
    font-size: 14px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>