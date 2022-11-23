<template>
  <DialogWrapperVue :value="value" @clicked="clicked">
    <v-card-subtitle class="headline text-center py-2">
      Пожалуйста, оцените свой опыт работы с SQL
    </v-card-subtitle>

    <v-card-text class="text-center py-2 subtitle-1">
      <v-radio-group v-model="sqlSelect">
        <v-radio v-for="n in choices" :key="n" :label="n" :value="n"></v-radio>
      </v-radio-group>
    </v-card-text>
  </DialogWrapperVue>
</template>

<script>
import DialogWrapperVue from "./DialogWrapper.vue";

export default {
  name: "ThirdDialog",

  props: ["value"],

  components: {
    DialogWrapperVue,
  },

  data: () => ({
    sqlSelect: null,
    choices: [
      "нет опыта",
      "на базовом уровне, пробовал(а) немного работать",
      "есть опыт, могу самостоятельно писать запросы",
      "очень хорошо разбираюсь, пишу сложные запросы",
    ],
  }),

  methods: {
    clicked() {
      if (this.sqlSelect) {
        this.$metrika.params({"sql-experience": "old"})
        this.$emit("clicked")
      }
    },
  },
};
</script>