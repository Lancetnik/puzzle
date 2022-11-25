<template>
  <div>
    <v-dialog v-model="show" width="50rem" persistent>
      <v-card class="py-4">
        <v-card-text class="text-center py-0">
          <slot />

          <p class="mt-2" v-show="!isShownAgain">
            Нажми кнопку <b>“Начать”</b> перед тем, как приступить к заданию
          </p>
        </v-card-text>

        <v-card-actions class="justify-center py-0 mt-2">
          <v-btn
            color="primary"
            width="15rem"
            @click="clicked"
            :outlined="isShownAgain"
          >
            {{ isShownAgain ? "Закрыть" : "Начать" }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <HelpFabVue @clicked="showAgain" />
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useTimerStore } from "@/timer.store";

import HelpFabVue from "@/components/HelpFab.vue";
import axios from 'axios';

export default {
  name: "HelpDialog",

  components: {
    HelpFabVue,
  },

  data: () => ({
    btnText: "Начать",
    show: true,
    isShownAgain: false,

    showStart: new Date()
  }),

  computed: {
    ...mapState(useTimerStore, ["params"]),
  },

  methods: {
    ...mapActions(useTimerStore, ["setClicked"]),

    clicked() {
      this.show = false;

      const time = new Date()
      const data = { 
        "timestamp": time,
        "reading_for": Math.floor((time.getTime() - this.showStart.getTime()) / 1000),
      }
      this.$metrika.reachGoal("btn_help_close", data)
      axios.post("/save-report-data", {
        ...this.params,
        ...data,
        type: "btn_help_close",
      });
      this.setClicked()

      if (!this.isShownAgain) this.$emit("started");
    },

    showAgain() {
      this.show = true;
      this.isShownAgain = true;

      const time = new Date()
      const data = { 
        "timestamp": time
      }
      this.$metrika.reachGoal("btn_help_open", data)
      axios.post("/save-report-data", {
        ...this.params,
        ...data,
        type: "btn_help_open",
      });
      this.setClicked()

      this.showStart = time
    },
  },
};
</script>