<template>
  <v-app-bar app color="#191919" dark style="z-index: 100">
    <v-app-bar-nav-icon @click="() => clickWrong('btn_menu')">
      <v-icon>mdi-dots-grid</v-icon>
    </v-app-bar-nav-icon>

    <v-app-bar-nav-icon @click="() => clickWrong('btn_logo')">
      <v-icon>mdi-puzzle-outline</v-icon>
    </v-app-bar-nav-icon>

    <v-breadcrumbs :items="breadcrumbs" large dark @click="() => clickWrong('btn_puzzle')"></v-breadcrumbs>

    <v-icon> mdi-menu-down </v-icon>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-content-save</v-icon>
    </v-btn>

    <v-btn prepend-icon="mdi-menu-down">
      Открыть в
      <v-icon>mdi-menu-down</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-horizontal</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useTimerStore } from "@/timer.store";

export default {
  name: "NavbarVue",

  data: () => ({
    breadcrumbs: [
      {
        text: "Puzzle",
        disabled: false,
      },
      {
        text: "CO2 pollution",
        disabled: false,
      },
    ],
  }),

  computed: {
    ...mapState(useTimerStore, ["lastClick", "startTime"]),
  },

  methods: {
    ...mapActions(useTimerStore, ["setClicked"]),

    clickWrong(id) {
      const time = new Date();
      const data = {
        timestamp: time,
        from_start: Math.floor(
          (time.getTime() - this.startTime.getTime()) / 1000
        ),
        from_last: Math.floor(
          (time.getTime() - this.lastClick.getTime()) / 1000
        ),
      };
      this.$metrika.reachGoal(id, data);

      this.setClicked();
    },
  },
};
</script>