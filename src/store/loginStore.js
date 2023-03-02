import { defineStore } from "pinia";

export const useLoginStore = defineStore('login', {
    state: () => ({
        userStatus: {
            isLoged: false,
            userId: '',
            userName: '',
            userEmail: '',
            token: ''
        }
    }),
    actions: {
        changeStatus (userId, userToken) {
            this.userStatus.isLoged = true,
            this.userStatus.userId = userId,
            this.userStatus.token = userToken
        },
        defineProperties (userName, userEmail) {
            this.userStatus.userName = userName
            this.userStatus.userEmail = userEmail
        },
        logOut () {
            this.userStatus.isLoged = false,
            this.userStatus.userId = '',
            this.userStatus.token = ''
            this.userStatus.userName = ''
            this.userStatus.userEmail = ''
        }
    }
})