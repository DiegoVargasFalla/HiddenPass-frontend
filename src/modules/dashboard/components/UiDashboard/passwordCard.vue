<template>
    <div class="conten-card" @click="showCardPasword">
        <div class="logo-site">
            <i :class="props.logo"></i>
        </div>
        <div class="text-card">
            <h3 class="text-tittel">{{ props.namesite }}</h3>
        </div>
        <div class="logo-more">
            <i class="fa-solid fa-circle-chevron-right"></i>
        </div>
    </div> 
</template>

<script setup>
import { useExistingPasswordStore } from '../../store/existingPasswordStore';
import { useAuthenticationStore } from '@/modules/auth/store/authenticationStore';


const props = defineProps({
    id: Number,
    namesite: String,
    logo: String,
})

const existingPasswordStore = useExistingPasswordStore();
const authenticationStore = useAuthenticationStore();
const listPassword = authenticationStore.getListPassword();


function showCardPasword() {

    existingPasswordStore.setCancel(true);
    listPassword.forEach(element => {
        if (element.id === props.id) {
            existingPasswordStore.setId(element.id);
            existingPasswordStore.setUsername(element.username);
            existingPasswordStore.setPassword(element.password);
            existingPasswordStore.setUrl(element.url);
            existingPasswordStore.setNote(element.note);
        }
    })
}

</script>

<style scoped>

.conten-card {
    position: relative;
    /* background: linear-gradient(green, rgb(88, 197, 88)); */
    display: flex;
    align-items: center;
    padding-left: 15px;
    min-height: 40px;
    width: 90%;
    border-radius: 15px;
    cursor: pointer;
    margin-top: 5px;
    
}

.conten-card:hover {
    background-color: #16DB65;
    box-shadow:  
        0 3px 6px rgba(0, 0, 0, 0.245),
        0 5px 20px rgba(0, 0, 0, 0.25),
        inset 1px 1px 4px rgba(101, 101, 101, 0.475);
    border: 1px solid rgba(0, 0, 0, 0.127);
}

.logo-site {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 10%;
    font-size: 18px;
}

.text-card {
    position: relative;
    /* background-color: red; */
    display: flex;
    align-items: center;
    height: 100%;
    width: 90%;
    font-family: 'Inter';
    /* font-size: 16px; */
    /* font-weight: 400; */
}

.logo-more {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 10%;
    color: #000000;
}

.text-tittel {
    font-size: 17px;
    font-weight: 400;
}

</style>