import { Link } from "react-router-dom"
import styles from "./ProfileList.module.css"
import MediaComponent from "./MediaComponent"


const ProfileList = ({ profiles }) => {

  return <div id={styles.profileList}>
    {profiles.map(profile =>
      <Link to={"/user/" + profile.handle}
        className={styles.profileListItem}
        key={profile.handle}
      >
        <MediaComponent
          className={styles.profileImage}
          src={profile.profileImageSource}
          alt={profile.handle}
          width="91"
          height="91"
        />
        <p className={styles.username}>{profile.username}</p>
      </Link>
    )}
  </div >
}

export default ProfileList