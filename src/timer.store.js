import { defineStore } from 'pinia'

export const useTimerStore = defineStore('timer', {
    state: () => {
        return {
            startTime: localStorage.getItem("startTime") ? new Date(localStorage.getItem("startTime")) : new Date(),
            lastClick: localStorage.getItem("lastClick") ? new Date(localStorage.getItem("lastClick")) : new Date(),
            stepStart: localStorage.getItem("stepStart") ? new Date(localStorage.getItem("stepStart")) : new Date(),

            params: {}
        }
    },

    actions: {
        setClicked() {
            this.lastClick = new Date()
            localStorage.setItem("lastClick", new Date())
        },

        setStarted() {
            this.startTime = new Date()
            localStorage.setItem("startTime", new Date())
        },

        setStepStart() {
            this.stepStart = new Date()
            localStorage.setItem("stepStart", new Date())
        },

        setParams(data) {
            this.params = {
                ...this.params,
                ...data
            }
        }
    },
})