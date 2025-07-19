<template>
    <div class="overlay">
        <div class="container-confirm">
        <h2 class="confirm-title">¿Está seguro/a que desea eliminar esta contraseña?</h2>
        <div class="confirm-buttons">
            <button class="btn-cancel" @click="cancel">Cancelar</button>
            <button class="btn-confirm" @click="confirmDelete">Confirmar</button>
        </div>
        </div>
    </div>
    <div v-if="check" class="container-check">
        <i class="fa-solid fa-circle-check"></i>
    </div>
</template>

<script setup>

import { computed, ref } from 'vue';
import { useExistingPasswordStore } from '../../store/existingPasswordStore';
import { useShowLayerPopsUp } from '../../store/layerPopsUpStore';
import { useNewPasswordStore } from '../newPassword/store/newPasswordStore';

const existingPasswordStore = useExistingPasswordStore();
const showLayerPopsUp = useShowLayerPopsUp();
const newPasswordStore = useNewPasswordStore();

const check = ref(false);
const confirm = computed(() => existingPasswordStore.confirmDelete);

const confirmDelete = async () => {
    
    await existingPasswordStore.deletePassowrd();
    if(confirm.value) {
        check.value = true;

        setTimeout(() => {
            existingPasswordStore.setCancel(false);
            showLayerPopsUp.setShowLayerPopsUp(false);
            newPasswordStore.setShowConfirmDeletePassword(false);
            check.value = false;existingPasswordStore.confirmDelete = false;
        }, 1300)
       
    }
}

const cancel = () => {
    showLayerPopsUp.setShowLayerPopsUp(false);
    newPasswordStore.setShowConfirmDeletePassword(false);
    newPasswordStore.setShow(false);
}


</script>

<style scoped>
/* Overlay para oscurecer el fondo */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: rgba(0,0,0,0.5);
  /* z-index:1000; */
}

/* Contenedor principal */
.container-confirm {
  font-family: 'Inter', sans-serif;
  background-color: #fff;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  max-width: 300px;
  box-shadow: 0px 4px 15px rgba(0,0,0,.2);
}

/* Texto de confirmación */
.confirm-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
}

/* Contenedor de botones */
.confirm-buttons {
  display: flex;
  justify-content: space-around;
  gap: 10px;
}

/* Botones básicos */
.confirm-buttons button {
  font-size: 14px;
  font-weight: 600;
  font-family: 'Inter';
  padding: 8px 14px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all .3s ease;
}

/* Cancelar */
.btn-cancel {
  background-color: #f2f2f2;
  color: #333;
}
.btn-cancel:hover {
  background-color: #e0e0e0;
}

/* Confirmar */
.btn-confirm {
  background-color: #16DB65;
  color: #fff;
}
.btn-confirm:hover {
  background-color: #14c058;
}

.container-check {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 80px;
    font-size: 60px;
    color: #16DB65;
    margin-top: 275px;
    animation: slideCkeck 1.2s ease;
}

@keyframes slideCkeck {
    0% {
        transform: translateY(150px) scale(0.3);
    } 
    40% {
        transform: translateY(-40px);
    }
    50% {
        transform: translateY(20px);
    }
    60% {
        transform: translateY(-20px);
    }
    100% {
        transform: scale(1);
    }
}


</style>