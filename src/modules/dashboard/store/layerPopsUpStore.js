import { defineStore } from "pinia";


export const useShowLayerPopsUp = defineStore('showLayerPopsUp', {
    state: () => ({
        showLayerPopsUp: false
    }),

    actions: {
        getShowLayerPopsUp() {
            return this.showLayerPopsUp;
        },
        setShowLayerPopsUp(value) {
            this.showLayerPopsUp = value; 
        }
    }
})