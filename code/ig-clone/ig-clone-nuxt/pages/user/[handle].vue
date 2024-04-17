<script setup>
const route = useRoute();
const handle = route.params.handle;
</script>

<template>
  <header>
    <NuxtLink :to="{ name: 'index' }">
      <NotInstagramLogo />
    </NuxtLink>
    <NuxtLink :to="{ name: 'index' }">
      <IconsXIcon />
    </NuxtLink>
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
