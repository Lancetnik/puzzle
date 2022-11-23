<template>
    <div>
        <FirstDialog :value="firstShow" @clicked="firtsClicked"/>
        <SecondDialog :value="secondShow" @clicked="secondClicked"/>
        <ThirdDialog :value="thirdShow" @clicked="thirdClicked"/>
        <FourthDialog :value="fourthShow" @clicked="fourthClicked"/>
    </div>
</template>

<script>
import { mapActions } from "pinia"
import { useTimerStore } from "@/timer.store"

import FirstDialog from "./Dialog1.vue"
import SecondDialog from "./Dialog2.vue"
import ThirdDialog from "./Dialog3.vue"
import FourthDialog from "./Dialog4.vue"

export default {
    name: "DialogGroup",

    components: {
        FirstDialog,
        SecondDialog,
        ThirdDialog,
        FourthDialog
    },

    data: () => ({
        firstShow: true,
        secondShow: false,
        thirdShow: false,
        fourthShow: false,
    }),

    methods: {
        ...mapActions(useTimerStore, ["setStarted", "setClicked"]),

        firtsClicked() {
            this.firstShow = false
            this.secondShow = true
        },

        secondClicked() {
            this.secondShow = false
            this.thirdShow = true
        },

        thirdClicked() {
            this.thirdShow = false
            this.fourthShow = true
        },

        fourthClicked() {
            this.fourthShow = false

            this.setClicked()
            this.setStarted()
            this.$metrika.reachGoal("btn_start", { "timestamp": new Date() })

            this.$emit('finished')
        }
    }
}
</script>