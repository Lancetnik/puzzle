<template>
  <v-col>
    <v-row>
      <v-btn class="mx-2" elevation="1">
        <v-icon class="mr-2">mdi-exit-to-app</v-icon>
        Сгруппировать
      </v-btn>

      <v-btn class="mx-2" elevation="1">
        <v-icon class="mr-2">mdi-set-center</v-icon>
        Объединить
      </v-btn>

      <v-btn class="mx-2" elevation="1">
        <v-icon class="mr-2">mdi-plus</v-icon>
        Добавить колонку
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn class="mx-2" text @click="$router.push({ name: 'flow12' })">
        <v-icon class="mr-2">mdi-arrow-expand</v-icon>
        Показать ноды
      </v-btn>
    </v-row>

    <HelpDialog @started="start"/>

    <Table />
  </v-col>
</template>

<script>
import HelpDialog from "@/views/helps/HelpMenu1.vue"
import Table from "./Table.vue";

export default {
  name: "Page1Vue",

  components: {
    HelpDialog,
    Table
  },

  methods: {
    start() {
      console.log("started")
    }
  }
};
</script>