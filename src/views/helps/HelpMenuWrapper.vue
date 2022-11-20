<template>
  <div>
    <v-dialog v-model="show" width="50rem" :persistent="!isShownAgain">
      <v-card class="py-4">
        <v-card-text class="text-center py-0">
          <slot />

          <p class="mt-2" v-show="!isShownAgain">
            Нажми кнопку <b>“Начать”</b> перед тем, как приступить к заданию
          </p>
        </v-card-text>

        <v-card-actions class="justify-center py-0 mt-2">
          <v-btn
            color="primary"
            width="15rem"
            @click="clicked"
            :outlined="isShownAgain"
          >
            {{ isShownAgain ? "Закрыть" : "Начать" }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <HelpFabVue @clicked="showAgain" />
  </div>
</template>

<script>
import HelpFabVue from "@/components/HelpFab.vue";
export default {
  name: "HelpDialog",

  components: {
    HelpFabVue,
  },

  data: () => ({
    btnText: "Начать",
    show: true,
    isShownAgain: false,
  }),

  methods: {
    clicked() {
      this.show = false;

      if (!this.isShownAgain) this.$emit("started");
    },

    showAgain() {
      this.show = true;
      this.isShownAgain = true;
    },
  },
};
</script>