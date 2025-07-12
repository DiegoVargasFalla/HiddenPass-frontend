<template>
    <section class="section-form">
        <Form class="formNewPassword" :validation-schema="newPasswordSchema" v-slot="{errors}">
            <div class="content-title">
                Añadir contraseña
            </div>
            <div class="content-inputs">
                <div class="container-input" :class="{'isFocused': focusedUsername}">
                    <Field v-model="username" id="field-username" name="username" type="text" placeholder="Usuario/Correo" class="styles-none" :class="{'is-invalid': errors.username}" @focus="focusedUsername = true" @blur="focusedUsername = fasle"></Field>
                </div>
                <div class="container-error">
                    <div class="invalid-feedback">{{ errors.username }}</div>
                </div>

                <div class="container-input" :class="{'isFocused': focusedPassword}">
                    <Field v-model="password" id="field-password" name="password" type="password" placeholder="Contraseña" class="styles-none field-password" :class="{'is-invalid': errors.password}"  @focus="focusedPassword = true" @blur="focusedPassword = fasle"></Field>
                    <i @click="showPassword" id="iconNewPassword" class="iconNewPassword fa-solid fa-eye"></i>
                </div>
                <div class="container-error">
                    <div class="invalid-feedback">{{ errors.password }}</div>
                </div>

                <div class="container-input" :class="{'isFocused': focusedUrl}">
                    <Field v-model="url" name="url" id="field-url" type="text" placeholder="Url/Link: (ejemplo.com)" class="styles-none" :class="{'is-invalid': errors.url}"  @focus="focusedUrl = true" @blur="focusedUrl = fasle"></Field>
                </div>
                <div class="container-error">
                    <div class="invalid-feedback">{{ errors.url }}</div>
                </div>

                <div class="container-input container-text-note" :class="{'isFocused': focusedNote}">
                    <textarea v-model="note" name="note" type="text" placeholder="Nota" class="styles-none"  @focus="focusedNote = true" @blur="focusedNote = fasle"></textarea>
                </div>

            </div>
            <div class="content-buttons">
                <newPasswordButtons
                text="Cancelar"
                action="cancel"
                :loader="false"
                ></newPasswordButtons>
                <newPasswordButtons
                text="Guardar"
                action="save"
                :loader="true"
                ></newPasswordButtons>
            </div>
        </Form>
        <div v-if="showCheckIcon"  class="container-check">
            <i class="fa-solid fa-circle-check"></i>
        </div>
    </section>
</template>

<script setup>
import { Form, Field } from 'vee-validate';
import { useNewPasswordSchema } from '../schema/newPasswordSchema';
import { useNewPasswordStore } from '../store/newPasswordStore';
import newPasswordButtons from '../../UiDashboard/newPasswordButtons.vue';
import { storeToRefs } from 'pinia';
import { computed, ref } from 'vue';

const newPasswordStore = useNewPasswordStore();
const newPasswordSchema = useNewPasswordSchema();

const {username, url, password, note, showLayer} = storeToRefs(newPasswordStore)

const focusedUsername = ref(false);
const focusedPassword = ref(false);
const focusedUrl = ref(false);
const focusedNote = ref(false);

const showCheckIcon = computed(() => newPasswordStore.iconConfirm);


const showPassword = () => {
    const fieldPassword = document.getElementById('field-password')
    const iconPassword = document.getElementById('iconNewPassword');
    
    fieldPassword.type = fieldPassword.type === 'password' ? 'text': 'password'

    if (iconPassword.classList.contains('fa-eye')) {
        iconPassword.classList.remove('fa-eye');
        iconPassword.classList.add('fa-eye-slash');
    } else {
        iconPassword.classList.remove('fa-eye-slash');
        iconPassword.classList.add('fa-eye');
    }
}

</script>

<style scoped>

.section-form {
    background-color: white;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 55%;
    width: 28%;
    border-radius: 10px;
    animation: slideUpForm 0.1s ease-in;
}

@keyframes slideUpForm {
    0% {
        transform: translateY(155px);
    }
}

.content-title {
    position: relative;
    /* background-color: orange; */
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;

    font-family: 'Inter';
    font-size: 18px;
    font-weight: 700;
}

.formNewPassword {
    position: relative;
    /* background-color: gray; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    height: 90%;
    width: 90%;
}

.content-inputs {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 10px;
}

.container-input {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    height: 35px;
    width: 92%;
    border-radius: 7px;
    border: 1px #16DB65 solid;
    overflow: hidden;
}

.container-error {
    position: relative;
    display: flex;
    color: red;
    align-items: center;
    justify-content: start;
    width: 90%;
    margin-top: -5px;

    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
}

.styles-none {
    background: none;
    border: none;
    resize: none;
    outline: none;
    font-family: 'Inter';
    color: black;
    font-size: 16px;
    width: 100%;
    height: 100%;
    font-size: 14px;
}

.field-password {
    width: 93%;
}

.iconNewPassword {
    cursor: pointer;
}

.content-buttons {
    position: relative;
    /* background-color: green; */
    display: flex;
    align-items: center;
    justify-content: end;
    height: 28px;
    width: 100%;
    gap: 8px;
}

.container-text-note {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 92%;
    border-radius: 7px;
    border: 1px #16DB65 solid;
}

.isFocused {
    box-shadow: 0px 0px 4px #16DB65;
}

.container-check {
    position: absolute;
    /* display: none; */
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

</style>
