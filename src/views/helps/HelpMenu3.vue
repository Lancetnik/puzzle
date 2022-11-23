<template>
  <HelpMenuWrapper @started="$emit('started')">
    <p>
      Отлично! Новый источник добавлен.<br />
      Кстати, все ваши действия автоматически генерируют SQL-код.
    </p>

    <b>Задание: попробуйте найти, где открыть сгенерированный код.</b>
  </HelpMenuWrapper>
</template>

<script>
import HelpMenuWrapper from "./HelpMenuWrapper.vue";

export default {
  name: "HelpDialog3",

  components: {
    HelpMenuWrapper,
  },
};
</script>