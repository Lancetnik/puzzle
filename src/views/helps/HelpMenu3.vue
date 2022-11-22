<template>
  <HelpMenuWrapper @started="$emit('started')">
    <p>
      Отлично! Ты добавил новый источник.<br />
      Кстати, все твои действия автоматически генерируют SQL-код.
    </p>

    <b>Задание: попробуй найти, где открыть сгенерированный код.</b>
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