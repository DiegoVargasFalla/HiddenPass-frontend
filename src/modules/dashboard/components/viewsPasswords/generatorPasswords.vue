<template>
    <section class="container-generator-pass">
        <article class="cont-tittle-generator">
            <i class="fa-solid fa-repeat"></i>
            <h2 class="text-tittle-generator">Generador de contraseñas seguras</h2>
        </article>
        <article class="container-funtionalities">
            <div class="container-password-button-generate">
                <div class="container-camp-password">
                    <i class="fa-solid fa-ellipsis"></i>
                    <input type="text" class="camp-password" v-model="returnedPassword.password" readonly>
                </div>
                <div class="container-copy" @click="copyPassword">
                    <div class="container-icon-text-copy">
                        <i class="fa-solid fa-copy"></i>
                    <h3 class="text-copy">Copiar</h3>
                    </div>
                    <i class="fa-solid fa-circle-check icon-check-copy"></i>
                </div>
            </div>
            <div class="container-button-generate">
                <generatePasswordButton></generatePasswordButton>
            </div>
            <div class="container-options-password">
                <personalizePassword></personalizePassword>
            </div>
        </article>
    </section>
</template>

<script setup>
import { useReturnedPassword } from '../../store/returnedPasswordGenerateStore';
import generatePasswordButton from '../UiDashboard/generatePasswordButton.vue';
import personalizePassword from '../UiDashboard/personalizePassword.vue';


const returnedPassword = useReturnedPassword();

// const copyPassword = () => {
//     navigator.clipboard.writeText(returnedPassword.password)
// };


const copyPassword = () => {
    const container = document.querySelector('.container-copy');

    navigator.clipboard.writeText(returnedPassword.password)
        .then(() => {
            container.classList.add('copied');

            setTimeout(() => {
                container.classList.remove('copied');
            }, 2000);
        })
        .catch(err => console.error('Error al copiar:', err));
};

</script>

<style scoped>

.container-generator-pass {
    /* background-color: red; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 48%;
    width: 100%;
    border-radius: 20px;
    padding-top: 10px;


    background: rgba(255, 255, 255, 0.1); 
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px); 
    box-shadow:  
        0 5px 20px rgba(0, 0, 0, 0.282),
        0 4px 6px rgba(0, 0, 0, 0.05),
        0 1px 3px rgba(0, 0, 0, 0.03);
    border: 1px solid rgba(0, 0, 0, 0.119);
    /* z-index: 1000; */
}

.container-generator-pass::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(rgba(165, 164, 164, 0.074) 0.5mm, transparent 1px);
    background-size: 5px 5px;
    opacity: 0.4;
    pointer-events: none;
    background-size: 2mm 2mm;
}

.cont-tittle-generator {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: start;
    align-items: center;
    height: 25px;
    width: 100%;
    padding-left: 20px;
    gap: 10px;
    padding-top: 20px;
}

.cont-tittle-generator i {
    font-size: 20px;
    font-weight: 700;
}

.text-tittle-generator {
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 700;
}

.container-funtionalities {
    position: relative;
    /* background-color: gray; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 20px;
    gap: 10px;
}

.container-password-button-generate {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 35px;
    width: 100%;
    gap: 7px;
}

.container-camp-password {
    position: relative;
    height: 100%;
    width: 85%;
    
    padding-left: 10px;
    background-color: #cdc9c9;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    gap: 5px;
}

.container-camp-password i {
    background-color: #000000;
    border-radius: 50%;
    padding: 1.6px 2.5px;
    color: white;
}

.camp-password {
    position: relative;
    height: 100%;
    width: 100%;
    background: none;
    border: none;
    resize: none;
    outline: none;
    font-family: 'Inter';
    font-size: 16px;
    font-weight: 400;
}

.container-copy {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    background-color: #16DB65;
    border-radius: 15px;
    transition: 0.3s ease-in-out;

    height: 100%;
    padding: 0 6px;

    box-shadow:  
        inset 3px 3px 5px rgba(101, 101, 101, 0.474);
}

/* Contenedor del ícono y texto */
.container-icon-text-copy {
    display: flex;
    align-items: center;
    gap: 5px;
    transition: opacity 0.3s ease-in-out;
}

/* Ícono de check oculto por defecto */
.icon-check-copy {
    position: absolute;
    font-size: 20px;
    color: black;
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
}

/* Animación al copiar */
.copied .container-icon-text-copy {
    opacity: 0;
}

.copied .icon-check-copy {
    opacity: 1;
    transform: scale(1);
    animation: disappearCheck 2s forwards;
}

.text-copy {
    font-family: 'Inter';
    font-size: 15px;
    font-weight: 500;
}

/* Animación para que el check desaparezca y vuelva el icono original */
@keyframes disappearCheck {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    80% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.8);
    }
}

.container-copy:hover {
    box-shadow:  
        0 2px 9px rgba(0, 0, 0, 0.503),
        inset 3px 3px 5px rgba(101, 101, 101, 0.474);
}

.container-button-generate {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 35px;
    width: 100%;
}

.container-options-password {
    /* background-color: gray; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    /* margin-top: 10px; */
}


</style>