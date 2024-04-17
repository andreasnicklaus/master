"use client"

import { useEffect, useState } from "react"
import styles from "./Post.module.css"
import ProfileService from "@/services/ProfileService"
import MediaComponent from "./MediaComponent"
import HeartIcon from "./icons/HeartIcon"
import CommentIcon from "./icons/CommentIcon"
import SendIcon from "./icons/SendIcon"
import BookmarkIcon from "./icons/BookmarkIcon"
import Link from "next/link"

const Post = ({ userhandle, caption, mediaSource, likeCount, createdAt = "", hideActionIcons = false }) => {

  const [user, setUser] = useState(null)

  useEffect(() => {
    ProfileService.getByHandle(userhandle).then(u => setUser(u))
  })

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
    {user && <Link href={`/user/${userhandle}`} className={styles.postUserInfo} >
      <MediaComponent className={styles.profileImage} src={user?.profileImageSource} alt=""
        width="44"
        height="44" />
      <span className={styles.username}>{user?.username}</span>
    </Link>}

    <MediaComponent
      src={mediaSource}
      alt={caption}
      width="100%"
    />

    {!hideActionIcons && <div className={styles.actionIconRow} >
      <div className={styles.leftActionIcons}>
        <HeartIcon />
        <CommentIcon />
        <SendIcon />
      </div>
      <BookmarkIcon />
    </div>
    }

    <p className={styles.likeCount}>{likeCount} likes</p>
    <p className={styles.caption}>
      {caption.split(' ').map((word, i) => <span
        key={i}
        style={word.startsWith('#') ? { color: '#0091E2' } : {}}
      >
        {word}{' '}
      </span>
      )}
    </p >
    <p className={styles.creationTime}>{creationTimeToString()}</p>
  </>
}

export default Post