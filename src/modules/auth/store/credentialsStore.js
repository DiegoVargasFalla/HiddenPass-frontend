import { defineStore } from "pinia";
import { ref } from "vue";


export const useCredentialsStore = defineStore('credentials', {
    state: () => (
        {
            credentials: ref({
                email: "",
                password: "",
            })
        }
    ),
    actions: {
        setEmail(value) {
            this.credentials.email = value;
        },
        setPassword(value) {
            this.credentials.password = value; 
        },
        getEmail() {
            return this.credentials.email
        },
        getPassword() {
            return this.credentials.password
        },
        
    }
})