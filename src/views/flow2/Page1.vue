<template>
  <v-col>
    <DialogGroupVue @finished="isDialogFinished = true" />

    <ButtonsVue :go="false"/>

    <Table />

    <HelpDialog @started="start" v-if="isDialogFinished" />
  </v-col>
</template>

<script>
import { mapActions } from "pinia";
import { useTimerStore } from "@/timer.store";

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

  created() {
    this.$metrika.params({"version": "new"})
  },

  data: () => ({
    isDialogFinished: false,
  }),

  methods: {
    ...mapActions(useTimerStore, ["setStepStart"]),

    start() {
      this.setStepStart()
    },
  },
};
</script>