<template>
  <header>
    <NuxtLink :to="{ name: 'index' }">
      <NotInstagramLogo />
    </NuxtLink>
    <div id="actionLogos">
      <NuxtLink :to="{ name: 'create' }"> <IconsPlusIcon /> </NuxtLink>
      <IconsHeartIcon />
      <IconsSendIcon />
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
