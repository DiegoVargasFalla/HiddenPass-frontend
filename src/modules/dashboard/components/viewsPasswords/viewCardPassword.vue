<template>
    <Form class="container-form">
        <section class="container-view-password">
            <div class="container-tittle-view-password">
                <img class="icon-web-site" :src="`https://icons.duckduckgo.com/ip3/${existingPasswordStore.nameSite}.ico`" alt="">
                <h1 class="text-titele-view-password">{{ existingPasswordStore.url }}</h1>
            </div>
            <article class="container-inpunts">
                <div class="second-container-inputs">
                    <containerInputCreatePaassword
                    name="username"
                    :text=existingPasswordStore.username
                    type="text"
                    label="Usuario o email:"
                    icon="fa-solid fa-user"
                    id="emailId"
                    id-edit="editId"
                    ></containerInputCreatePaassword>
                    <containerInputCreatePaassword
                    name="password"
                    :text=existingPasswordStore.password
                    type="password"
                    label="Contraeña:"
                    icon="fa-solid fa-eye"
                    id="password"
                    id-edit="editId"
                    :icon-copy="true"
                    :icon-view="true"
                    ></containerInputCreatePaassword>
                </div>
                <div class="second-container-inputs">
                    <containerInputCreatePaassword
                        name="note"
                        :text=existingPasswordStore.note
                        type="text"
                        label="Nota:"
                        icon="fa-solid fa-note-sticky"
                        id="noteId"
                        id-edit="editId"
                    ></containerInputCreatePaassword>
                    <containerInputCreatePaassword
                        name="link"
                        type="text"
                        label="Link:"
                        :link=existingPasswordStore.url
                        id="linkId"
                    ></containerInputCreatePaassword>
                </div>
            </article>
            <div class="container-buttons">
                <div class="contaner-button-edit-save container-second-buttons">
                    <existingCardButton
                    label="Eliminar"
                    icon="fa-solid fa-trash"
                    type="delete"
                    icon-color="#db3c3c"
                    ></existingCardButton>
                    <existingCardButton
                    label="Editar"
                    icon="fa-solid fa-pen-to-square"
                    type="edit"
                    icon-color="#f1c40f"
                    ></existingCardButton>
                    <existingCardButton
                    label="Guardar"
                    icon="fa-solid fa-floppy-disk"
                    type="save"
                    ></existingCardButton>
                </div>
            </div>
        </section>
    </Form>
    
</template>

<script setup>
import { Form } from 'vee-validate';
import containerInputCreatePaassword from '../UiDashboard/containerInputExistingPassword.vue';
import existingCardButton from '../UiDashboard/existingCardButton.vue';
import { useExistingPasswordStore } from '../../store/existingPasswordStore';

const existingPasswordStore = useExistingPasswordStore();

</script>

<style scoped>

.container-form {
    /* background-color: green; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 83%;
    width: 80%;
    /* margin-top: -100px; */
    border-radius: 15px;
    animation: slideCardPassword 0.2s ease;
}

@keyframes slideCardPassword {
    0% {
        transform: translateX(300px)
    }
}

.container-form::before {
    color: #debd3a;
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

.container-view-password {
    position: relative;
    background: linear-gradient(200deg, rgba(22, 219, 101, 0.9), rgba(8, 80, 37, 0.879));
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 15px;
    padding-top: 1rem;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.441);
    border: 1px solid rgba(57, 168, 23, 0.684);
   
}

.icon-web-site {
    position: relative;
    height: 2.5rem;
    width:2.5rem;
}

.container-tittle-view-password {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    /* height: 10; */
    width: 95%;
    gap: 1rem;
}

.text-titele-view-password {
    font-family: 'Inter';
    font-size: 20px;
    font-weight: 700;
    color: white;
}

.container-inpunts {
    position: relative;
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 95%;
    padding: 0 0 0 2rem;
}

.second-container-inputs {
    position: relative;
    /* background-color: bisque; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 95%;
}

.container-buttons {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 12%;
    width: 100%;
    /* padding: 0 20px; */
}

.container-buttons::before {
    position: absolute;
    content: '';
    background-color: rgb(255, 255, 255);
    height: 1px;
    width: 100%;
    top: 0;
}

.container-second-buttons {
    position: relative;
    /* background-color: orange; */
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 10px;
}

.text-no-changes {
    font-family: 'Inter';
    font-weight: 600;
    color: rgb(255, 68, 68);
}

@media screen and (max-width: 500px) {
    .container-form {
        width: 97%;
    }
}

@media screen and (min-height: 900px) {
    .container-form {
        height: 50%;
    }
}

@media screen and (max-width: 700px) {
    .container-inpunts {
        padding: 0;
    }
}

</style>