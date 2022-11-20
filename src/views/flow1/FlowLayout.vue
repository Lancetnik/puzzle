<template>
  <v-app>
    <Navbar></Navbar>

    <v-main>
      <v-container fluid>
        <v-col>
          <router-view></router-view>

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
import Table from "@/components/Table";

export default {
  name: "Page1Vue",
  components: {
    Navbar,
    Table,
  },
};
</script>