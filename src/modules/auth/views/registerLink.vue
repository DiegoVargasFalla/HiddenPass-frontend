<template>
    <div class="container-title-link">
        <h1 class="tittle-link">
            ¿Listo para empezar? <br></br> Ingresa tu correo y protege tus contraseñas.
        </h1>
        <h2 class="second-text-link"> Te enviaremos un mail para crear tu cuenta</h2>
    </div>
    <div class="container-link">
        <Form @submit="handleSubmit" :validation-schema="useRegisterLinkSchema" class="form-register-link">
            <div class="container-input-link">
                <div class="container-input-mail-link">
                    <Field v-model="registerLinkSotre.email" name="email" class="input-mail-user" type="email" autocomplete="off" placeholder="Correo electronico" id="input-email-link"/>
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="container-error-link">
                    <ErrorMessage name="email"></ErrorMessage>
                    <p v-if="existMail" class="text-exixt-mail" >¡Este email ya existe!</p>
                </div>
            </div>
            <div class="container-button-link">
                <div class="container-button">
                    <buttons
                    :label="labelSend" 
                    link="" 
                    bgColor="#16DB65" 
                    textColor="white" 
                    boxShadowColor="rgba(51, 203, 132, 0.226)"
                    :height="3.2" 
                    :width="100"
                    :fontSize="1.1"
                    :fontWeight="900"
                    colorBorder="#058C42"
                    :bordeRadius="40"
                    :disabled="true"
                    :token="true"
                    ></buttons>
                </div>
                <div v-if="sendMail" class="container-send-again">
                    <p class="value-count-send-again">
                        {{ conuntSendAgain }} s
                    </p>
                </div>
            </div>
        </Form>
    </div>
    <div v-if="sendMail" class="container-banner-send-email">
        <h3 class="text-banner-send-mail">Te enviamos un mail con tu link de registro, revisa tu bandeja de entrada o spam</h3>
    </div>
    <div v-if="showCheckIcon" class="container-check-link-register">
        <i class="fa-solid fa-circle-check"></i>
    </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { useRegisterLinkSchema } from '@/modules/register/schema/registerLinkSchema';
import buttons from '@/components/UI/buttons.vue';
import { useRegisterLinkStore } from '@/modules/register/store/registerLinkStore';
import { compile, computed, onMounted } from 'vue';

const registerLinkSotre = useRegisterLinkStore();

onMounted(() => {
    const inputEmail = document.getElementById('input-email-link');
    if(inputEmail) {
        inputEmail.addEventListener('focus', () => {
            registerLinkSotre.setExistMail(false);
        })
    }
})

const showCheckIcon = computed(() => registerLinkSotre.getLoadCircle());
const sendMail = computed(() => registerLinkSotre.getSendMail());
const labelSend = computed(() => registerLinkSotre.getLabelSendMail());
const conuntSendAgain = computed(() => registerLinkSotre.getCountSendAgain())
const disabledButtonSend = computed(() => registerLinkSotre.getDisabledSend());
const existMail = computed(() => registerLinkSotre.getExistMail());

const handleSubmit = async () => {
    await registerLinkSotre.generateRegisterLink();
};


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
    text-align: center;
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
    padding: 5px 0;
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
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.container-button {
    position: relative;
    /* background-color: orange; */
    height: 100%;
    width: 80%;
}

/* .container-send-again {
    position: relative;
    background-color: aliceblue;
    height: 100%;
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.value-count-send-again {
    position: relative;
    background-color: red;
    padding: 5px 10px;
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
    color: white;
} */

.container-send-again {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: fit-content;
  margin: 0 auto;
}

.value-count-send-again {
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #16DB64;
  padding: 6px 16px;
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  min-width: 60px;
  transition: all 0.3s ease;
}

.value-count-send-again {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.15); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.container-input-mail-link i {
    color: white;
}

.container-banner-send-email {
    position: relative;
    /* background-color: red; */
    margin-top: 50px;
    width: 100%;
}

.text-banner-send-mail {
    position: relative;
    text-align: center;
    color: white;
    font-family: 'Inter';
    font-size: 25px;
    font-weight: 700;
}

.container-check-link-register {
    position: absolute;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 80px;
    font-size: 60px;
    color: #16DB65;
    margin-top: 505px;
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

@media screen and (max-width: 1000px) {
    .container-link {
        width: 90%;
    }
}

@media screen and (max-width: 730px) {
    .container-button-link {
        flex-direction: column;
        gap: 15px;
    }
}

</style>