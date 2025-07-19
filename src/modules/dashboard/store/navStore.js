import { defineStore } from "pinia";


export const useNavStore = defineStore('navStore', {
    state: () => ({
        selectedElement: 'passwordsId', // Guarda el ID del elemento seleccionado
        section: 'Passwords',
        showSideBar: false,
        showItem: true
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