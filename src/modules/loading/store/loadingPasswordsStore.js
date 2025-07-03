import { defineStore } from "pinia";


export const useLoaderPasswordsStore = defineStore('loaderPasswordStore', {
    state: () => (
        {
            load: false,
        }
    ),
    actions: {
        startLoadPasswords() {
            this.load = true;
        },
        stopLoadPassword() {
            this.load = false;
        },
    }
})