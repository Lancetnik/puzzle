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
    clicked() {
      if (10 < Number(this.age) && Number(this.age) < 70) {
        this.$metrika.params({ age: this.age });
        this.$emit("clicked");
      }
    },
  },
};
</script>