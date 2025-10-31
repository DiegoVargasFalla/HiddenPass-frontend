import { defineStore } from "pinia";
import axios from "axios";

export const useRegisterLinkStore = defineStore('registerLink', {
    state: () => ({
        email: ''
    }),
    actions: {
        async generateRegisterLink() {
            try {
                const response = await axios.get(`/api/v1/generate-register-token/${this.email}`);

                const data = response.data;
                if(data) {
                    return;
                }
            } catch (error) {
                console.log(error)
            }
        },
    }
})