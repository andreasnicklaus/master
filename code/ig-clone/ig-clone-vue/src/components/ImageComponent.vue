<template>
  <img :src="imageSource" :alt="alt" :width="width" :height="height" />
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
      default: "",
    },
    width: String,
    height: String,
  },
  computed: {
    imageSource() {
      console.log(this.src);
      if (
        this.src == null ||
        this.src == undefined ||
        this.src.startsWith("http")
      )
        return this.src;
      return new URL(`/src/assets/stock-images/${this.src}`, import.meta.url)
        .href;
    },
  },
};
</script>

<style></style>
