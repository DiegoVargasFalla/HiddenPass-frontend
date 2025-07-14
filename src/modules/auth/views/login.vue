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
                <Form @submit="onSubmit" :validation-schema="useSchemaLogin" v-slot="{ errors }" class="form-login">
                    <div class="content-tittle">
                        <h2>Iniciar sesion</h2>
                    </div>
                    <div class="content-inputs">
                        <div class="input-mail container-inputs">
                            <Field  v-model="credentials.email" name="email" class="inputs-none" :class="{'is-invalid' : errors.email}" type="email" placeholder="Correo electronico" id="mail-field-id"/>
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="container-error">
                            <div class="invalid-feedback">{{ errors.email }}</div>
                        </div>
                        <div v-if="existMail" class="container-error">
                            <div class="invalid-feedback"> ¡Usuario incorrecto!</div>
                        </div>
                        
                        <div class="input-password container-inputs">
                            <Field  v-model="credentials.password" name="password" id="input-password-id" class="inputs-none" :class="{'is-invalid' : errors.password}" type="password" placeholder="Contraseña"/>
                            <i @click="showPassword" class="fa-solid fa-eye"></i>
                        </div>
                        <div class="container-error">
                            <div class="invalid-feedback">{{ errors.password }}</div>
                        </div>
                        <div v-if="existPassword" class="container-error">
                            <div class="invalid-feedback">¡Credenciales incorrectas!</div>
                        </div>

                    </div>
                    <!-- <div class="password-recover">
                        <a href="#" class="text-password-recover">¿Olvidaste contraseña?</a>
                    </div> -->
                    <div class="container-button" id="cont-button">
                        <button id="button-submit" class="button-star" type="submit">
                            Iniciar
                        </button>
                    </div>
                    <div class="container-redirect-register">
                        <p>¿No tienes una cuenta?</p>
                        <a class="link-register" href="/register">Registrateme</a>
                    </div>
                </Form>
            </div>
        </section>
    </div>
</template>

<script setup>
import Header from '@/components/Layout/Header.vue';
import {Field , Form} from 'vee-validate';
import { computed, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useCredentialsStore } from '../store/credentialsStore';
import { useSchemaLogin } from '../schema/loginSchema';
import { useAuthenticationStore } from '../store/authenticationStore';
import { useLoaderStore } from '@/modules/loading/store/loadingStore';
import { useEncryptionsUtilsStore } from '@/modules/dashboard/store/EncryptionsUtilsStore';

const showPassword = () => {
    const input = document.getElementById('input-password-id');
    input.type = input.type === 'password' ? 'text' : 'password';
}


const load = useLoaderStore();
const router = useRouter();

const credentialsStore = useCredentialsStore();
const credentials = credentialsStore.credentials;

const encryptionsUtilsStore = useEncryptionsUtilsStore();
const authenticationStore = useAuthenticationStore();

onMounted(() => {
    updateOpacity();
})

const updateOpacity = () => {
    const containerButton = document.getElementById("cont-button")
    const buttonSubmit = document.getElementById("button-submit")

    if (containerButton) {

        if (!credentials.email || !credentials.password) {
            containerButton.style.opacity = "0.5";
            containerButton.classList.remove('container-button')
            containerButton.classList.add('container-button-2')

            buttonSubmit.style.cursor = "default";
            buttonSubmit.disabled = true;
        }
        else if (credentials.email && credentials.password){
            containerButton.style.opacity = "1";
            containerButton.classList.remove('container-button-2')
            containerButton.classList.add('container-button')

            buttonSubmit.style.cursor = "pointer";
            buttonSubmit.disabled = false;
        }
        
    }
}

onMounted(() => {
    const emailField = document.getElementById("mail-field-id");
    const passwordField = document.getElementById("input-password-id");

    emailField.addEventListener('focus', (event) => {
        authenticationStore.setVerifyEmail(Boolean);
    })

    passwordField.addEventListener('focus', (event) => {
        authenticationStore.setVerifyPassword(Boolean);
    })
})

watch([() => credentials.email, () => credentials.password], updateOpacity);

const existMail = computed(() => {

    if(authenticationStore.getVerifyEmail()) {
        return false;
    } else if (!authenticationStore.getVerifyEmail()) {
        return true;
    }

})

const existPassword = computed(() => {

    if (authenticationStore.getVerifyPassword()) {
        return false;
    } else if (!authenticationStore.getVerifyPassword()) {
        return true;
    }
})

const onSubmit = async () => {
    const requestBody = {
            email: credentials.email 
        };

        await authenticationStore.checkMail(requestBody)
        if(authenticationStore.getVerifyEmail()) {
            await authenticationStore.login(credentials);
            if (!authenticationStore.getForbbiden()) {
                await encryptionsUtilsStore.bringPublicKeyBack();

                const token = authenticationStore.token;
                const password = credentials.password;
                authenticationStore.setPassword(password);
                credentialsStore.setEmail('');
                credentialsStore.setPassword('');

                const encryptedMk = await encryptionsUtilsStore.encryptMk(authenticationStore.getPassword());
                const base64Mk = encryptionsUtilsStore.exportUnit8ArrayToBase64(encryptedMk);
                authenticationStore.setPassword(base64Mk);

                if (token) {
                    router.push('/dashboard');
                }
            }
        }
}

</script>

<style scoped>

/* -internal-autofill-selected */

.button-star {
    position: relative;
    background: none;
    border: none;
    font-size: 18px;
    color: white;
    cursor: pointer;
    height: 100%;
    width: 100%;
}

.button-star:hover {
    opacity: 0.9;
}

.input:-webkit-autofill {   
    background-image: none !important;
    background-color: none !important;
    color: fieldtext none !important;
}

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
    /* padding: 10% 0; */
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
    /* background-color: rgba(91, 178, 110, 0.668); */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    /* height: 100vh; */
    width: 100%;
}

.content-form-login {
    position: relative;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    /* margin-top: 60px; */
}

.form-login {
    position: relative;
    /* background-color:rgb(135, 136, 135); */
    backdrop-filter: blur(9px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: auto;
    width: 26rem;
    padding:1.6rem;
    border-radius:20px;  
    border: 1px solid rgb(23, 157, 76);
    box-shadow: 0 0 4px #058C42;
}

.container-error {
    position: relative;
    padding: 0;
    margin: 0;
    font-family: 'Inter';
    width: 90%;
    font-size: 13px;
    color: rgb(255, 77, 77);
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    margin-top: 25px;

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
    color: gray;
    font-family: "Inter";
    font-size: 16px;
    font-family: 'Inter';
}

.container-inputs {
    position: relative;
    /* background-color: gray; */
    height: 35px;
    width: 90%;
    border-bottom: 1px solid #16DB65;
}

.password-recover {
    position: relative;
    width: 90%;
    /* background-color: white; */
    text-align: end;
    margin-top: 15px;
}

.text-password-recover {
    color: white;
    font-family: 'Inter';
    font-size: 16px;
    text-decoration: none;
}

.container-button {
    position: relative;
    margin-top: 20px;
    background-color: #16DB65;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 350px;
    border-radius: 40px;
    border: 1px solid rgba(0, 128, 0, 0.593);
    box-shadow: 0px 2px 5px 0 rgba(51, 203, 132, 0.226);
    font-family: "Inter", serif;
    transition: 0.3s all ease-in-out;
    overflow: hidden;
}

.container-button-2 {
    position: relative;
    margin-top: 20px;
    background-color: #16DB65;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.2rem;
    width: 20rem;
    border-radius: 40px;
    border: 1px solid rgba(0, 128, 0, 0.593);
    box-shadow: 0px 2px 5px 0 rgba(51, 203, 132, 0.226);
    font-family: "Inter", serif;
    transition: 0.3s all ease-in-out;
    overflow: hidden;
}

.container-button:hover {
    transform: scale(1.04);
    opacity: 0.8;
}

.container-redirect-register {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 4px;
    font-family: 'Inter';
    color: white;
    margin-top: 30px;
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

@media screen and (max-width: 650px) {
    .content-form-login {
        width: 95%;
    }
    .form-login {
        width: 100%;
    }
    .container-button-2 {
        width: 95%;
    }
}

@media screen and (min-width: 1050px) and (max-width: 750px) {
    .content-form-login {
        width: 60%;

   }
   .form-login {
        width: 100%;
        padding: 4rem 2rem;
   }
   .container-button-2 {
    width: 90%;
   }
}

</style>