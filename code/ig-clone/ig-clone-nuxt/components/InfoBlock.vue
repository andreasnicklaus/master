<template>
  <h2>{{ title }}</h2>
  <p>
    <slot />
  </p>
</template>

<script>
export default {
  name: "InfoBlock",
  props: {
    title: String,
  },
};
</script>

<style scoped>
h2 {
  font-family: "Kaushan Script", sans-serif;
  margin-bottom: 0;
}
p {
  margin-top: 0;
}
</style>
