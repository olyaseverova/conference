<template>
  <div class="state">
    <h1 class="big-headline">{{ headlineState }}</h1>
    <p class="state__status">{{ statusState }}</p>
    <p class="state__description description p">{{ descriptionState }}</p>
  </div>
</template>

<script>
export default {
  name: "State",
  props: ["statusState", "descriptionState", "headlineState"],
};
</script>