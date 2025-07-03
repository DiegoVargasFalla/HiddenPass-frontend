import { defineStore } from "pinia";

export const useFilterStore = defineStore('filters', {
    state: () => ({
        selected: 'recentId',
        munFilter: 1
    }),
    actions: {
        setIdElement(id) {
            this.selected = id;
        },
        clearSelected() {
            this.selected = ''
        }
    }
})