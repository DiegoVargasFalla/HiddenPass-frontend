<template>
  <div class="popup-note flyer-style">
    <div class="popup-header">
      <div class="header-left">
        <i class="fa-solid fa-circle-exclamation alert-icon"></i>
        <span class="note-date">Tu plan ha vencido</span>
      </div>
      <!-- <div class="icons-read-and-close-pop">
        <i class="fa-solid fa-xmark icon-close" @click="cerrarPopup"></i>
      </div> -->
    </div>

    <div class="flyer-content">
      <h2 class="note-title">Acceso limitado</h2>
      <p class="note-content">
        Tu plan ha expirado. Para seguir utilizando todas las funcionalidades de la plataforma,
        por favor realiza el pago correspondiente. Accede a tu panel de pagos desde el botón abajo.
      </p>
    </div>

    <div class="popup-footer">
      <button class="btn-save" @click="redirigirAPagos">
        Ir a pagar
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useShowLayerPopsUp } from '../../store/layerPopsUpStore'

const router = useRouter()
const layerPopsUpStore = useShowLayerPopsUp()

const redirigirAPagos = () => {
  router.push({ name: 'pagos' })
}

const cerrarPopup = () => {

  layerPopsUpStore.setShowLayerPopsUp(false)
}
</script>

<style scoped>
.popup-note.flyer-style {
  background-color: #fff;
  border-left: 6px solid #ff1a1a;
  border-radius: 14px;
  padding: 1.5rem;
  width: 60%;
  height: auto;
  display: flex;
  flex-direction: column;
  font-family: 'Inter';
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  position: relative;
  gap: 1.2rem;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.alert-icon {
  color: #ff1a1a;
  font-size: 1.5rem;
}

.note-date {
  font-size: 1rem;
  font-weight: 700;
  color: #ff1a1a;
}

.icons-read-and-close-pop {
  display: flex;
  justify-content: flex-end;
  width: auto;
}

.icon-close {
  font-size: 1.5rem;
  cursor: pointer;
  color: #555;
  transition: transform 0.2s ease;
}
.icon-close:hover {
  transform: rotate(90deg);
  color: #ff1a1a;
}

.flyer-content {
  background-color: #fbeaea;
  padding: 1rem;
  border-radius: 12px;
}

.note-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.note-content {
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
}

.popup-footer {
  display: flex;
  justify-content: flex-end;
}

.btn-save {
  background-color: #16DB65;
  border: none;
  color: white;
  padding: 0.6rem 2rem;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn-save:hover {
  background-color: #13c058;
}

@media screen and (max-width: 800px) {
  .popup-note {
    width: 80%;
  }
}
@media screen and (max-width: 600px) {
  .popup-note {
    width: 95%;
  }
  .btn-save {
    width: 100%;
  }
}
</style>
