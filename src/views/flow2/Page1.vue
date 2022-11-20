<template>
  <v-col>
    <DialogGroupVue @finished="isDialogFinished = true" />

    <ButtonsVue />

    <Table />

    <HelpDialog @started="start" v-if="isDialogFinished" />
  </v-col>
</template>

<script>
import Table from "./Table";
import DialogGroupVue from "../dialogs/DialogGroup.vue";
import ButtonsVue from "./ButtonsRow.vue"
import HelpDialog from "@/views/helps/HelpMenu1.vue";

export default {
  name: "Page1Vue",

  components: {
    Table,
    DialogGroupVue,
    HelpDialog,
    ButtonsVue
  },

  data: () => ({
    isDialogFinished: false,
  }),

  methods: {
    start() {
      console.log("started");
    },
  },
};
</script>