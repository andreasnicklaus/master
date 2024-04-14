<script setup>
import Profile from "@/components/Profile.vue";
import NotInstagramLogo from "@/components/NotInstagramLogo.vue";
import XIcon from "@/components/icons/XIcon.vue";
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'Feed' }">
      <NotInstagramLogo />
    </RouterLink>
    <RouterLink :to="{ name: 'Feed' }">
      <XIcon />
    </RouterLink>
  </header>

  <div id="profileContainer">
    <Profile
      :username="username"
      :handle="$route.params.handle"
      :profileImageSource="profileImageSource"
      :caption="caption"
      :createdAt="new Date()"
      :images="images"
    />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import ProfileService from "@/services/ProfileService";
import PostService from "@/services/PostService";

export default {
  name: "ProfileView",
  data() {
    return {
      username: "",
      handle: useRoute().params.handle,
      profileImageSource: "",
      caption: "",
      images: [],
    };
  },
  mounted() {
    ProfileService.getByHandle(this.handle).then((user) => {
      this.username = user.username;
      this.profileImageSource = user.profileImageSource;
      this.caption = user.caption;
    });
    PostService.getByUserHandle(this.handle).then(
      (posts) => (this.images = posts.map((p) => p.mediaSource))
    );
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 32px 16px;
}

header a {
  color: inherit;
  text-decoration: inherit;
}

#profileContainer {
  margin: 8px 16px;
}
</style>
