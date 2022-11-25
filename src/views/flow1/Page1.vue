<template>
  <v-col>
    <DialogGroupVue @finished="isDialogFinished = true" />

    <v-row>
      <v-btn class="mx-2" elevation="1" small @click="clickWrong">
        <v-icon class="mr-2">mdi-exit-to-app</v-icon>
        Сгруппировать
      </v-btn>

      <v-btn class="mx-2" elevation="1" small @click="clickWrong">
        <v-icon class="mr-2">mdi-set-center</v-icon>
        Объединить
      </v-btn>

      <v-btn class="mx-2" elevation="1" small @click="clickWrong">
        <v-icon class="mr-2">mdi-plus</v-icon>
        Добавить колонку
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn class="mx-2" text @click="finishStep" small>
        <v-icon class="mr-2">mdi-arrow-expand</v-icon>
        Показать ноды
      </v-btn>
    </v-row>

    <HelpDialog @started="start" v-if="isDialogFinished" />

    <Table />
  </v-col>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "pinia";
import { useTimerStore } from "@/timer.store";

import HelpDialog from "@/views/helps/HelpMenu1.vue";
import DialogGroupVue from "../dialogs/DialogGroup.vue";
import Table from "./Table.vue";

export default {
  name: "Page1Vue",

  components: {
    HelpDialog,
    Table,
    DialogGroupVue,
  },

  data: () => ({
    isDialogFinished: false,

    actionStartTime: new Date(),
  }),

  computed: {
    ...mapState(useTimerStore, ["lastClick", "startTime", "params"]),
  },

  methods: {
    ...mapActions(useTimerStore, ["setClicked", "setParams"]),

    start() {
      this.actionStartTime = new Date();
    },

    async clickWrong() {
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
      this.$metrika.reachGoal("btn_actions", data);

      axios.post("/save-report-data", {
        ...this.params,
        ...data,
        type: "btn_actions",
      });

      this.setClicked();
    },

    finishStep() {
      const time = new Date();
      const data = {
        timestamp: time,
        from_action_start: Math.floor(
          (time.getTime() - this.actionStartTime.getTime()) / 1000
        ),
        from_start: Math.floor(
          (time.getTime() - this.startTime.getTime()) / 1000
        ),
        from_last: Math.floor(
          (time.getTime() - this.lastClick.getTime()) / 1000
        ),
      };
      this.$metrika.reachGoal("btn_node_finish", data);
      axios.post("/save-report-data", {
        ...this.params,
        ...data,
        type: "btn_node_finish",
      });

      this.setClicked();

      this.$router.push({ name: "flow12" });
    },
  },

  mounted() {
    this.$metrika.params({ version: "old" });
    this.setParams({ version: "old" });
  },
};
</script>