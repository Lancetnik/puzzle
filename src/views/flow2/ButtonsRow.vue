<template>
  <v-row>
    <v-btn class="mx-2" elevation="1" small @click="calling">
      <v-icon class="mr-2">mdi-plus</v-icon>
      Добавить источник
    </v-btn>

    <v-btn class="mx-2" elevation="1" small @click="clickWrong">
      <v-icon class="mr-2">mdi-set-center</v-icon>
      Объединение
    </v-btn>

    <v-btn class="mx-2" elevation="1" small @click="clickWrong">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        class="mr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.15224 2.23463C1 2.60218 1 3.06812 1 4C1 4.93188 1 5.39782 1.15224 5.76537C1.35523 6.25542 1.74458 6.64477 2.23463 6.84776C2.60218 7 3.06812 7 4 7C4.93188 7 5.39782 7 5.76537 6.84776C6.25542 6.64477 6.64477 6.25542 6.84776 5.76537C7 5.39782 7 4.93188 7 4C7 3.06812 7 2.60218 6.84776 2.23463C6.64477 1.74458 6.25542 1.35523 5.76537 1.15224C5.39782 1 4.93188 1 4 1C3.06812 1 2.60218 1 2.23463 1.15224C1.74458 1.35523 1.35523 1.74458 1.15224 2.23463ZM1.15224 10.2346C1 10.6022 1 11.0681 1 12C1 12.9319 1 13.3978 1.15224 13.7654C1.35523 14.2554 1.74458 14.6448 2.23463 14.8478C2.60218 15 3.06812 15 4 15C4.93188 15 5.39782 15 5.76537 14.8478C6.25542 14.6448 6.64477 14.2554 6.84776 13.7654C7 13.3978 7 12.9319 7 12C7 11.0681 7 10.6022 6.84776 10.2346C6.64477 9.74458 6.25542 9.35523 5.76537 9.15224C5.39782 9 4.93188 9 4 9C3.06812 9 2.60218 9 2.23463 9.15224C1.74458 9.35523 1.35523 9.74458 1.15224 10.2346ZM9 4C9 3.06812 9 2.60218 9.15224 2.23463C9.35523 1.74458 9.74458 1.35523 10.2346 1.15224C10.6022 1 11.0681 1 12 1C12.9319 1 13.3978 1 13.7654 1.15224C14.2554 1.35523 14.6448 1.74458 14.8478 2.23463C15 2.60218 15 3.06812 15 4C15 4.93188 15 5.39782 14.8478 5.76537C14.6448 6.25542 14.2554 6.64477 13.7654 6.84776C13.3978 7 12.9319 7 12 7C11.0681 7 10.6022 7 10.2346 6.84776C9.74458 6.64477 9.35523 6.25542 9.15224 5.76537C9 5.39782 9 4.93188 9 4ZM9.15224 10.2346C9 10.6022 9 11.0681 9 12C9 12.9319 9 13.3978 9.15224 13.7654C9.35523 14.2554 9.74458 14.6448 10.2346 14.8478C10.6022 15 11.0681 15 12 15C12.9319 15 13.3978 15 13.7654 14.8478C14.2554 14.6448 14.6448 14.2554 14.8478 13.7654C15 13.3978 15 12.9319 15 12C15 11.0681 15 10.6022 14.8478 10.2346C14.6448 9.74458 14.2554 9.35523 13.7654 9.15224C13.3978 9 12.9319 9 12 9C11.0681 9 10.6022 9 10.2346 9.15224C9.74458 9.35523 9.35523 9.74458 9.15224 10.2346Z"
          fill="black"
          fill-opacity="0.8"
        />
      </svg>
      Группировка
    </v-btn>

    <v-btn class="mx-2" elevation="1" small @click="clickWrong">
      <v-icon class="mr-2">mdi-filter-outline</v-icon>
      Фильтрация
    </v-btn>

    <v-btn class="mx-2" elevation="1" small @click="clickWrong">
      <v-icon class="mr-2">mdi-sort-reverse-variant</v-icon>
      Сортировка
    </v-btn>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useTimerStore } from "@/timer.store";
import axios from 'axios';

export default {
  name: "ButtonsVue",

  props: {
    go: {
      default: false,
      required: false
    }
  },

  data: () => ({
    calling: null,
  }),

  created() {
    if (this.go === false) this.calling = this.clickWrong
    else this.calling = this.go
  },

  computed: {
    ...mapState(useTimerStore, ["lastClick", "startTime", "params"]),
  },

  methods: {
    ...mapActions(useTimerStore, ["setClicked"]),

    clickWrong() {
      const time = new Date();
      const data = {
        timestamp: time,
        from_start: Math.floor((time.getTime() - this.startTime.getTime()) / 1000),
        from_last: Math.floor((time.getTime() - this.lastClick.getTime()) / 1000),
      };
      this.$metrika.reachGoal("btn_actions", data);
      axios.post("/save-report-data", {
        ...this.params,
        ...data,
        type: "btn_actions",
      });
      this.setClicked();
    },
  }
}
</script>