import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";
import Logo from "../logo/Logo";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/img/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/img/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/img/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/img/youtube.png" alt="youtube" width={24} height={24} />
      </div>
      {/* <div className={styles.logo}>
        <Link href="/">
          <span>blog</span><span>R</span>
        </Link>
      </div> */}
      <Link className={styles.logo} href="/">
        <Logo />
      </Link>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        {/* <Link href="/write" className={styles.link}>Write</Link> */}
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
