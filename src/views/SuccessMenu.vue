<template>
  <v-dialog :value="value" width="50rem" persistent>
    <v-card class="py-4">
      <v-card-text class="text-center py-0">
        <p v-show="!finished">Супер, код найден!<br /></p>

        <p>Спасибо большое за ваше время!<br /></p>
        <p v-show="!finished">
          Оцени, насколько тебе понравилось взаимодействовать с интерфейсом .
        </p>

        <v-btn-toggle
          v-model="estimation"
          v-show="!finished"
          borderless
          active-class="none"
        >
          <v-btn
            v-for="(i, j) in new Array(10)"
            :key="j"
            :color="j == estimation ? 'primary' : ''"
            active-class="none"
          >
            {{ j + 1 }}
          </v-btn>
        </v-btn-toggle>
      </v-card-text>

      <v-card-actions class="justify-center py-0 mt-2" v-show="!finished">
        <v-btn color="primary" width="15rem" @click="clicked">
          Завершить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
  <script>
export default {
  name: "SuccessMenu",

  props: ["value"],

  data: () => ({
    estimation: null,
    finished: false,
  }),

  methods: {
    clicked() {
      const data = { nps: this.estimation + 1 }
      console.log(data)
      this.$metrika.reachGoal("btn_nps", data);
      this.finished = true;
    },
  },
};
</script>