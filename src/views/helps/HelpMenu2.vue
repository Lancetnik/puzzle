<template>
  <HelpMenuWrapper @started="$emit('started')">
    <p>Здорово! Теперь ты видишь ноды. Первая нода это источник данных.</p>

    <b>Задание: попробуй найти, как добавить еще один источник</b>
  </HelpMenuWrapper>
</template>

<script>
import HelpMenuWrapper from "./HelpMenuWrapper.vue";

export default {
  name: "HelpDialog2",

  components: {
    HelpMenuWrapper,
  },
};
</script>