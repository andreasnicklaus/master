<template>
  <div id="postList">
    <Post
      v-for="post in posts"
      :userhandle="post.userhandle"
      :caption="post.caption"
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
