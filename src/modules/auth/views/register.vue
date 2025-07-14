<template>
    <div class="container">
        <div class="bgImg"></div>
        <div class="layer"></div>
        <Header
            ColorText="white"
            link-about="/#sec-about" 
            linkGuide="/#sec-use-guide" 
            linkPlans="/#sec-plans" 
            linkContact="/#contact-section"
            bgColor='#c8c6c638'
        ></Header>
        <section class="section-login">
            <div class="content-form-login">
                <Form :validation-schema="useRegisterSchema" @submit=""  class="form-login">
                    <div class="content-tittle">
                        <h2>Registro</h2>
                    </div>
                    <div class="content-inputs">
                        <div class="input-mail container-inputs">
                            <Field name="name" class="inputs-none" type="email" autocomplete="off" placeholder="Nombre"/>
                        </div>
                        <div class="container-error">
                            <ErrorMessage name="name"></ErrorMessage>
                        </div>
                        <div class="input-mail container-inputs">
                            <Field name="email" class="inputs-none" type="email" autocomplete="off" placeholder="Correo electronico"/>
                        </div>
                        <div class="container-error">
                            <ErrorMessage name="email"></ErrorMessage>
                        </div>
                        <div class="input-password container-inputs">
                            <Field name="password" id="input-password" class="inputs-none" type="password" placeholder="Contraseña"/>
                            <i @click="showPassword" class="fa-solid fa-eye"></i>
                        </div>
                        <div class="container-error">
                            <ErrorMessage name="password"></ErrorMessage>
                        </div>
                        <div class="input-password container-inputs">
                            <Field name="confirmPassword" id="input-confirm-password" class="inputs-none" type="password" placeholder="Confirmar contraseña"/>
                            <i @click="showConfirmPassword" class="fa-solid fa-eye"></i>
                        </div>
                        <div class="container-error">
                            <ErrorMessage name="confirmPassword"></ErrorMessage>
                        </div>
                        <!-- 
                            <li><RouterLink class="text-inter" to="/TyC">Términos y condiciones</RouterLink></li>
                    <li><RouterLink class="text-inter" to="/policies">Política de privacidad</RouterLink></li>
                        -->
                    </div>
                    <div class="container-tyc">
                        <p href="#" class="text-password-recover text-tyc">Registrandote aceptas los <RouterLink class="links-tyc" to="/TyC">Términos y condiciones</RouterLink> y <RouterLink class="links-tyc" to="/policies">Política de privacidad</RouterLink></p>
                    </div>
                    <div class="container-button">
                        <buttons
                            label="Registrarme" 
                            link="" 
                            bgColor="#16DB65" 
                            textColor="white" 
                            boxShadowColor="rgba(51, 203, 132, 0.226)"
                            :height="3.2" 
                            :width="90"
                            :fontSize="1.1"
                            :fontWeight="900"
                            colorBorder="#058C42"
                            :bordeRadius="40"
                        ></buttons>
                    </div>
                    <div class="container-redirect-register">
                        <p>¿Ya tienes una cuenta?</p>
                        <a class="link-register" href="/login">Iniciar sesion</a>
                    </div>
                </Form>
            </div>
        </section>
    </div>
</template>

<script setup>
// import logo from '@/components/UI/logo.vue';
import buttons from '@/components/UI/buttons.vue';
import Header from '@/components/Layout/Header.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useRegisterSchema } from '@/modules/register/schema/validationSchema';


const showPassword = () => {
    const input = document.getElementById('input-password');
    input.type = input.type === 'password' ? 'text' : 'password';
}

const showConfirmPassword = () => {
    const input = document.getElementById('input-confirm-password');
    input.type = input.type === 'password' ? 'text' : 'password';
}

</script>

<style scoped>

.bgImg {
    position: absolute;
    background-image: url('@/assets/img/bgBinary.webp');
    height: 100%;
    width: 100%;
    object-fit: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.layer {
    position: absolute;
    background-color:rgba(64, 170, 107, 0.14);
    height: 100%;
    width: 100%;
    /* z-index: 500; */
    backdrop-filter: blur(5px) brightness(0.6);
}

.container {
    position: relative;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
}

.container-logo {
    position: absolute;
    /* background-color: blanchedalmond; */
    display: flex;
    align-items: center;
    justify-content: left;
    /* height: 100%; */
    width: 85%;
    top: 20px;
    z-index: 1000;
}

.section-login {
    position: relative;
    /* background-color: rgba(91, 178, 110, 0.86); */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 85%;
}

.content-form-login {
    position: relative;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    margin-top: 3.1rem;
}

.form-login {
    position: relative;
    background-color:rgba(135, 136, 135, 0.1); /* rgba(135, 136, 135, 0.1)  rgba(51, 203, 132, 0.226)*/
    backdrop-filter: blur(9px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: auto;
    padding: 2rem;
    border-radius:20px;
    width: 26rem;
    border: 1px solidrgb(23, 157, 76);
    box-shadow: 0 0 4px#058C42;
}

.container-error {
    position: relative;
    /* background-color: red; */
    padding: 0;
    margin: 0;
    font-family: 'Inter';
    width: 90%;
    font-size: 13px;
    color: rgb(255, 77, 77); /*rgb(43, 215, 30) */
    margin-top: -14px;
}

.content-tittle {
    position: relative;
    /* background-color: gray; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-family: "Archivo Black";
    color: white;
}

.content-inputs {
    position: relative;
    /* background-color: antiquewhite; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 20px;
}

.inputs-none {
    background: none;
    border: none;
    resize: none;
    outline: none;
    font-family: 'Inter';
    color: white;
    font-size: 16px;
    width: 93%;
    height: 100%;
}

.inputs-none::placeholder {
    color: rgb(159, 158, 158);
    font-family: "Inter";
    font-size: 16px;
    font-family: 'Inter';
    background: none;
}

.container-inputs {
    position: relative;
    /* background-color: gray; */
    height: 35px;
    width: 90%;
    border-bottom: 1px solid #16DB65;
}

.container-tyc {
    position: relative;
    width: 90%;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
}

.text-tyc {
    color: white;
    font-family: 'Inter';
    font-size: 13px;
    text-decoration: none;
}

.container-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
    text-align: center;
    height: auto;
    width: 100%;
}

.container-redirect-register {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 4px;
    font-family: 'Inter';
    color: white;
    margin-top: 15px;
    /* margin-top: -15px; */
}

.link-register {
    color:  rgb(43, 215, 30);
    font-size: 16px;
}

.fa-solid {
    color: rgb(255, 255, 255);
    font-size: 14px;
}

.fa-eye {
    cursor: pointer;
}

.links-tyc {
    color: rgb(43, 215, 30);
    text-decoration: none;
}

@media screen and (max-width: 500px) {
    .section-login {
        width: 95%;
    }
}

@media screen and (min-width: 750px) and (max-width: 1050px) {
    .section-login {
        width: 95%;
    }
    .form-login {
        width: 70%;
    }
}

</style>