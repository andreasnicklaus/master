<template>
  <LogoHeader />
  <ProfileList :profiles="profileList" />
  <PostList :posts="postList" />
  <footer>
    <hr />
    <NuxtLink :to="{ name: 'about' }"> <IconsInfoIcon /> Info </NuxtLink>
  </footer>
</template>

<script>
import ProfileService from "@/services/ProfileService";
import PostService from "@/services/PostService";

export default {
  name: "FeedView",
  data() {
    return {
      profileList: [],
      postList: [],
    };
  },
  mounted() {
    ProfileService.getAll().then((profiles) => (this.profileList = profiles));
    PostService.getAll().then((posts) => (this.postList = posts));
  },
};
</script>

<style scoped>
footer {
  margin: 16px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

hr {
  width: 70%;
  border-color: #97979788;
}

a {
  display: flex;
  align-items: center;
  width: max-content;
}

a img {
  margin-right: 8px;
}
</style>
