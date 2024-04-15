<template>
  <img
    class="postMedia"
    v-if="mediaSource.endsWith('jpg')"
    :src="mediaSource"
    :alt="alt"
    :width="width"
    :height="height"
  />
  <video
    class="postMedia"
    v-else-if="mediaSource.endsWith('mp4')"
    :width="width"
    autoplay="true"
    controls
    controlslist="nodownload,nofullscreen,noremoteplayback"
    disablepictureinpicture
    loop
    muted
  >
    <source :src="mediaSource" type="video/mp4" />
  </video>
  <div v-else class="mediaError">
    <p>Nothing to see yet...<br />Choose an image to continue!</p>
  </div>
</template>

<script>
export default {
  name: "MediaComponent",
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
      default: "",
    },
    width: String,
    height: String,
  },
  computed: {
    mediaSource() {
      if (
        this.src == null ||
        this.src == undefined ||
        this.src.startsWith("http")
      )
        return this.src;
      return new URL(`/src/assets/stock-footage/${this.src}`, import.meta.url)
        .href;
    },
  },
};
</script>

<style>
.mediaError {
  display: grid;
  place-items: center;
  text-align: center;

  background-color: #d9d9d9;
  min-height: 300px;
  width: 100%;
}

.mediaError p {
  font-size: 14px;
}

.postMedia {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
</style>
