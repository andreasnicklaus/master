"use client";

import { useEffect, useState } from "react";

import ProfileList from "@/components/ProfileList";
import PostList from "@/components/PostList";
import LogoHeader from "@/components/LogoHeader";
import ProfileService from "@/services/ProfileService";
import PostService from "@/services/PostService";
import InfoIcon from "@/components/icons/InfoIcon";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Feed = () => {
  let [profiles, setProfiles] = useState<any[]>([]);
  let [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    ProfileService.getAll().then((p) => setProfiles(p));
    PostService.getAll().then((p) => setPosts(p));
  });

  return (
    <>
      <LogoHeader />
      <ProfileList profiles={profiles} />
      <PostList posts={posts} />
      <footer className={styles.appFooter}>
        <hr />
        <Link href="/about" className={styles.footerLink}>
          {" "}
          <InfoIcon /> Info{" "}
        </Link>
      </footer>
    </>
  );
};

export default Feed;
