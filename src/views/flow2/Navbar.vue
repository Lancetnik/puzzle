<template>
  <v-app-bar app color="#191919" dark style="z-index: 100">
    <v-row justify="space-between" align="center">
      <v-col>
        <v-row justify="start" align="center">
          <v-app-bar-nav-icon>
            <v-icon>mdi-menu</v-icon>
          </v-app-bar-nav-icon>

          <v-app-bar-nav-icon>
            <v-icon>mdi-puzzle-outline</v-icon>
          </v-app-bar-nav-icon>

          <v-breadcrumbs :items="breadcrumbs" large dark></v-breadcrumbs>

          <v-icon> mdi-menu-down </v-icon>
        </v-row>
      </v-col>

      <v-col>
        <v-row justify="center">
          <div class="icon">
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.500488 18C0.500488 21.0376 2.96292 23.5 6.00049 23.5L31.5005 23.5L31.5005 0.5L6.00049 0.5C2.96292 0.5 0.500488 2.96243 0.500488 6L0.500488 18Z"
                fill="#191919"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.0005 7L11.0005 7L11.0005 13L13.0005 13H15.0005L21.0005 13V7ZM13.0005 15L11.0005 15L11.0005 17H13.0005V15ZM15.0005 17V15L21.0005 15L21.0005 17L15.0005 17ZM11.0005 5C9.89592 5 9.00049 5.89543 9.00049 7L9.00049 17C9.00049 18.1046 9.89592 19 11.0005 19L21.0005 19C22.1051 19 23.0005 18.1046 23.0005 17L23.0005 7C23.0005 5.89543 22.1051 5 21.0005 5L11.0005 5Z"
                fill="white"
                fill-opacity="0.5"
              />
              <path
                d="M0.500488 18C0.500488 21.0376 2.96292 23.5 6.00049 23.5L31.5005 23.5L31.5005 0.5L6.00049 0.5C2.96292 0.5 0.500488 2.96243 0.500488 6L0.500488 18Z"
                stroke="#2C2C2E"
              />
            </svg>
          </div>

          <div class="icon">
            <svg
              width="33"
              height="24"
              viewBox="0 0 33 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.501465 23.5L28.0015 23.5C29.9345 23.5 31.5015 21.933 31.5015 20L31.5015 4C31.5015 2.067 29.9345 0.5 28.0015 0.5L0.501465 0.5L0.501465 23.5Z"
                fill="#191919"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.0015 5C9.8969 5 9.00146 5.89543 9.00146 7L9.00146 17C9.00146 18.1046 9.8969 19 11.0015 19L21.0015 19C22.106 19 23.0015 18.1046 23.0015 17L23.0015 7C23.0015 5.89543 22.106 5 21.0015 5L11.0015 5ZM21.0015 7L15.0015 7V9L21.0015 9V7ZM13.0015 7V9H11.0015L11.0015 7L13.0015 7ZM11.0015 13L11.0015 11H13.0015V13L11.0015 13ZM11.0015 15L11.0015 17H13.0015V15L11.0015 15ZM15.0015 15V17L21.0015 17L21.0015 15L15.0015 15ZM15.0015 13L21.0015 13V11L15.0015 11V13Z"
                fill="white"
              />
              <path
                d="M0.501465 23.5L28.0015 23.5C29.9345 23.5 31.5015 21.933 31.5015 20L31.5015 4C31.5015 2.067 29.9345 0.5 28.0015 0.5L0.501465 0.5L0.501465 23.5Z"
                stroke="#FFDD2D"
              />
            </svg>
          </div>
        </v-row>
      </v-col>

      <v-col>
        <v-row justify="end">
          <v-btn class="mx-2">
            <v-icon class="mr-2">mdi-eye</v-icon>
            SQL
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
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
};
</script>

<style scoped>
.icon {
  cursor: pointer;
}
</style>