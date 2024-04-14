<script setup>
import LogoHeader from "@/components/LogoHeader.vue";
import ProfileListVue from "../components/ProfileList.vue";
import PostListVue from "../components/PostList.vue";
import InfoIcon from "@/components/icons/InfoIcon.vue";
</script>

<template>
  <LogoHeader />
  <ProfileListVue :profiles="profileList" />
  <PostListVue :posts="postList" />
  <footer>
    <hr />
    <RouterLink :to="{ name: 'About' }"> <InfoIcon /> Info </RouterLink>
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
