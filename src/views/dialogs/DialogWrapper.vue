<template>
    <v-dialog
        :value="value"
        width="500"
        persistent
      >
        <v-card class="py-4">
          <slot></slot>

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

    props: ['value'],
}
</script>