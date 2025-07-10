<template>
    <div class="main-container">
        <bubble 
            :top1="500" :left1="480" 
            :top2="550" :left2="400"
            :top3="480" :left3="450"
            :top4="500" :left4="310"
        ></bubble>
        <section class="main-section width-sections" id="sec-start">
            <div class="container-text-inf">
                <div class="content-text-info">
                    <p id="animation-sec-start" class="text-info-big">Con <span class="text-hidden">Hidden</span><span class="text-pass">Pass</span> manten<br>
                        tus contraseñas seguras <br>
                        sin preocuparte <br>
                        de olvidarlas.
                    </p>
                </div>
                <div class="container-text-small" id="animation-sec-start" >
                    <p class="text-info-small">
                        ¿Te olvidas de tus contraseñas muy seguido?<br>
                        ¿Sientes que es una contraseña muy básica o<br> insegura?
                        HiddenPass las recuerda por ti de<br> una forma segura.
                    </p>
                </div>
                <div class="container-button-go">
                    <buttons link="/register" label="Ir ahora" bgColor="black" textColor="white"></buttons>
                </div>
            </div>
            <div class="container-img-mac">
                <!-- <div class="content-img-computer"></div> -->
                 <img src="/src/assets/img/Macbook.svg" alt="img computer">
            </div>
        </section>
        <div class="scroll-about" id="scroll-about"></div>
        <section class="section-about" id="sec-about">
            <div class="tittle-sections">
                <h3>Acerca de</h3>
            </div>
            <div class="container-itmes-abotut">
                <div class="container-explain">
                    <div class="container-text-explain">
                        <h3 class="title-text-explain">
                            Seguridad y Simplicidad en la Gestión de Contraseñas
                        </h3>
                        <p class="second-text-about type-inter">
                            <span class="word-specials">HiddenPass</span> te ofrece
                            una solucion excelente para proteger tus contraseñas sin complicaciones.
                            Con una sola <span class="word-specials">clave maestra</span>, tendrás acceso seguro a todas tus credenciales,
                            sin necesidad de recordarlas individualmente.
                        </p>
                    </div>
                </div>
                <div class="container-items-table">
                    <itemsAbout 
                        icon="fa-solid fa-lock"
                        textTittle="Seguridad avanzada" 
                        textP="Encriptamos tus contraseñas con tecnología de alto nivel."
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
                        textP="Genera contraseñas fuertes con un solo clic, garantizando que no uses combinaciones débiles ni repetidas."
                    ></itemsAbout>
                </div>
            </div>
        </section>
        <section class="section-use-guide" id="sec-use-guide">
            <div class="tittle-sections">
                <h3>Guia de uso</h3>
            </div>
            <div class="container-use-guide">
            </div>
        </section>
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
        <section class="contact-section" id="contact-section">
            <div class="container-img"></div>
            <div class="container-contact">
                <div class="container-title-contact">
                    <h2 class="tittle-sections">Contacto</h2>
                </div>
                <div class="content-contact">
                    <div class="name-input inputs-content">
                        <input class="inputs" type="text" placeholder="Nombre">
                    </div>
                    <div class="name-email inputs-content">
                        <input class="inputs" type="text" placeholder="Email">
                    </div>
                    <div class="name-message inputs-content">
                        <textarea class="inputs input-menssage" name="Mensage" placeholder="Mensaje" id=""></textarea>
                    </div>
                    <buttons label="Enviar" link="#" bgColor="black" textColor="white" boxShadowColor="#058C42"></buttons>
                </div>
            </div>
        </section>
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
                        :height="60" 
                        :width="400"
                        :fontSize="18"
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
    z-index: -100;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: whitesmoke;
    backdrop-filter: blur(1.5rem);
}

.main-section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 85%;
    z-index: -100;
    /* background-color: red; */
    margin-left: 80px;
}

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

.container-text-inf {
    /* background-color: orange; */
    position: relative;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    /* padding-left: 55px; */
    width: 50%;
    gap: 30px;
    /* height: 100%; */
}

.container-img-mac {
    /* background-color: blueviolet; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    /* padding: 20px 0; */
    height: 100%;
}

.container-img-mac img {
    position: relative;
    height: 100%;
    width: 100%;
}

.content-text-info {
    position: relative;
    /* background-color: red; */
    margin-top: 20px;
}

.text-info-big {
    position: relative;
    font-family: "Archivo Black", serif;
    font-size: 42px;
    letter-spacing: 0px;
    word-spacing: 1px;
    line-height: 1.1;
}

.text-hidden {
    color: #16DB65;
    font-family: "Archivo Black", serif;
    font-size: 50px;
}

.text-pass {
    font-family: "Roboto Condensed", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: 46px;
    color: #16DB65;
}

.text-info-small {
    font-family: "Inter"; 
    font-size: 24px;
    line-height: 1.2;
}

.container-button-go {
    position: relative;
    /* margin-top: -80px; */
}

/*
    section about
    container general of section about 
*/

.scroll-about {
    position: relative;
}

.section-about {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: auto;
    width: 85%;
    border-radius: 45px;
    gap: 45px;
    padding: 30px;
}

.container-itmes-abotut {
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
    /* padding: 30px; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    border-radius: 45px;
    transition: all 0.3s ease;
    width: 100%;
}

.container-text-explain ul {
    list-style: none;
    padding-left: 25px;
    margin-top: 15px;
}

.container-text-explain li {
    position: relative;
    display: flex;
    margin-top: 10px;
    gap: 10px;
}

.icon-check {
    position: relative;
    color: rgb(5, 103, 5);
}

.title-text-explain {
    font-family: "Archivo Black", serif;
    font-weight: 1000;
    font-size: 32px;
}

.type-inter {
    font-family: "inter";
    font-size: 17px;
}

.hiddenpass-green-text-explain {
    color: #16DB65;
    text-shadow: 1px  1px 1px rgb(3, 3, 3);
    text-align: center;
}

/*
use guide section 
*/

.section-use-guide {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #16DB65;
    height: 87.5vh;
    width: 85%;
}

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
    height: 100vh;
    width: 85%;
    row-gap: 70px;
}

.container-plans {
    /* background-color: green; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    column-gap: 30px;
}

/* title section about */

.tittle-sections {
    position: relative;
    /* top: -10px; */
    /* background-color: orange; */
    font-family: "Archivo Black", serif;
    font-weight: 800;
    font-size: 35px;
    width: 100%;
    text-align: center;
}

.second-text-about {
    position: relative;
    font-size: 20px;
    /* font-weight: 500; */
    width: 80%;
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

.contact-section {
    position: relative;
    /* background-color: gray; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 66vh;
    width: 100%;
}

.container-img {
    position: absolute;
    background-image: url('@/assets/img/padlocks.webp');
    /* object-fit: cover; */
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100%;
    width: 100%;
}

.container-contact {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    backdrop-filter: blur(12px) brightness(0.9);
    gap: 20px;
    padding: 15px;
}

.container-title-contact {
    /* background-color: gray; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-family: "Archivo Black", serif;
    font-size: 25px;
    color: white;
}

.content-contact {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* gap: 1px; */
    height: 80%;
    width: 32%;
    border-radius: 30px;
    border: 1px solid  #ffffff;
    box-shadow: 0 0 6px #ffffff;
    background-color:rgba(135, 136, 135, 0.196); /* rgba(135, 136, 135, 0.1)  rgba(51, 203, 132, 0.226)*/
    backdrop-filter: blur(9px);
}

.inputs-content {
    position: relative;
    /* background-color: green; */
}

.inputs {
    position: relative;
    margin: 15px 0;
    background: transparent;
    color: white;
    border: none;
    outline: none;
    font-size: 17px;
    border-bottom: 2px solid #ffffff;   
    font-family: "Inter";
    width: 350px;
    resize: none;
}

.inputs::placeholder {
    color: rgba(245, 245, 245, 0.385);
    font-family: "Inter";
    font-size: 17px;
}

.input-menssage {
    height: 120px;
}

.button-send-message {
    position: relative;
    background-color: gainsboro;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 350px;
    border-radius: 7px;
    font-family: 'Inter';
    color: white;
}

/* 
section end
*/

.sec-end {
    /* background-color: gray; */
    position: relative;
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    height: 60vh;
    width: 85%;
}

.container-sec-end {
    position: relative;
    /* background-color: aliceblue; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 85%;
    row-gap: 20px;
}

.tittle-sec-end {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #16DB65; */
    width: 80%;
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
    width: 80%;
    font-family: 'Inter';
    font-size: 17px;
    font-weight: 400;
}

</style>