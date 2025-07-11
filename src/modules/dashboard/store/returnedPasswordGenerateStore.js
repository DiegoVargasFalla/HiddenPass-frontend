import { defineStore } from "pinia"


export const useReturnedPassword = defineStore('returnedPassword', {
    state: () => ({
        password: 'sdfjbjb344556(/&%#Dfs8'
    }),
    actions: {
        setPassword(newPassword) {
            this.password = newPassword;
        }
    }
})