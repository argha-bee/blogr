import React from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const status = "authenticated"; // hardcoded for now
  return (
    <div>
      {status === "authenticated" ? (
        <>
          <Link href="/profile">Profile</Link>
          <span className={styles.link}>Logout</span>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default AuthLinks;
