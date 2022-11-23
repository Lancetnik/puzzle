<template>
    <div>
        <FirstDialog :value="firstShow" @clicked="firtsClicked"/>
        <SecondDialog :value="secondShow" @clicked="secondClicked"/>
        <ThirdDialog :value="thirdShow" @clicked="thirdClicked"/>
        <FourthDialog :value="fourthShow" @clicked="fourthClicked"/>
    </div>
</template>

<script>
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
            this.$emit('finished')
        }
    }
}
</script>