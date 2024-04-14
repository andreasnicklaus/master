<script setup>
import BookmarkIcon from "@/assets/bookmark.svg";
</script>

<template>
  <img
    class="transparent"
    id="bookmarkicon"
    :src="BookmarkIcon"
    alt=""
    width="29"
  />
</template>

<script>
export default {
  name: "BookmarkIcon",
};
</script>

<style scoped></style>
