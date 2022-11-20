<template>
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

    <TableVue></TableVue>
  </v-card>
</template>


<script>
import TableVue from '@/components/Table.vue';

export default {
  name: "Flow2Table",

  components: {
    TableVue,
  },
};
</script>