<template>
  <v-col>
    <v-row>
      <v-btn class="mx-2" outlined>
        <v-icon class="mr-2">mdi-wrench-cog</v-icon>
        Конструктор
      </v-btn>

      <v-btn class="mx-2" outlined>
        <v-icon class="mr-2">mdi-code-tags</v-icon>
        SQL код
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn class="mx-2" text>
        <v-icon class="mr-2">mdi-arrow-collapse</v-icon>
        Свернуть ноды
      </v-btn>
    </v-row>

    <v-layout
      align-content-center
      justify-center
      align-center
      fill-height
      style="width: 400px; margin: 0 auto; height: 200px"
    >
      <v-chip label color="white" class="elevation-2">
        <v-icon left color="#81C785">mdi-server</v-icon>
        CO2 Pollution
      </v-chip>

      <v-divider color="#C7C9CC"></v-divider>

      <v-tooltip top :value="true" color="rgba(112, 182, 246, 0.32)" style="z-index: 1;">
        <template v-slot:activator="">
          <v-chip active label color="white" class="elevation-2 selected">
            <v-icon left>mdi-exit-to-app</v-icon>
            Оставить значение
          </v-chip>
        </template>

        <span style="color: black">Эти элементы называются “ноды”</span>
      </v-tooltip>
    </v-layout>

    <HelpDialog @started="start" />
  </v-col>
</template>

<script>
import HelpDialog from "@/views/helps/HelpMenu2.vue";

export default {
  name: "Page2Vue",

  components: {
    HelpDialog,
  },

  methods: {
    start() {
      console.log("started");
    },
  },
};
</script>

<style scoped>
.selected::before {
  height: 10px;
  background: #141414 !important;
}
</style>