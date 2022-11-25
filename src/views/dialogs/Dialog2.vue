<template>
  <DialogWrapperVue :value="value" @clicked="clicked">
    <v-card-text class="text-center py-2 subtitle-1">
      <v-col>
        <div>Укажите ваш возраст</div>

        <v-text-field
          v-model="age"
          type="number"
          class="my-0 mt-4"
          outlined
        ></v-text-field>
      </v-col>
    </v-card-text>
  </DialogWrapperVue>
</template>

<script>
import { mapActions } from "pinia";
import { useTimerStore } from "@/timer.store";

import DialogWrapperVue from "./DialogWrapper.vue";

export default {
  name: "SecondDialog",

  props: ["value"],

  data: () => ({
    age: null,
  }),

  components: {
    DialogWrapperVue,
  },

  methods: {
    ...mapActions(useTimerStore, ["setParams"]),

    clicked() {
      if (10 < Number(this.age) && Number(this.age) < 70) {
        this.$metrika.params({ "age": this.age });
        this.setParams({ "age": this.age, "user": this.$metrika.getClientID() })
        this.$emit("clicked");
      }
    },
  },
};
</script>