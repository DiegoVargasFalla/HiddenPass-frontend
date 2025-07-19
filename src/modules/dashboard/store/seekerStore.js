// const { defineStore } = require("pinia");
import { defineStore } from "pinia";



export const useSeekerStore = defineStore('seekerStore', {
    state: () => ({
        writtenPassword: '',
    }),
    actions: {
        getWrittenPassword() {
            return this.writtenPassword;
        },
        setWrittenPassword(value) {
            this.writtenPassword = value;
        }
    }
})