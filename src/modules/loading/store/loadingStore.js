import { defineStore } from "pinia";

export const useLoaderStore = defineStore('loader', {
    state: () => (
        {
            load: false,
        }
    ),
    actions: {
        startLoading() {
            this.load = true;
        },
        stopLoading() {
            this.load = false
        }
    },
})