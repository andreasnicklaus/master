<template>
  <div id="profileHeader">
    <MediaComponent
      id="profileImage"
      :src="profileImageSource"
      alt=""
      width="102"
      height="102"
    />
    <div id="profileInfo">
      <p id="username">{{ username }}</p>
      <p>{{ handle }}</p>
    </div>
  </div>
  <p id="caption">
    <span
      v-for="(word, i) in caption.split(' ')"
      :key="i"
      :style="word.startsWith('#') ? 'color: #0091E2' : ''"
    >
      {{ word }}&hairsp;
    </span>
  </p>
  <p id="creationTime">created {{ creationTimeString }}</p>

  <div id="images">
    <MediaComponent
      v-for="image in images"
      :key="image"
      :src="image"
      alt=""
      width="100%"
    />
  </div>
</template>

<script>
export default {
  name: "Profile",
  props: {
    username: String,
    handle: String,
    profileImageSource: String,
    caption: String,
    createdAt: Date,
    images: Array,
  },
  computed: {
    creationTimeString() {
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

      return "just now";
    },
  },
};
</script>

<style>
#profileHeader {
  display: flex;
  align-items: center;
}

#profileImage {
  margin-right: 16px;
  border-radius: 50%;
}

#profileInfo p {
  margin: 0;
}

#username {
  font-weight: 700;
  font-size: 20px;
}

#caption {
  margin-bottom: 0;
}

#creationTime {
  font-size: 14px;
  color: #adadad;
  margin-top: 2px;
  margin-bottom: 24px;
}

#images {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
}

#images img {
  aspect-ratio: 1 / 1;
}
</style>
