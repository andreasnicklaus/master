<script setup>
import CommentIcon from "@/assets/comment.svg";
</script>

<template>
  <img
    class="transparent"
    id="commenticon"
    :src="CommentIcon"
    alt=""
    width="29"
  />
</template>

<script>
export default {
  name: "CommentIcon",
};
</script>

<style scoped></style>
