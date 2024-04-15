<script setup>
import HeartIcon from "@/components/icons/HeartIcon.vue";
import SendIcon from "@/components/icons/SendIcon.vue";
import CommentIcon from "@/components/icons/CommentIcon.vue";
import BookmarkIcon from "@/components/icons/BookmarkIcon.vue";
import MediaComponent from "@/components/MediaComponent.vue";
</script>

<template>
  <RouterLink
    v-if="user"
    :to="{ name: 'Profile', params: { handle: userhandle } }"
    class="postUserInfo"
  >
    <MediaComponent
      class="profileImage"
      :src="user?.profileImageSource"
      alt=""
      width="44"
      height="44"
    />
    <span class="username">{{ user?.username }}</span>
  </RouterLink>
  <MediaComponent
    class="postMedia"
    :src="mediaSource"
    :alt="caption"
    width="100%"
  />
  <div class="actionIconRow" v-if="!hideActionIcons">
    <div class="leftActionIcons">
      <HeartIcon />
      <CommentIcon />
      <SendIcon />
    </div>
    <BookmarkIcon />
  </div>
  <p class="likeCount">{{ likeCount }} likes</p>
  <p class="caption">
    <span
      v-for="(word, i) in caption.split(' ')"
      :key="i"
      :style="word.startsWith('#') ? 'color: #0091E2' : ''"
    >
      {{ word }}&hairsp;
    </span>
  </p>
  <p class="creationTime">{{ creationTimeToString }}</p>
</template>

<script>
import ProfileService from "@/services/ProfileService";

export default {
  name: "Post",
  props: {
    userhandle: String,
    caption: String,
    mediaSource: String,
    likeCount: Number,
    createdAt: Date,
    hideActionIcons: Boolean,
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    ProfileService.getByHandle(this.userhandle).then(
      (user) => (this.user = user)
    );
  },
  computed: {
    creationTimeToString() {
      const msSinceCreation =
        new Date().valueOf() - new Date(this.createdAt).valueOf();

      const msPerMinute = 1000 * 60;
      const msPerHour = msPerMinute * 60;
      const msPerDay = msPerHour * 24;
      const msPerWeek = msPerDay * 7;
      const msPerMonth = msPerDay * 30;
      const msPerYear = msPerDay * 365;

      const years = Math.floor(msSinceCreation / msPerYear);
      if (years >= 1) return `${years} year${years > 1 ? "s" : ""} ago`;

      const months = Math.floor(msSinceCreation / msPerMonth);
      if (months >= 1) return `${months} month${months > 1 ? "s" : ""} ago`;

      const weeks = Math.floor(msSinceCreation / msPerWeek);
      if (weeks >= 1) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;

      const days = Math.floor(msSinceCreation / msPerDay);
      if (days >= 1) return `${days} day${days > 1 ? "s" : ""} ago`;

      const hours = Math.floor(msSinceCreation / msPerHour);
      if (hours >= 1) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

      const minutes = Math.floor(msSinceCreation / msPerMinute);
      if (minutes >= 1) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

      return "Just now";
    },
  },
};
</script>

<style scoped>
.postUserInfo {
  margin: 8px 16px 16px;
  display: flex;
  align-items: center;
  width: max-content;
  color: inherit;
  text-decoration: inherit;
}

.profileImage {
  border-radius: 50%;
  margin-right: 8px;
}

.username {
  font-weight: 800;
}

.actionIconRow {
  margin: 16px 16px 8px;
  display: flex;
  justify-content: space-between;
}

.leftActionIcons {
  display: flex;
  justify-content: space-between;
  width: 30%;
}

.likeCount {
  margin: 4px 16px;
  font-weight: bold;
}

.caption {
  margin: 0 16px;
}

.creationTime {
  margin: 4px 16px 32px;
  color: #adadad;
  font-size: 14px;
}
</style>
