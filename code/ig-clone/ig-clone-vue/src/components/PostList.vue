<script setup>
import Post from "@/components/Post.vue";
</script>

<template>
  <div id="postList">
    <Post
      v-for="post in posts"
      :key="post.id"
      :userhandle="post.userhandle"
      :caption="post.caption"
      :mediaType="post.mediaType"
      :mediaSource="post.mediaSource"
      :likeCount="post.likeCount"
      :createdAt="post.createdAt"
    />
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: {
    posts: Array,
  },
};
</script>

<style></style>
