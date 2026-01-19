import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Logo from "../logo/Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/img/blogr_logo.png" alt="logo" width={40} height={40} />
          <Logo />
        </div>
        <p className={styles.desc}>
          Blogr is a free and open source application backed by a large community of helpful
          developers. It supports features such as code syntax highlighting, automatic code
          formatting, and a wide range of plugins and themes.
        </p>
        <div className={styles.icons}>
          <Image src="/img/facebook.png" alt="facebook" width={18} height={18} />
          <Image src="/img/instagram.png" alt="instagram" width={18} height={18} />
          <Image src="/img/tiktok.png" alt="tiktok" width={18} height={18} />
          <Image src="/img/youtube.png" alt="youtube" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/write">Write</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/about">Fashion</Link>
          <Link href="/contact">Coding</Link>
          <Link href="/write">Travel</Link>
          <Link href="/contact">Sports</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
