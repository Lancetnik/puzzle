<template>
    <v-dialog
        :value="value"
        width="500"
        persistent
      >
        <v-card class="py-4">  
          <v-card-text class="text-center py-2 subtitle-1">
            Для каждого задания будет подробное описание.
            Нажимай кнопку <b>“Начать”</b>, когда будешь готов приступить к заданию.
            Это очень важно для правильного сбора результатов.
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
    name: "ThirdDialog",

    props: ['value']
}
</script>