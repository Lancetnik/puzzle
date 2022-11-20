<template>
    <div>
        <FirstDialog :value="firstShow" @clicked="firtsClicked"/>
        <SecondDialog :value="secondShow" @clicked="secondClicked"/>
        <ThirdDialog :value="thirdShow" @clicked="thirdClicked"/>
    </div>
</template>

<script>
import FirstDialog from "./Dialog1.vue"
import SecondDialog from "./Dialog2.vue"
import ThirdDialog from "./Dialog3.vue"

export default {
    name: "DialogGroup",

    components: {
        FirstDialog,
        SecondDialog,
        ThirdDialog
    },

    data: () => ({
        firstShow: true,
        secondShow: false,
        thirdShow: false
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
            if (Math.random() < 0.5) {
                this.$router.push({ name: "flow11" })
            } else {
                this.$router.push({ name: "flow21" })
            }
        }
    }
}
</script>