<template>
  <section class="main-container-subscriber">
    <article class="container-text-subscriber">
      <div class="text-subcriber">
        <i class="fa-solid fa-bell icon-animate"></i>
        <p>
          Sé el primero en probar HiddenPass, te notificaremos para que nos acompañes en el lanzamiento exclusivo.
        </p>
      </div>
    </article>
    <article class="container-button-subcriber">
      <div class="button-subcriber" @click="handleSubscribe">
        🚀 Quiero que me notifiquen
      </div>
    </article>
  </section>
</template>

<script setup>
function handleSubscribe() {
  alert("Gracias por suscribirte a HiddenPass 🚀");
}
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
} */

.main-container-subscriber {
  background: linear-gradient(135deg, #239350, #0ce66a);
  color: white;
  border: 1px solid rgba(22, 219, 101, 0.15);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  /* max-width: 900px; */
  height: 15vh;
  /* min-height: 120px; */
  padding: 15px 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  font-family: 'Inter', sans-serif;
  margin-bottom: 15px;
}

.container-text-subscriber {
  flex: 1;
  padding-right: 25px;
}

.text-subcriber {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
}

.icon-animate {
    color: #eaea09;
    font-size: 45px;
    animation: iconSubscriber 2s infinite ease-in-out;
}

@keyframes iconSubscriber {
    50% {
        transform: translateY(-10px) scale(1.1);
    }
}

.text-subcriber p {
    color: white;
    font-size: 1.3rem;
    line-height: 1.5;
    font-weight: 700;
}

.container-button-subcriber {
  flex-shrink: 0;
}

.button-subcriber {
  background: linear-gradient(135deg, #065726, #15a152);
  border: none;
  color: white;
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.button-subcriber:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(22, 219, 101, 0.5);
}

.button-subcriber:active {
  transform: translateY(0);
  box-shadow: 0 3px 8px rgba(22, 219, 101, 0.3);
}

/* Responsive para tablets */
@media (max-width: 768px) {
  .main-container-subscriber {
    flex-direction: column;
    height: auto;
    text-align: center;
    padding: 25px;
  }

  .container-text-subscriber {
    padding-right: 0;
    margin-bottom: 20px;
  }

  .text-subcriber p {
    font-size: 1rem;
    margin-bottom: 15px;
  }
}

/* Responsive para móviles */
@media (max-width: 480px) {
  .main-container-subscriber {
    padding: 20px 15px;
  }

  .text-subcriber p {
    font-size: 0.95rem;
  }

  .button-subcriber {
    padding: 12px 24px;
    font-size: 0.95rem;
  }
}
</style>
