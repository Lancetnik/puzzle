<template>
  <HelpMenuWrapper @started="clicked">
    <p>Здорово! Теперь вы видите ноды. Первая нода - это источник данных.</p>

    <b>Задание: попробуйте найти, как добавить еще один источник</b>
  </HelpMenuWrapper>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useTimerStore } from "@/timer.store";

import HelpMenuWrapper from "./HelpMenuWrapper.vue";
import axios from 'axios';

export default {
  name: "HelpDialog2",

  components: {
    HelpMenuWrapper,
  },

  computed: {
    ...mapState(useTimerStore, ["lastClick", "startTime", "params"]),
  },

  methods: {
    ...mapActions(useTimerStore, ["setClicked"]),

    clicked() {
      const time = new Date()
      const data = { 
        "timestamp": time,
        "from_start": Math.floor((time.getTime() - this.startTime.getTime()) / 1000),
        "from_last":  Math.floor((time.getTime() - this.lastClick.getTime()) / 1000)
      }
      this.$metrika.reachGoal("btn_source_start", data)

      axios.post("/save-report-data", {
        ...this.params,
        ...data,
        type: "btn_source_start",
      });
      this.setClicked()

      this.$emit('started')
    },
  },
};
</script>