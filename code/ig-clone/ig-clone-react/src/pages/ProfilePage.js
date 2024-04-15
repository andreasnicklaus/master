import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProfileService from "src/services/ProfileService"
import PostService from "src/services/PostService"
import NotInstagramLogo from 'src/components/NotInstagramLogo';
import Profile from 'src/components/Profile';
import XIcon from 'src/components/icons/XIcon';
import styles from "./ProfilePage.module.css"


const ProfilePage = () => {
  const params = useParams();

  const [username, setUsername] = useState("")
  const [profileImageSource, setProfileImageSource] = useState("")
  const [caption, setCaption] = useState("")
  const [images, setImages] = useState([])

  ProfileService.getByHandle(params.handle).then(user => {
    setUsername(user.username)
    setProfileImageSource(user.profileImageSource)
    setCaption(user.caption)
  })

  PostService.getByUserHandle(params.handle).then(posts => {
    setImages(posts.map(p => p.mediaSource))
  })

  return <>
    <header>
      <Link to="/">
        <NotInstagramLogo />
      </Link>
      <Link to="/">
        <XIcon />
      </Link>
    </header>

    <div id={styles.profileContainer}>
      <Profile
        username={username}
        handle={params.handle}
        profileImageSource={profileImageSource}
        caption={caption}
        createdAt={new Date()}
        images={images}
      />
    </div>
  </>
}

export default ProfilePage