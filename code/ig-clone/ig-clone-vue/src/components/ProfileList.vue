<script setup>
import ImageComponent from "@/components/ImageComponent.vue";
</script>

<template>
  <div id="profileList">
    <RouterLink
      :to="
        profile.handle
          ? { name: 'Profile', params: { handle: profile.handle } }
          : { name: 'Feed' }
      "
      class="profileListItem"
      v-for="profile in [
        {
          username: 'Your Profile',
          handle: '',
          profileImageSource: 'your-profile.jpg',
        },
        ...profiles,
      ]"
      :key="profile.handle"
    >
      <ImageComponent
        class="profileImage"
        :src="profile.profileImageSource"
        :alt="profile.handle"
        width="91"
        height="91"
      />
      <p class="username">{{ profile.username }}</p>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "ProfileList",
  props: {
    profiles: Array,
  },
};
</script>

<style scoped>
#profileList {
  margin: 8px 0;
  padding: 0 16px;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#profileList::-webkit-scrollbar {
  display: none;
}

.profileListItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 16px;
  color: inherit;
  text-decoration: inherit;
}

.profileListItem:last-of-type {
  margin-right: 0;
}

.profileImage {
  border-radius: 50%;
}

.username {
  white-space: nowrap;
}
</style>
