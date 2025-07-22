<template>
    <div class="main-container">
        <div class="container-bubble">
            <bubble 
            :top1="25" :left1="5" 
            :top2="24" :left2="8"
            :top3="17" :left3="8"
            :top4="20" :left4="3"
            ></bubble>
        </div>
        <section class="main-section width-sections" id="sec-start">
            <div class="container-text-inf">
                <div class="content-text-info">
                    <p id="animation-sec-start" class="text-info-big">Con <span class="text-hidden">Hidden</span><span class="text-pass">Pass</span> manten<br>
                        tus contraseñas seguras <br>
                        sin preocuparte <br>
                        de olvidarlas.
                    </p>
                </div>
                <div class="container-text-and-button-start">
                    <div class="container-text-small" id="animation-sec-start" >
                    <p class="text-info-small">
                        ¿Te olvidas de tus contraseñas muy seguido?<br>
                        ¿Sientes que es una contraseña muy básica o<br> insegura?
                        HiddenPass las recuerda por ti de<br> una forma segura.
                    </p>
                    </div>
                    <div class="container-button-go" id="sec-about">
                        <buttons link="/register" label="Ir ahora" bgColor="black" textColor="white"></buttons>
                    </div>
                </div>
            </div>
            <div class="container-img-mac">
                <!-- <div class="cont
                 ent-img-computer"></div> -->
                 <img src="/src/assets/img//movileMac.png" alt="img computer">
            </div>
        </section>
        <div class="scroll-about" id="scroll-about"></div>
        <!-- <div class="divider"></div> -->
        <section class="section-about">
            <!-- <div class="tittle-sections">
                <h3>Acerca de</h3>
            </div> -->
            <div class="container-itmes-abotut">
                <div class="container-text-explain">
                    <h3 class="title-text-explain">
                        Seguridad y Simplicidad en la Gestión de Contraseñas
                    </h3>
                    <p class="second-text-about type-inter">
                        <span class="word-specials">HiddenPass</span> te ofrece
                        una solucion excelente para proteger tus contraseñas sin complicaciones.
                        Con una sola <span class="word-specials">clave maestra</span>, tendrás acceso seguro a todas tus credenciales desde cualquier lugar,
                        sin necesidad de recordarlas individualmente.
                    </p>
                </div>
                <div class="container-items-table">
                    <itemsAbout 
                        icon="fa-solid fa-lock"
                        textTittle="Seguridad avanzada" 
                        textP="Encriptamos tus contraseñas con tecnología de alto nivel y cifrados seguros."
                    ></itemsAbout>
                    <itemsAbout 
                        icon="fa-solid fa-cloud"
                        textTittle="Acceso en la nube" 
                        textP="Gestiona tus credenciales desde cualquier lugar o dispositivo."
                    ></itemsAbout>
                    <itemsAbout 
                        icon="fa-solid fa-crown"
                        textTittle="Clave maestra" 
                        textP="Solo necesitas recordar una clave para acceder a tus contraseñas."
                    ></itemsAbout>
                    <itemsAbout 
                        icon="fa-solid fa-user-shield"
                        textTittle="Protección garantizada" 
                        textP="Autenticación y medidas de seguridad avanzadas."
                    ></itemsAbout>
                    <itemsAbout 
                        icon="fa-solid fa-file-pen"
                        textTittle="Detalles Personalizados" 
                        textP="Asigna el sitio web, nombre de usuario, email y notas adicionales a cada contraseña para un acceso más organizado y seguro."
                    ></itemsAbout>
                    <itemsAbout 
                        icon="fa-solid fa-key icons"
                        textTittle="Generador de contraseñas" 
                        textP="Genera contraseñas fuertes con un solo click, garantizando que no uses combinaciones débiles ni repetidas."
                    ></itemsAbout>
                    <itemsAbout
                        icon="fa-solid fa-eye-slash"
                        textTittle="Conocimiento cero." 
                        textP="Tus contraseñas están protegidas bajo una arquitectura de conocimiento cero, lo que significa que ni siquiera nosotros podemos acceder a tus datos. La privacidad es completamente tuya."
                    ></itemsAbout>
                    <itemsAbout 
                        icon="fa-solid fa-note-sticky"
                        textTittle="Notas privadas" 
                        textP="Guardá tus ideas o datos privados con cifrado seguro. Solo tu tienes acceso."
                    ></itemsAbout>
                </div>
            </div>
        </section>
        <!-- <div class="divider"></div> -->
        <section class="section-use-guide"  id="sec-use-guide">
            <div class="use-guide-container">
                <!-- <h3 class="guide-title">Guía de uso</h3> -->

                <!-- Bloque: Añadir Contraseñas -->
                <div class="guide-block">
                    <div class="guide-text">
                        <h4 class="guide-subtitle">Guarda y organiza tus contraseñas</h4>
                        <p class="guide-description">
                        Accede a la sección de contraseñas para almacenar de forma segura tus credenciales más importantes. 
                        Cada contraseña se cifra automáticamente, brindándote una protección avanzada. 
                        Puedes organizarlas por nombre, usuario, contraseña y una nota descriptiva para encontrarlas fácilmente
                        cuando las necesites, ademas cuentas con filtros para una mejor accesibilidad, en orden alfabetico, recientes y mas antiguas
                        ademas puedes actualizar y eliminar tus contraseñas en cualquier momento.
                        </p>
                    </div>
                    <div class="guide-image">
                        <img class="image-use-gide" src="/src/assets/img/passwordsManagement.png" alt="Agregar contraseñas" />
                    </div>
                </div>

                    <!-- Bloque: Generador de contraseñas -->
                <div class="guide-block reverse">
                    <div class="guide-text">
                        <h4 class="guide-subtitle">Genera contraseñas seguras</h4>
                        <p class="guide-description">
                        El generador integrado te permite crear contraseñas aleatorias, seguras y personalizadas. 
                        Define la longitud, incluye símbolos, números o letras, y genera claves difíciles de descifrar, ideales para proteger tus cuentas frente a ataques comunes.
                        </p>
                    </div>
                    <div class="guide-image">
                        <img src="/src/assets/img/generatorPass.png" alt="Generador de contraseñas" />
                    </div>
                </div>

                <!-- Bloque: Notas seguras -->
                <div class="guide-block">
                    <div class="guide-text">
                        <h4 class="guide-subtitle">Guarda notas privadas</h4>
                        <p class="guide-description">
                        Además de contraseñas, puedes guardar notas sensibles o personales totalmente cifradas. 
                        Desde recordatorios hasta claves de acceso secundarias, permitiendote visualizar o 
                        modificar tus notas de una forma mas comoda, todo permanece protegido y accesible
                         solo para ti, desde cualquier dispositivo.
                        </p>
                    </div>
                    <div class="guide-image">
                        <img src="/src/assets/img/notesManagement.png" alt="Notas seguras" />
                    </div>
                </div>
            </div>
        </section>
        <!-- <div class="divider"></div> -->
        <section class="plans-sections" id="sec-plans">
            <div class="tittle-sections">Planes</div>
            <div class="container-plans">
                <plansCard 
                    tittle="Basico"
                    :features="[
                        '10 contraseñas',
                         'Soporte basico',
                        'otro',
                        'otro',
                        ]"
                    price="4,99"
                    :popular="false">
                </plansCard>
                <plansCard 
                    tittle="Estandar"
                    :features="[
                        '50 contraseñas', 
                        'Soporte basico',
                        'otro',
                        'otro',
                        ]"
                    price="9,99"
                    :popular="true">
                </plansCard>
                <plansCard 
                    tittle="Premium"
                    :features="[
                        'Contraseñas ilimitadas', 
                        'Soporte basico',
                        'otro',
                        'otro',
                        ]"
                    price="19,99"
                    :popular="false">
                </plansCard>
            </div>
        </section>
        <!-- <div class="divider"></div> -->
        <section class="faq-section">
            <!-- <div class="container-img"></div> -->
            <img class="container-img" src="/src/assets/img/padlocks.webp" alt="">
            <div class="container-contact container-faq">
                <h3 class="faq-title">Preguntas Frecuentes</h3>
                <div class="faq-container">
                    <div class="faq-item">
                        <h4>¿Cómo protege HiddenPass mis contraseñas?</h4>
                        <p>
                        Utilizamos cifrado avanzado y principios de conocimiento cero, lo que garantiza que solo tú puedas acceder a tus contraseñas. Ni siquiera nosotros tenemos acceso a tu información.
                        </p>
                    </div>

                    <div class="faq-item">
                        <h4>¿Puedo generar contraseñas seguras automáticamente?</h4>
                        <p>
                        Sí. HiddenPass incluye un generador de contraseñas seguras con opciones para personalizar longitud, uso de símbolos, números y más.
                        </p>
                    </div>

                    <div class="faq-item">
                        <h4>¿Mis notas también están protegidas?</h4>
                        <p>
                        Todas tus notas se almacenan cifradas con el mismo nivel de seguridad que tus contraseñas, asegurando privacidad total.
                        </p>
                    </div>

                    <div class="faq-item">
                        <h4>¿Puedo acceder desde diferentes dispositivos?</h4>
                        <p>
                        Sí. Puedes acceder a HiddenPass desde cualquier navegador moderno, ya sea en escritorio o en dispositivos móviles, con una experiencia completamente adaptada.
                        </p>
                    </div>

                    <div class="faq-item">
                        <h4>¿Qué pasa si olvido mi contraseña maestra?</h4>
                        <p>
                        Por seguridad, no almacenamos tu contraseña maestra. Si la pierdes, no podremos recuperarla. Te recomendamos usar nuestro generador y guardar una copia en un lugar seguro, si quieres cambiar la contraseña lo puedes hacer una vez inicies sesion.
                        </p>
                    </div>

                    <!-- <div class="faq-item">
                        <h4>¿Qué pasa si olvido mi contraseña maestra?</h4>
                        <p>
                            Por seguridad, no almacenamos tu contraseña maestra. Si la pierdes, no podremos recuperarla. Te recomendamos usar nuestro generador y guardar una copia en un lugar seguro.
                        </p>
                    </div> -->
                </div>
            </div>
        </section>
        <!-- <div class="divider"></div> -->
        <section class="sec-end" id="sec-end">
            <div class="container-sec-end">
                <div class="tittle-sec-end">
                    <p>No pongas en riesgo tus cuentas y unete ahora.</p>
                </div>
                <div class="container-p-end">
                    <p>Anotar contraseñas en un bloc de notas o dejarlas en texto plano no es seguro. HiddenPass las encripta por ti para que solo tú puedas acceder a ellas. ¡No esperes más!</p>
                </div>
                <div class="container-button-sec-end">
                    <buttons
                        label="Unirme a HiddenPass" 
                        link="#sec-plans" 
                        bgColor="#16DB65" 
                        textColor="black" 
                        boxShadowColor="#16DB65" 
                        :height="3.7" 
                        :width="100"
                        :fontSize="1.1"
                        :fontWeight="900"
                        colorBorder="#058C42"
                        :bordeRadius="40"
                    ></buttons>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import buttons from '@/components/UI/buttons.vue';
import bubble from '@/components/UI/bubble.vue';
import plansCard from '@/components/UI/plansCard.vue';
import itemsAbout from '@/components/UI/itemsAbout.vue';
import { onMounted } from 'vue';

onMounted(() => {
    const secStart = document.getElementById('sec-start');
    secStart.classList.add('animation-sec-start')
})

</script>

<style scoped>

.ball-background {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
}

.ball1 {
    background-color: #16DB65;
    top: 500px;
    left: 480px;
    width: 200px;
    height: 200px;
    z-index: -100;
    animation: ball 3s infinite alternate ease-in-out;
}

.ball2 {
    background-color: #004919b8;
    top: 550px;
    left: 400px;
    width: 120px;
    height: 140px;
    z-index: -200;
    animation: ball 4s infinite alternate ease-in-out;
}

.ball3 {
    background-color: #2c2b2b31;
    top: 480px;
    left: 450px;
    width: 150px;
    height: 150px;
    z-index: -50;
    animation: ball 4s infinite alternate ease-in-out;
}

.ball4 {
    background-color: #129d0296;
    top: 500px;
    left: 310px;
    width: 190px;
    height: 190px;
    z-index: -150;
    animation: ball 3s infinite alternate ease-in-out;
}

@keyframes ball {
    0% {
        transform: translate(0, 0) scale(1);
    }
    50% {
        transform: translate(20px, -30px) scale(1.2);
    }
    100% {
        transform: translate(-20px, 25px) scale(1);
    }
}

.main-container {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: whitesmoke;
    /* background-color: red; */
    backdrop-filter: blur(1.5rem);
}

.container-bubble {
    position: absolute;
    inset: 0;
    /* z-index: -10; */
    pointer-events: none;
}

.main-section {
    /* background-color: red; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 7rem 0;
    width: 85%;
    margin-left: 4rem;
    gap: 4rem;
}

.divider {
  width: 85%;
  height: 1px;
  background-color: #a29f9f;
  margin: 60px auto;
  opacity: 0.6;
}

.container-text-inf {
    /* background-color: green; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    gap: 1rem;
}

.container-text-and-button-start {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.content-text-info {
    max-width: 100%;
}

.text-info-big {
    font-family: "Archivo Black", serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    line-height: 1.1;
    text-align: left;
}

.text-info-small {
    font-family: "Inter";
    font-size: clamp(1.3rem, 2.3vw, 1.5rem);
    line-height: 1.3;
    font-weight: 500;
    text-align: left;
}

.container-button-go {
    display: flex;
    align-items: start;
}

.container-img-mac {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
}

.container-img-mac img {
    width: 100%;
    /* max-width: 600px; */
    height: auto;
    object-fit: contain;
    mix-blend-mode: multiply;
}

/* RESPONSIVE */
@media screen and (max-width: 1030px) {
    .text-info-big {
        text-align: center;
    }
    .text-info-small {
        text-align: center;
    }
    .container-button-go {
        justify-content: center;
    }
}

@media screen and (max-width: 900px) {
    .main-section {
        flex-direction: column;
        width: 100%;
        margin-left: 0;
        padding: 7rem 1rem;
        gap: 3rem;
    }

    .container-text-inf {
        width: 100%;
        align-items: center;
        text-align: center;
    }

    .container-img-mac {
        width: 100%;
    }

    .container-img-mac img {
        max-width: 90%;
    }

    .container-button-go {
        justify-content: center;
    }
}

.text-hidden {
    color: #16DB65;
    font-family: "Archivo Black", serif;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
}

.text-pass {
    font-family: "Roboto Condensed", serif;
    font-weight: 500;
    font-size: clamp(2.3rem, 4.8vw, 3rem);
    color: #16DB65;
}

/* Animación suave opcional */
.animation-sec-start {
    animation: anim-bottom-to-top 0.8s alternate ease-in-out;
}

@keyframes anim-bottom-to-top {
    0% {
        transform: translateY(20px) scale(0.95);
        opacity: 0.85;
    }
    100% {
        transform: translateY(0) scale(1);
    }
}
.scroll-about {
    position: relative;
}

.section-about {
    /* background-color: green; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* height: auto; */
    width: 90%;
    border-radius: 45px;
    gap: 45px;
    /* padding: 30px; */
}

@media screen and (max-width: 1400px) {
    .section-about {
        width: 100%;
    }
}

.container-itmes-abotut {
    /* background-color: orange; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 45px;
    gap: 25px;
}

.container-text-explain {
    /* background: linear-gradient(153deg, rgba(200,255,200,1) 10%, rgba(150,220,150,1) 60%, rgba(120,180,120,1) 90%); */
    position: relative;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.5rem;
    border-radius: 1.5rem;
    transition: all 0.3s ease;
    width: 90%;
}

.icon-check {
    position: relative;
    color: rgb(5, 103, 5);
}

.title-text-explain {
    font-family: "Archivo Black", serif;
    font-weight: 1000;
    font-size: clamp(1.7rem, 2.5vw, 2rem);;
    text-align: center;
}

.type-inter {
    font-family: "inter";
    font-size: 1rem;
}

.hiddenpass-green-text-explain {
    color: #16DB65;
    text-shadow: 1px  1px 1px rgb(3, 3, 3);
    text-align: center;
}

/*
use guide section 
*/

/* .section-use-guide {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #16DB65;
    height: 87.5vh;
    width: 85%;
} */

.container-use-guide {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

/*
plans section 
*/

.plans-sections {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* background-color: gray; */
    /* height: 100vh; */
    width: 100%;
    row-gap: 70px;
    padding: 3rem 0;
}

@media screen and (max-width: 870px) {
    .plans-sections {
        gap: 2rem;
    }
}

.container-plans {
    /* background-color: green; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    column-gap: 2.5rem;
    gap: 3.7rem;
}

@media screen and (max-width: 870px) {
    .container-plans {
        flex-direction: column;
        width: 40%;
    }
}

@media screen and  (min-width: 870px) and (max-width: 1250px) {
    .container-plans {
        width: 95%;
    }
}

@media screen and (max-width: 600px) {
    .container-plans {
        width: 70%;
    }
}

@media screen and (max-width: 350px) {
    .container-plans {
        width: 80%;
    }
}

/* @media screen and (max-width: 700px) {
    .container-plans {
        width: 70%;
    }
} */

/* title section about */

.tittle-sections {
    position: relative;
    /* top: -10px; */
    /* background-color: orange; */
    font-family: "Archivo Black", serif;
    font-weight: 800;
    font-size: clamp(2rem, 2.5vw, 2rem);
    width: 100%;
    text-align: center;
}

.second-text-about {
    position: relative;
    font-size: 1.3rem;
    font-weight: 500;
    width: 60%;
    text-align: center;
}

.word-specials {
    font-weight: 800;
}

.type-archivo-black {
    font-family: "Archivo Black", serif;
}

.container-items-table {
    /* background-color: green; */
    text-align: center;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    row-gap: 80px;
    column-gap: 45px;
    /* width: 50%; */
    /* height: 100%; */
    padding: 50px;
}

@media screen and (max-width: 600px) {
    .container-items-table {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 1rem;
        row-gap: 2rem;
        padding: 1rem;
    }
    .container-text-explain {
        width: 100%;
    }
    .title-text-explain {
        width: 100%;
    }
    .second-text-about {
        width: 100%;
        text-align: left;
    }
}

@media screen and (max-width: 1200px) {
    .second-text-about {
        width: 85%;
    }
}


@media screen and (max-width: 340px) {
    .container-items-table {
        grid-template-columns: repeat(1, 1fr);
    }
}

.feature-item {
    position: relative;
}

.title-items-funtions {
    font-size: 20px;
    /* font-weight: 600; */
}

.icons {
    color: #16DB65;
    font-size: 30px;
}

/* 
contatc section
 */

.faq-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  padding: 4rem 1rem;
  width: 100%;
  font-family: 'Inter', sans-serif;
  padding: 4rem 0;
  /* background-color: red; */
}

.container-img {
  position: absolute;
  /* background-image: url('/src/assets/img/padlocks.webp'); */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(5px) brightness(0.8);
  height: 100%;
  width: 100%;
  z-index: 0;
}

.container-faq {
  position: relative;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.814);
  padding: 2rem;
  border-radius: 1rem;
  max-width: 900px;
  width: 85%;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.15);
}

.faq-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #000;
  text-align: center;
  font-weight: 600;
}

.faq-container {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.faq-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #039b40;
}

.faq-item p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

/* Responsive */
@media (max-width: 768px) {
  .container-contact {
    width: 95%;
    padding: 1.5rem;
  }

  .faq-title {
    font-size: 1.5rem;
  }

  .faq-item h4 {
    font-size: 1rem;
  }

  .faq-item p {
    font-size: 0.95rem;
  }
}

.sec-end {
    /* background-color: gray; */
    position: relative;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    /* height: 60vh; */
    width: 100%;
    padding: 6rem 0;
}

.container-sec-end {
    position: relative;
    /* background-color: aliceblue; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 90%;
    row-gap: 20px;
}

.tittle-sec-end {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #16DB65; */
    width: 100%;
    font-family: 'Inter';
    font-size: 3rem;
    font-weight: 1000;
    text-align: center;
}

.container-p-end {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 70%;
    font-family: 'Inter';
    font-size: 1.4rem;
    font-weight: 500;
}

.container-button-sec-end {
    /* background-color: red; */
    position: relative;
    width: 35rem;
}

.section-use-guide {
  width: 100%;
  padding: 4rem 0;
}

.use-guide-container {
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.guide-title {
  font-size: 2rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 2rem;
  border-left: 5px solid #16db65;
  /* padding-left: 1rem; */
}

.guide-block {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    row-gap: 2rem;
}

.guide-block.reverse {
  flex-direction: row-reverse;
}

.guide-text {
    flex: 1;
    /* background-color: red; */
    width: 60%;
    font-family: "inter";
    font-size: clamp(0.9rem, 2.2vw, 1rem);
    text-align: center;
}

.guide-subtitle {
    font-size: 1.5rem;
    /* font-weight: 600; */
    color: #000;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    font-family: "Archivo Black", serif;
}

.guide-description {
    font-size: 1rem;
    color: #333;
    line-height: 1.6;
}

.guide-image {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: 100%;
}

.guide-image img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}


@media screen and (max-width: 900px) {
    .container-p-end {
        width: 80%;
    }
    .container-button-sec-end {
        width: 85%;
    }
}

@media screen and (max-width: 400px) {
    .container-p-end {
        width: 100%;
        font-size: 1.2rem;
    }
}

@media screen and (max-width: 800px) {
    .guide-block {
        flex-direction: column;
    }
    .guide-text {
        /* background-color: red; */
        width: 100%;
    }
    .guide-block.reverse {
        flex-direction: column;
    }
    .guide-image {
        width: 90%;
    }

}




</style>