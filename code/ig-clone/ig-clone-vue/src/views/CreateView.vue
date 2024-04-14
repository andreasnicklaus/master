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
      name="imageUrl"
      id="imageUrl"
      placeholder="Insert your image URL here..."
      v-model="imageUrl"
    />
    <p>or</p>
    <select name="preloaded-image" id="preloaded-image" v-model="imageChoice">
      <option value="">Choose one of our images here...</option>
      <option v-for="image in preloadedImages" :key="image" :value="image">
        <span>
          <ImageComponent :src="image" alt="" width="50" />
          {{ image }}
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
    :user="user"
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
      preloadedImages: [
        "/stock-images/your-profile.jpg",
        "/stock-images/mountains.jpg",
        "/stock-images/beach.jpg",
      ],
      user: {
        username: "Your Profile",
        handle: "@you",
        profileImageSource: "/stock-images/your-profile.jpg",
      },
      caption: "",
      imageUrl: "",
      imageChoice: "",
    };
  },
  computed: {
    mediaSource() {
      if (this.imageUrl) return this.imageUrl;
      return this.imageChoice;
    },
    mediaType() {
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
