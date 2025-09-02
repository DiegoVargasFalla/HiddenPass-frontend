<template>
  <div class="overlay">
    <div class="popup-container">
      <h2 class="popup-title">🎖️ Introduce tu correo y se el primero.</h2>
      <input 
        type="email" 
        v-model="subcriberStore.subscriberEmail" 
        placeholder="ejemplo@correo.com" 
        class="popup-input"
      />
      <div class="popup-actions">
        <button class="btn cancel" @click="handleCancel">Cancelar</button>
        <button class="btn confirm" @click="handleConfirm">Enviar</button>
      </div>
    </div>
    <div v-if="subcriberStore.showCheckIconSubcriber" class="container-check">
       <i class="fa-solid fa-circle-check"></i>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { useShowLayerPopsUp } from "../../store/layerPopsUpStore";
import { useSubscriberStore } from "@/stores/SubscriberStore"

const subcriberStore = useSubscriberStore();
const layerPopsUpStore = useShowLayerPopsUp();

const email = ref("")

function handleCancel() {
    layerPopsUpStore.setShowLayerPopsUp(false);
    subcriberStore.showPopUp = false;
    subcriberStore.setSubscriberEmail(' ');
}

const handleConfirm = computed(() => {
    let isMail = false;
    if(subcriberStore.getSubcriberEmail().length <= 0) {
        console.log(" ");
        return;
    }

    if(subcriberStore.getSubcriberEmail().includes('@')) {
        subcriberStore.subcribeUser();
    }
})
</script>

<style scoped>
/* Fondo semi-transparente */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

/* Caja principal */
.popup-container {
  background: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: fadeIn 0.3s ease;
}

/* Título */
.popup-title {
    font-family: 'Inter';
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #2d3436;
}

/* Input */
.popup-input {
  width: 100%;
  padding: 12px 14px;
  font-size: 1rem;
  border: 1.5px solid #ddd;
  border-radius: 8px;
  outline: none;
  margin-bottom: 1.5rem;
  transition: border 0.3s ease;
}
.popup-input:focus {
  border-color: #16db65;
}

/* Botones */
.popup-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.btn {
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn.cancel {
  background: #f1f2f6;
  color: #2d3436;
}
.btn.cancel:hover {
  background: #e0e0e0;
}

.btn.confirm {
  background: #16db65;
  color: white;
  box-shadow: 0 4px 12px rgba(22, 219, 101, 0.3);
}
.btn.confirm:hover {
  background: #14c95a;
  transform: translateY(-2px);
}
.btn.confirm:active {
  transform: translateY(0);
}

.container-check {
  position: absolute;
  /* display: none; */
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  font-size: 60px;
  color: #16DB65;
  margin-top: 400px;
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

/* Animación suave */
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}
</style>
