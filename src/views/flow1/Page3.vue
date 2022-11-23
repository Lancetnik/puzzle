<template>
  <v-col>
    <SuccessMenuVue :value="success" v-show="success" :next-icon="null"/>

    <v-row>
      <v-chip-group mandatory active-class="primary--text" :value="0">
        <v-chip label>
          <v-icon class="mr-2">mdi-wrench-cog</v-icon>
          Конструктор
        </v-chip>

        <v-chip label @click="finishFlow">
          <v-icon class="mr-2">mdi-code-tags</v-icon>
          SQL код
        </v-chip>
      </v-chip-group>

      <v-spacer></v-spacer>

      <v-btn class="mx-2 mt-2" text small>
        <v-icon class="mr-2">mdi-arrow-collapse</v-icon>
        Свернуть ноды
      </v-btn>
    </v-row>

    <v-layout
      align-content-center
      justify-center
      align-center
      fill-height
      style="width: 100%; height: 200px; position: relative"
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

      <v-btn
        fab
        absolute
        bottom
        left
        color="rgba(0, 0, 0, 0.25);"
        elevation="0"
        small
      >
        <v-icon> mdi-plus </v-icon>
      </v-btn>
    </v-layout>

    <HelpDialog @started="start" />

    <TableVue className="rounded-t-xl">
      <v-alert
        color="grey"
        elevation="0"
        class="rounded-0 rounded-t-xl mt-2"
        dark
      >
        <v-row align="center" class="px-3">
          <v-btn fab x-small elevation="0" class="mr-2" color="white">
            <v-icon color="grey"> mdi-help </v-icon>
          </v-btn>

          <span>Данные преобразованы</span>

          <v-spacer></v-spacer>

          <span>Раскрыть преобразование</span>
          <v-icon>mdi-menu-up</v-icon>
        </v-row>
      </v-alert>
    </TableVue>
  </v-col>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useTimerStore } from "@/timer.store";

import HelpDialog from "@/views/helps/HelpMenu3.vue";
import SuccessMenuVue from "../SuccessMenu.vue";
import TableVue from "./Table.vue";

export default {
  name: "Page3Vue",

  components: {
    HelpDialog,
    TableVue,
    SuccessMenuVue
  },

  data: () => ({
    success: false,

    actionStartTime: new Date()
  }),

  computed: {
    ...mapState(useTimerStore, ["lastClick", "startTime"]),
  },

  methods: {
    ...mapActions(useTimerStore, ["setClicked"]),
  
    start() {
      this.actionStartTime = new Date()
    },

    finishFlow() {
      const time = new Date()
      const data = { 
        "timestamp": time,
        "from_action_start": Math.floor((time.getTime() - this.actionStartTime.getTime()) / 1000),
        "from_start": Math.floor((time.getTime() - this.startTime.getTime()) / 1000),
        "from_last":  Math.floor((time.getTime() - this.lastClick.getTime()) / 1000)
      }
      this.$metrika.reachGoal("btn_sql_finish", data)

      this.setClicked()

      this.success = true
    }
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