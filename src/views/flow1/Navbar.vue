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

    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="4" fill="url(#paint0_linear_1_25082)" />
      <mask
        id="mask0_1_25082"
        style="mask-type: alpha"
        maskUnits="userSpaceOnUse"
        x="6"
        y="6"
        width="20"
        height="20"
      >
        <path
          d="M23.7419 12.3367L23.5744 12.282C23.5744 12.282 22.8929 14.5368 19.8296 14.9011C18.2684 15.0869 16.9444 14.7987 15.8251 14.4164C17.0498 13.5964 17.8591 12.1879 17.8591 10.5856C17.8591 8.0532 15.8403 6 13.3495 6C11.1754 6 9.36211 7.56391 8.93518 9.64526C7.31355 9.29862 6 8.98977 6 10.4046C6 11.7197 7.92622 13.0296 9.9746 13.8197C7.84208 14.7878 6.35495 16.9614 6.35495 19.4894C6.35495 22.9177 9.10695 25.3407 12.4603 25.6972C17.2218 26.2032 22.8702 25.3742 25.0031 21.0189C26.5288 17.9039 26.4485 13.4358 23.7419 12.3367Z"
          fill="url(#paint1_linear_1_25082)"
        />
      </mask>
      <g mask="url(#mask0_1_25082)">
        <path d="M4 4H28V28H4V4Z" fill="white" />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1_25082"
          x1="0"
          y1="0"
          x2="33"
          y2="32.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#A598F9" />
          <stop offset="1" stop-color="#4D33EE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_25082"
          x1="15.9207"
          y1="8.67957"
          x2="23.9363"
          y2="22.7016"
          gradientUnits="userSpaceOnUse"
        >
          <stop />
          <stop offset="1" stop-opacity="0.7" />
        </linearGradient>
      </defs>
    </svg>
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
      console.log(data);
      this.$metrika.reachGoal(id, data);

      this.setClicked();
    },
  },
};
</script>