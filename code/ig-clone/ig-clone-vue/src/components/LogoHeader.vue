<script setup>
import NotInstagramLogoVue from "./NotInstagramLogo.vue";
import PlusIcon from "@/components/icons/PlusIcon.vue";
import SendIcon from "@/components/icons/SendIcon.vue";
import HeartIcon from "@/components/icons/HeartIcon.vue";
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'Feed' }">
      <NotInstagramLogoVue />
    </RouterLink>
    <div id="actionLogos">
      <RouterLink :to="{ name: 'Create' }"> <PlusIcon /> </RouterLink>
      <HeartIcon />
      <SendIcon />
    </div>
  </header>
</template>

<style scoped>
header {
  margin: 16px;
  display: flex;
  justify-content: space-between;
}

a {
  color: inherit;
  text-decoration: inherit;
}

#actionLogos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  column-gap: 12px;
}
</style>
