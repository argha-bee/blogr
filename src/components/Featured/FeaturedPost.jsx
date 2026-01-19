"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./featured.module.css";

const FeaturedPost = ({ posts }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === posts.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [posts.length]);

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        <motion.div
          key={posts[active].id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className={styles.post}
        >
          {/* IMAGE LEFT */}
          <div className={styles.imgContainer}>
            <Image src={posts[active].img} alt="" fill className={styles.image} priority />
          </div>

          {/* TEXT RIGHT */}
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{posts[active].title}</h1>
            <p className={styles.postDesc}>{posts[active].desc}</p>
            <button className={styles.button}>Explore Story</button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Modern Progress Indicators */}
      <div className={styles.progressContainer}>
        {posts.map((_, i) => (
          <div key={i} className={styles.progressBar}>
            <motion.div 
              className={styles.progressFill}
              initial={{ width: "0%" }}
              animate={{ width: i === active ? "100%" : "0%" }}
              transition={{ duration: i === active ? 5 : 0, ease: "linear" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPost;
