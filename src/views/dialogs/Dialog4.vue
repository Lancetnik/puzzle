<template>
  <DialogWrapperVue :value="value" @clicked="$emit('clicked')">
    <v-card-text class="text-center py-2 subtitle-1">
      Для каждого задания будет подробное описание. Нажмите кнопку
      <b>“Начать”</b>, когда будете готовы приступить к заданию. Это очень важно
      для правильного сбора результатов.
    </v-card-text>
  </DialogWrapperVue>
</template>

<script>
import DialogWrapperVue from "./DialogWrapper.vue";

export default {
  name: "FourthDialog",

  props: ["value"],

  components: {
    DialogWrapperVue,
  },
};
</script>