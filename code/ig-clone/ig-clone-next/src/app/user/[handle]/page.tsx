"use client";

import { useEffect, useState } from "react";
import ProfileService from "@/services/ProfileService";
import PostService from "@/services/PostService";
import NotInstagramLogo from "@/components/NotInstagramLogo";
import Profile from "@/components/Profile";
import XIcon from "@/components/icons/XIcon";
import styles from "./ProfilePage.module.css";
import Link from "next/link";

const ProfilePage = ({ params }: { params: { handle: string } }) => {
  params.handle = decodeURIComponent(params.handle);
  const [username, setUsername] = useState("");
  const [profileImageSource, setProfileImageSource] = useState("");
  const [caption, setCaption] = useState("");
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    ProfileService.getByHandle(params.handle).then((user) => {
      setUsername(user!.username);
      setProfileImageSource(user!.profileImageSource);
      setCaption(user!.caption);
    });

    PostService.getByUserHandle(params.handle).then((posts) => {
      setImages(posts.map((p) => p.mediaSource));
    });
  });

  return (
    <>
      <header className={styles.profileHeader}>
        <Link href="/">
          <NotInstagramLogo />
        </Link>
        <Link href="/">
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
  );
};

export default ProfilePage;
