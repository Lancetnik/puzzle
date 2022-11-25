<template>
  <HelpMenuWrapper @started="clicked">
    <p>
      Отлично! Новый источник добавлен.<br />
      Кстати, все ваши действия автоматически генерируют SQL-код.
    </p>

    <b>Задание: попробуйте найти, где открыть сгенерированный код.</b>
  </HelpMenuWrapper>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useTimerStore } from "@/timer.store";

import HelpMenuWrapper from "./HelpMenuWrapper.vue";
import axios from 'axios';

export default {
  name: "HelpDialog3",

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
      this.$metrika.reachGoal("btn_sql_start", data)

      axios.post("/save-report-data", {
        ...this.params,
        ...data,
        type: "btn_sql_start",
      });
      this.setClicked()

      this.$emit('started')
    },
  },
};
</script>