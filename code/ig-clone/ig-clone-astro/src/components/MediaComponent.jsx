import { useEffect, useState } from "react";
import styles from "./MediaComponent.module.css";

const mediaFiles = import.meta.glob("/src/assets/stock-footage/*.{jpg,mp4}");
const media = Object.fromEntries(
  Object.entries(mediaFiles).map(([key, value]) => [
    key.split("/")[key.split("/").length - 1],
    value,
  ])
);

const MediaComponent = (props) => {
  const { src, alt, width, height, className, id, ...rest } = props;
  const [mediaSource, setMediaSource] = useState("");

  useEffect(() => {
    if (src?.startsWith("http")) setMediaSource(src);
    else if (src)
      media[src]().then((mediaFile) => {
        if (src.endsWith("jpg")) setMediaSource(mediaFile.default.src);
        else setMediaSource(mediaFile.default);
      });
  });

  if (mediaSource && src?.endsWith("jpg"))
    return (
      <img
        key={src}
        src={mediaSource}
        alt={alt}
        width={width}
        height={height}
        className={[className, styles.postMedia].join(" ")}
        id={id}
        {...rest}
      />
    );
  else if (mediaSource && src.endsWith("mp4"))
    return (
      <video
        key={mediaSource}
        className={[className, styles.postMedia].join(" ")}
        id={id}
        width={width}
        autoPlay={true}
        controls
        controlsList="nodownload,nofullscreen,noremoteplayback"
        disablePictureInPicture
        loop
        muted
      >
        <source src={mediaSource} type="video/mp4" />
      </video>
    );
  // else if (!mediaSource)
  //   return (
  //     <div
  //       {...rest}
  //       className={[className, styles.postMedia].join(" ")}
  //       style={{ width: width + "px" }}
  //     ></div>
  //   );
  else
    return (
      <div className={styles.mediaError}>
        <p>
          Nothing to see yet...
          <br />
          Choose an image to continue!
        </p>
      </div>
    );
};

export default MediaComponent;
