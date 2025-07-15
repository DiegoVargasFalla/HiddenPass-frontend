<template>
    <div class="third-container">
        <label class="font-text" :for="name"> {{ label }}</label>
        <div class="inputs" :class="{['input-trasnparent']: isLink}">
            <Field v-model="valueVmodel" v-if="!isLink" class="inputs-none-create-password  textTassk" :type="type" :name="name" :id="id" :disabled="disable"></Field>
            <a v-if="isLink" :href="redirectLink" target="_blank" class="link">{{ link }}</a>
            <i v-if="iconCopy" @click="copyPassword" class="fa-solid fa-copy icon-copy"></i>
            <i @click="viewPassword" :class="{['icon-password']: isIconPassword}, icon, {['icon-view']: iconView}" class="icon"></i>
        </div>
    </div>
</template>

<script setup>
import { Field } from 'vee-validate';
import { useExistingPasswordStore } from '../../store/existingPasswordStore';
import { computed, onMounted, ref } from 'vue';

const props = defineProps({
    text: String,
    icon: String,
    label: String,
    name: String,
    type: String,
    id: String,
    link: String,
    idEdit: String,
    iconCopy: Boolean,
    iconView: Boolean,
})


const existingPasswordStore = useExistingPasswordStore();
const disable = computed(() => existingPasswordStore.noEdit)

const valueVmodel = computed({
    get() {
        if (props.name === 'password') {
            return existingPasswordStore.getPassword();
        } else if(props.name === 'username') {
            return existingPasswordStore.getUsername();
        } else if(props.name === 'note') {
            return existingPasswordStore.getNote();
        }
    },
    set(value) {
        existingPasswordStore.setNewPassword("id", existingPasswordStore.getId())
        if (props.name === 'password') {
            existingPasswordStore.setPassword(value);
            existingPasswordStore.setNewPassword("password", value)
        } else if(props.name === 'username') {
            existingPasswordStore.setUsername(value);
            existingPasswordStore.setNewPassword("username", value)
        } else if(props.name === 'note') {
            existingPasswordStore.setNote(value);
            existingPasswordStore.setNewPassword("note", value)
        }
    }
});

const isLink = props.link ? true: false;
const isIconPassword = props.type === 'password' ? true: false
// const isIconCopy = "";

const redirectLink = "http://" + props.link;

const viewPassword = () => {
    if (props.name === 'password') {
        const element = document.getElementById(props.id);
    element.type = element.type === 'password' ? 'text': 'password';
    }
}

const copyPassword = () => {
    const container = document.querySelector('.container-text-copy');

    navigator.clipboard.writeText(existingPasswordStore.password)
        .then(() => {
            container.classList.add('copied-password');

            setTimeout(() => {
                container.classList.remove('copied-password');
            }, 2000);
        })
        .catch(err => console.error('Error al copiar:', err));
};


</script>

<style scoped>

.third-container {
    /* background-color: green; */
    /* border: 1px solid black; */
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 8px;
    overflow: hidden;
}

.inputs-none-create-password {
    background: none;
    border: none;
    resize: none;
    outline: none;
    font-family: 'Inter';
    font-weight: 300;
    color: white;
    font-size: 1rem;
    width: 88%;
    height: 100%;
}

.inputs-none-create-password:disabled {
    background: rgba(173, 169, 169, 0.241);
    border-radius: 8px;
    font-family: 'Inter';
}

.inputs-none-create-password:focus {
    border: 1px solid #16DB65;
    box-shadow: 0 0 10px rgba(17, 208, 93, 0.864);
    /* background: rgba(255, 255, 255, 0.15); */
    border-radius: 7px;
}

.inputs-none-create-password::placeholder {
    color: rgb(47, 46, 46);
}

.font-text {
    font-family: 'Inter';
    font-size: clamp(1.1rem, 1vw, 2rem);
    font-weight: 600;
    color:  rgb(31, 30, 30);
}

.inputs {
    position: relative;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(128, 125, 125, 0.303);
    display: flex;
    align-items: center;
    height: 2.1rem;
    width: 85%;
    border-radius: 8px;
    transition: 0.3s ease-in-out;
}

.icon {
    margin-left: 1rem;
}

.icon-password {
    cursor: pointer;
}

.icon-copy {
    padding-left: 0.7rem;
    border-right: solid 1px rgb(206, 206, 206);
    padding-right: 10px;
    cursor: pointer;
}

.input-trasnparent {
    background-color: transparent;
    border: none;
    text-align: left;
}

.link {
    color: white;
    font-family: 'Inter';
    font-size: 1rem;
    font-weight: 400;
}

.icon-view {
    margin-right: 0.7rem;
}

</style>