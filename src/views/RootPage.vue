<template>
  <v-app>
    <Navbar></Navbar>

    <v-main>
      <v-container fluid>
        <DialogGroupVue />

        <v-col>
          <v-row>
            <v-btn class="mx-2" elevation="1"
              ><v-icon class="mr-2">mdi-exit-to-app</v-icon>Сгруппировать</v-btn
            >
            <v-btn class="mx-2" elevation="1"
              ><v-icon class="mr-2">mdi-set-center</v-icon>Объединить</v-btn
            >
            <v-btn class="mx-2" elevation="1"
              ><v-icon class="mr-2">mdi-plus</v-icon>Добавить колонку</v-btn
            >

            <v-spacer></v-spacer>

            <v-btn class="mx-2" text
              ><v-icon class="mr-2">mdi-arrow-expand</v-icon>Показать ноды</v-btn
            >
          </v-row>

          <v-card class="mt-6">
            <v-card-subtitle>
              <v-row align="center" class="px-2">
                <span class="title">Преобразованная таблица</span>
                <span class="ml-2">2000 результатов</span>

                <v-spacer></v-spacer>

                <v-chip class="ma-2" color="#FFDD2D">
                  <v-icon left> mdi-help-circle </v-icon>
                  Построено на кэше
                </v-chip>
              </v-row>
            </v-card-subtitle>

            <Table></Table>
          </v-card>
        </v-col>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./Navbar";
import DialogGroupVue from "./dialogs/DialogGroup.vue";

import Table from "@/components/Table";

export default {
  name: "Page1Vue",
  components: {
    Table,
    Navbar,
    DialogGroupVue
  },
};
</script>