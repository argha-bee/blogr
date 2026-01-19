"use client";
import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut } from "next-auth/react";

const AuthLinks = () => {
  const status = "authenticated"; 
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.desktopLinks}>
        {status === "unauthenticated" ? (
          <Link href="/login" className={`${styles.link} ${styles.authAction}`}>Login</Link>
        ) : (
          <>
            <Link href="/profile" className={`${styles.link} ${styles.profile}`}>Profile</Link>
            <button className={`${styles.link} ${styles.authAction}`} onClick={() => signOut()}>Log Out</button>
          </>
        )}
      </div>

      <button 
        className={`${styles.burger} ${open ? styles.burgerActive : ""}`} 
        onClick={() => setOpen(!open)}
        aria-label="Toggle Menu"
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </button>

      <div className={`${styles.responsiveMenu} ${open ? styles.menuOpen : ""}`}>
        <Link href="/" className={styles.burgerLink} onClick={() => setOpen(false)}>Home</Link>
        <Link href="/about" className={styles.burgerLink} onClick={() => setOpen(false)}>About</Link>
        <Link href="/contact" className={styles.burgerLink} onClick={() => setOpen(false)}>Contact</Link>
        <hr className={styles.separator} />
        {status === "unauthenticated" ? (
          <Link href="/login" className={styles.burgerLink} onClick={() => setOpen(false)}>Login</Link>
        ) : (
          <>
            <Link href="/profile" className={styles.burgerLink} onClick={() => setOpen(false)}>Profile</Link>
            <button className={styles.burgerLink} onClick={() => signOut()}>Log Out</button>
          </>
        )}
      </div>
    </>
  );
};

export default AuthLinks;
