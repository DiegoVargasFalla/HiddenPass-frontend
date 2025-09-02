import axios from "axios";
import { defineStore } from "pinia";


export const subscriberStore = defineStore('subscriberStore', {
    state: () => ({
        subscriberEmail: ''
    }),
    actions: {
        getSubcriberEmail() {
            return this.subscriberEmail;
        },
        setSubscriberEmail(value) {
            this.subscriberEmail = value;
        },
        async subcribeUser() {
            try {
                const response = axios.post('',
                    
                )
            } catch(error) {
                console.log();
            }
        }
    }
})

