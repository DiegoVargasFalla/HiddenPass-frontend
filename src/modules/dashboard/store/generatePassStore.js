import { defineStore } from "pinia";
// import { capitalize } from "vue";
// import Passwords from "../components/passwords.vue";


export const useGeneratorPassStore = defineStore('generatorPass', {
    state: () => ({
        capital: Boolean,
        lowercase: Boolean,
        number: Boolean,
        symbol: Boolean,
        length: 12,
        showItem: Boolean,
        generatedPassword: '', 
    }),
    actions: {
        setvalueCheckBox(name, value) {
            if (this.hasOwnProperty(name)) {
                this[name] = value;
            }
        },
        getCapital() {
            return this.capital
        },
        getLowercase() {
            return this.lowercase
        },
        getNumber() {
            return this.number
        },
        getSymbol() {
            return this.symbol
        },
        getLength() {
            return this.length
        }
    }
})