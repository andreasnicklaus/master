import { useEffect, useRef } from "react";
import styles from "./MediaComponent.module.css"
import Image from "next/image";

const MediaComponent = ({ src, alt, width, height, className, id }) => {
  let mediaSource = ""

  try {
    mediaSource = src.startsWith('http') ? src : require(`@/assets/stock-footage/${src}`).default
  } catch (error) {
    mediaSource = ""
  }

  if (mediaSource && mediaSource.src && mediaSource.src.endsWith('jpg')) return (
    <div style={{ position: "relative", aspectRatio: 1, width: width == "100%" ? width : `${width}px`, overflow: "hidden" }} id={id} className={[className, styles.postMedia].join(" ")}>
      <Image sizes="100%" fill src={mediaSource} alt={alt} />
    </div>
  )
  else if (mediaSource && mediaSource.endsWith('mp4')) return (
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
  )
  else return (
    <div className={styles.mediaError}>
      <p>Nothing to see yet...<br />Choose an image to continue!</p>
    </div>)
}

export default MediaComponent