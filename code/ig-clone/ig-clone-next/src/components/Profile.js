import MediaComponent from "./MediaComponent"
import styles from "./Profile.module.css"

const Profile = ({ username, handle, profileImageSource, caption, createdAt, images }) => {

  function creationTimeToString() {
    const msSinceCreation =
      new Date().valueOf() - new Date(createdAt).valueOf();

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
  }

  return <>
    <div id={styles.profileHeader}>
      <MediaComponent
        id={styles.profileImage}
        src={profileImageSource}
        alt=""
        width="102"
        height="102"
      />
      <div id={styles.profileInfo}>
        <p id={styles.username}>{username}</p>
        <p>{handle}</p>
      </div>
    </div>
    <p id={styles.caption}>
      {caption.split(' ').map((word, i) => <span
        key={i}
        style={word.startsWith('#') ? { color: '#0091E2' } : {}}
      >
        {word}{' '}
      </span>)}
    </p >
    <p id={styles.creationTime}>created {creationTimeToString()}</p>

    <div id={styles.images}>
      {images.map(image => <MediaComponent
        key={image}
        src={image}
        alt=""
        width="100%"
      />)}
    </div>
  </>
}

export default Profile