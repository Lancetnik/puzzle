<template>
  <DialogWrapperVue :value="value" @clicked="$emit('clicked')">
    <v-card-subtitle class="headline text-center py-2">
      Привет!
    </v-card-subtitle>

    <v-card-text class="text-center py-2 subtitle-1">
      Спасибо, что согласился протестировать интерфейс!
      <br />
      Это не займет много времени.
    </v-card-text>
  </DialogWrapperVue>
</template>

<script>
import DialogWrapperVue from "./DialogWrapper.vue";

export default {
  name: "FirstDialog",

  props: ["value"],

  components: {
    DialogWrapperVue,
  },
};
</script>