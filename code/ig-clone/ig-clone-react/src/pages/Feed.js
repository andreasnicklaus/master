import { useState } from 'react';

import ProfileList from "src/components/ProfileList"
import LogoHeader from "../components/LogoHeader"
import ProfileService from "src/services/ProfileService"
import PostService from "src/services/PostService"
import PostList from 'src/components/PostList';
import { Link } from 'react-router-dom';
import InfoIcon from 'src/components/icons/InfoIcon';
import styles from "./Feed.module.css"
const Feed = () => {
  let [profiles, setProfiles] = useState([])
  ProfileService.getAll().then(p => setProfiles(p))

  let [posts, setPosts] = useState([])
  PostService.getAll().then(p => setPosts(p))

  return <>
    <LogoHeader />
    <ProfileList profiles={profiles} />
    <PostList posts={posts} />
    <footer>
      <hr />
      <Link to="/about"> <InfoIcon /> Info </Link>
    </footer>
  </>
}

export default Feed