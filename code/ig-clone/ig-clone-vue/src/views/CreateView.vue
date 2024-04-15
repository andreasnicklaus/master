<script setup>
import NotInstagramLogo from "@/components/NotInstagramLogo.vue";
import XIcon from "@/components/icons/XIcon.vue";
import Post from "@/components/Post.vue";
import ImageComponent from "@/components/ImageComponent.vue";
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

  <form id="newPostForm" action="" method="post">
    <input
      type="url"
      name="mediaUrl"
      id="mediaUrl"
      placeholder="Insert your media URL here..."
      v-model="mediaUrl"
    />
    <p>or</p>
    <select name="preloaded-image" id="preloaded-image" v-model="mediaChoice">
      <option value="">Choose one of our media files here...</option>
      <option v-for="media in preloadedMedia" :key="media" :value="media">
        <span>
          {{ media }}
        </span>
      </option>
    </select>
    <textarea
      name="caption"
      id="caption"
      cols="30"
      rows="3"
      placeholder="Type your caption here"
      v-model="caption"
    ></textarea>
    <button type="submit" :disabled="!(caption && mediaSource)">
      Post it!
    </button>
  </form>

  <hr />

  <Post
    :userhandle="userhandle"
    :caption="caption"
    :likeCount="0"
    :mediaSource="mediaSource"
    :mediaType="mediaType"
    :hideActionIcons="true"
  />
</template>
<script>
export default {
  name: "CreateView",
  data() {
    return {
      preloadedMedia: [
        "canyon.mp4",
        "easter-bunnies.mp4",
        "reading.mp4",
        "skaters.mp4",
        "abstract-circles.jpg",
        "joseph-joker.jpg",
        "asian-house.jpg",
        "lars-local.jpg",
        "backpack.jpg",
        "moon.jpg",
        "beach.mp4",
        "beach.jpg",
        "mountains.jpg",
        "bernd-bart.jpg",
        "peter-poster.jpg",
        "busy-street.jpg",
        "rosa-rot.jpg",
        "couple-kitchen.jpg",
        "snow-mountains.jpg",
        "donna-drama.jpg",
        "steffi-sanft.jpg",
        "dramatic-portrait.jpg",
        "steffi-sauer.jpg",
        "elsa-erdbeere.jpg",
        "surfer.jpg",
        "field-wheat.jpg",
        "tina-traveller.jpg",
        "filippa-feurig.jpg",
        "tokio-trees.jpg",
        "flower-art.jpg",
        "wave.jpg",
        "gabriela-gut.jpg",
        "wild-sea.jpg",
        "garden-art.jpg",
        "your-profile.jpg",
      ],
      userhandle: "@you",
      caption: "",
      mediaUrl: "",
      mediaChoice: "",
    };
  },
  computed: {
    mediaSource() {
      if (this.mediaUrl) return this.mediaUrl;
      return this.mediaChoice;
    },
    mediaType() {
      if (this.mediaSource.endsWith(".mp4")) return "VIDEO";
      return "IMAGE";
    },
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

#newPostForm {
  display: flex;
  flex-direction: column;
  margin: 8px 16px;
}

#newPostForm p {
  font-size: 14px;
  color: #adadad;
  margin: 4px;
}

#newPostForm *:not(p) {
  margin-bottom: 16px;
  border-radius: 12px;
  border: none;
  box-shadow: 4px 4px 10px #00000033;
}

#newPostForm input,
select,
textarea {
  resize: none;
  padding: 8px 16px;
  color: #6d6d6d;
}

#newPostForm textarea::placeholder,
input::placeholder {
  color: #6d6d6d;
}

#newPostForm button {
  padding: 16px;
  background-image: linear-gradient(to right, #bb5ada, #ff3040);
  color: white;
  font-size: 32px;
  font-weight: 700;
}

#newPostForm button:not(:disabled):hover {
  cursor: pointer;
  box-shadow: none;
}

#newPostForm button:disabled {
  background-color: #adadad;
  background-image: none;
  box-shadow: none;
}

hr {
  width: 70%;
  border-color: #adadad44;
  margin-bottom: 32px;
}
</style>
