import { useState } from "react";
import styles from "./CreatePost.module.css";
import Post from "./Post";

const preloadedMedia = [
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
];

const CreateForm = ({ userhandle }) => {
  const [caption, setCaption] = useState("");
  const [mediaUrl, setmediaUrl] = useState("");
  const [mediaChoice, setmediaChoice] = useState("");

  function mediaSource() {
    return mediaUrl || mediaChoice;
  }

  return (
    <>
      <form id={styles.newPostForm} action="" method="post">
        <input
          type="url"
          name="mediaUrl"
          id={styles.mediaUrl}
          placeholder="Insert your media URL here..."
          value={mediaUrl}
          onChange={(event) => setmediaUrl(event.target.value)}
        />

        <p>or</p>

        <select
          name="preloaded-image"
          id={styles["preloadedimage"]}
          value={mediaChoice}
          onChange={(event) => setmediaChoice(event.target.value)}
        >
          <option value="">Choose one of our media files here...</option>
          {preloadedMedia.map((media) => (
            <option key={media} value={media}>
              {media}
            </option>
          ))}
        </select>
        <textarea
          name="caption"
          id={styles.caption}
          cols="30"
          rows="3"
          placeholder="Type your caption here"
          value={caption}
          onChange={(event) => setCaption(event.target.value)}
        ></textarea>
        <button type="submit" disabled={!(caption && mediaSource())}>
          Post it!
        </button>
      </form>
      <Post
        userhandle={userhandle}
        caption={caption}
        likeCount={0}
        mediaSource={mediaSource()}
        hideActionIcons={true}
      />
    </>
  );
};

export default CreateForm;
