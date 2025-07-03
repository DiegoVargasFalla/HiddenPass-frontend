import { defineStore } from "pinia";


export const useNavStore = defineStore('navStore', {
    state: () => ({
        selectedElement: 'passwordsId', // Guarda el ID del elemento seleccionado
        section: 'Passwords',
    }),
    actions: {
        setElement(id) {
            this.selectedElement = id;
        },
        clearSelection() {
            this.selectedElement = null;
        },
        setSection(nameSection) {
            this.section = nameSection;
        }
    }
});