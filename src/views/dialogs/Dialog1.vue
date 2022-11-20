<template>
    <v-dialog
        :value="value"
        width="500"
        persistent
      >
        <v-card class="py-4">
          <v-card-subtitle class="headline text-center py-2">
            Привет!
          </v-card-subtitle>
  
          <v-card-text class="text-center py-2 subtitle-1">
            Спасибо, что согласился протестировать интерфейс!
            <br />
            Это не займет много времени.
          </v-card-text>
  
          <v-card-actions class="justify-center">
            <v-btn
              color="primary"
              width="15rem"
              @click="$emit('clicked')"
            >
              Начать
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
    name: "FirstDialog",

    props: ['value']
}
</script>