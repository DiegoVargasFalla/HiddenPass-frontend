<template>
    <div class="container-title-link">
        <h1 class="tittle-link">
            ¿Listo para empezar? <br></br> Ingresa tu correo y protege tus contraseñas.
        </h1>
        <h2 class="second-text-link"> Te enviaremos un mail para crear tu cuenta</h2>
    </div>
    <div class="container-link">
        <Form :validation-schema="useRegisterLinkSchema" class="form-register-link">
            <div class="container-input-link">
                <div class="container-input-mail-link">
                    <Field v-model="registerLinkSotre.email" name="email" class="input-mail-user" type="email" autocomplete="off" placeholder="Correo electronico" id="input-email"/>
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="container-error-link">
                    <ErrorMessage name="email"></ErrorMessage>
                    <!-- <p class="text-exixt-mail" >¡Este email ya existe!</p> -->
                </div>
            </div>
            <div class="container-button-link">
                <buttons
                label="Enviar" 
                link="" 
                bgColor="#16DB65" 
                textColor="white" 
                boxShadowColor="rgba(51, 203, 132, 0.226)"
                :height="3.2" 
                :width="200"
                :fontSize="1.1"
                :fontWeight="900"
                colorBorder="#058C42"
                :bordeRadius="40"
                :disabled="false"
                :token="true"
                ></buttons>
            </div>
        </Form>
    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useRegisterLinkSchema } from '@/modules/register/schema/registerLinkSchema';
import buttons from '@/components/UI/buttons.vue';
import { useRegisterLinkStore } from '@/modules/register/store/registerLinkStore';

const registerLinkSotre = useRegisterLinkStore();


</script>

<style scoped>

.container-title-link {
    position: relative;
    /* background-color: red; */
    padding: 20px;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
}

.tittle-link {
    position: relative;
    font-family: 'Inter';
    font-weight: 900;
    color: white;
    font-size: 37px;
    text-align: center;
}

.second-text-link {
    position: relative;
    font-family: 'Inter';
    color: white;
    font-weight: 400;
    font-size: 18px;
}

.container-link {
    position: relative;
    /* background-color: red; */
    height: 25%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-error-link {
    position: relative;
    /* background-color: red; */
    padding: 0;
    margin: 0;
    width: 80%;
    font-family: 'Inter';
    font-size: 13px;
    color: rgb(255, 77, 77);
}

.form-register-link {
    position: relative;
    background-color:rgba(135, 136, 135, 0.048);
    backdrop-filter: blur(9px);
    border: 1px solid rgb(23, 157, 76);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 20px;
}

.container-input-mail-link {
    position: relative;
    /* background-color: green; */
    height: 100%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #16DB65;
}

.input-mail-user {
    position: relative;
    background: none;
    border: none;
    resize: none;
    outline: none;
    font-family: 'Inter';
    color: white;
    font-size: 16px;
    width: 100%;
    height: 100%;
    position: relative;
}

.input-mail-user::placeholder {
    color: rgb(159, 158, 158);
    font-family: "Inter";
    font-size: 16px;
    font-family: 'Inter';
    background: none;
}

.container-input-link {
    position: relative;
    /* background-color: aqua; */
    height: 20%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.container-button-link {
    position: relative;
    /* background-color: green; */
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-input-mail-link i {
    color: white;
}

@media screen and (max-width: 1000px) {
    .container-link {
        width: 90%;
    }
}

</style>