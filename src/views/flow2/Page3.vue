<template>
  <v-col>
    <ButtonsVue :go="false"/>

    <v-layout
      align-content-center
      justify-center
      align-center
      fill-height
      style="width: 100%; height: 200px; position: relative"
      class="mt-5"
    >
      <v-col style="max-width: 40rem">
        <v-row align="center" style="max-width: 40rem">
          <v-alert elevation="2">
            <v-icon left color="#81C785">mdi-server</v-icon>
            CO2 Pollution
          </v-alert>

          <v-divider color="#C7C9CC"></v-divider>

          <v-alert
            elevation="2"
            colored-border
            border="top"
            color="#989898"
            id="tooltiped"
          >
            <v-icon left color="#989898">mdi-exit-to-app</v-icon>
            Оставить значение
          </v-alert>
        </v-row>

        <v-row align="center" style="max-width: 40rem">
          <v-alert elevation="2">
            <v-icon left color="#81C785">mdi-server</v-icon>
            Новый источник
          </v-alert>
        </v-row>
      </v-col>
    </v-layout>

    <Table />

    <HelpDialog @started="start" />
  </v-col>
</template>

<script>
import { mapActions } from "pinia";
import { useTimerStore } from "@/timer.store";

import HelpDialog from "@/views/helps/HelpMenu3.vue";
import ButtonsVue from "./ButtonsRow.vue";
import Table from "./Table";

export default {
  name: "Page3Vue",

  components: {
    HelpDialog,
    Table,
    ButtonsVue,
  },

  methods: {
    ...mapActions(useTimerStore, ["setClicked", "setStepStart"]),

    start() {
      this.setStepStart()
    },
  },
};
</script>

<style scoped lang="scss">
.tooltip-top::before {
  border-right: solid 5px transparent;
  border-left: solid 5px transparent;
  transform: translateX(-50%);
  position: absolute;
  z-index: -21;
  content: "";
  top: 100%;
  left: 20%;
  height: 0;
  width: 0;
}

.tooltip-top.my-primary::before {
  border-top: solid 5px rgba(112, 182, 246, 0.32);
}
</style>