<template>
    <v-dialog
        :value="value"
        width="500"
        persistent
      >
        <v-card class="py-4">
          <v-card-subtitle class="headline text-center py-2">
            Пожалуйста, оцените свой опыт работы с SQL
          </v-card-subtitle>
  
          <v-card-text class="text-center py-2 subtitle-1">
            <v-radio-group v-model="sqlSelect">
                <v-radio
                v-for="n in choices"
                :key="n"
                :label="n"
                :value="n"
                ></v-radio>
            </v-radio-group>
          </v-card-text>
  
          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              width="15rem"
              @click="clicked"
            >
              Оценить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
    name: "SecondDialog",

    props: ['value'],

    data: () => ({
        sqlSelect: null,
        choices: [
            "нет опыта",
            "на базовом уровне, пробовал(а) немного работать",
            "есть опыт, могу самостоятельно писать запросы",
            "очень хорошо разбираюсь, пишу сложные запросы"
        ]
    }),

    methods: {
        clicked() {
            if (this.sqlSelect) this.$emit("clicked")
        }
    }
}
</script>