<template>
  <aside class="sidebar">
    <div class="logo">
      <slot name="logo" />
    </div>

    <div class="menu-items">
      <div class="menu-item" @click="clickItem"><slot name="item-1" /></div>
      <div class="separator"></div>
      <div class="menu-item" @click="clickItem"><slot name="item-2" /></div>
      <div class="separator"></div>
      <div class="menu-item" @click="clickItem"><slot name="item-3" /></div>
      <div class="separator"></div>
      <div class="menu-item" @click="clickItem"><slot name="item-4" /></div>
    </div>

    <div class="actions">
      <slot name="button-1"/>
      <slot name="button-2" />
    </div>
  </aside>
</template>

<script setup>
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';
import { useShowLayerPopsUp } from '../../store/layerPopsUpStore';

const authenticationStore = useAuthenticationStore();
const layerPopsUpStore = useShowLayerPopsUp();



const clickItem = () => {
  if (authenticationStore.showSlideBar === true) {
    authenticationStore.setSlideBar(false);
    layerPopsUpStore.setShowLayerPopsUp(false);
  }
}

</script>

<style scoped>

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 18%;
  background-color: #ffffff;
  box-shadow: 7px 0 6px rgba(0, 0, 0, 0.248); /* sombra mínima derecha */
  animation: slideDown 0.1s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  z-index: 2000;
}

/* Zona del logo */
.logo {
  text-align: center;
  margin-bottom: 30px;
}

/* Contenedor central de ítems */
.menu-items {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex-grow: 1;
  justify-content: center;
}

.menu-item {
  padding: 8px 0;
  text-align: center;
}

.separator {
  height: 1px;
  background-color: #e5e5e5;
  /* margin: 0 10px; */
}

/* Botones al pie */
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    width: 200px;
    padding: 15px;
  }
}

@media screen and  (min-width: 700px) and (max-width: 1350px) {
    .sidebar {
        width: 25%;
    }

}
</style>
