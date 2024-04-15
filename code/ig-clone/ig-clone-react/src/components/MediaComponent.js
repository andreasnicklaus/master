import styles from "./MediaComponent.module.css"

const MediaComponent = ({ src, alt, width, height, className, id }) => {
  let mediaSource = ""

  try {
    mediaSource = src.startsWith('http') ? src : require(`src/assets/stock-footage/${src}`)
  } catch (error) {
    mediaSource = ""
  }

  if (mediaSource.endsWith('jpg')) return <img src={mediaSource} alt={alt} width={width} height={height} className={[className, styles.postMedia].join(" ")} id={id} />
  else if (mediaSource.endsWith('mp4')) return (
    <video
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