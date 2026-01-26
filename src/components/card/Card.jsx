import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";

const Card = ({ key, item }) => {
  return (
    <Link href={`/posts/${item.slug}`} className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} fill alt="" className={styles.image} />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {/* {item.createdAt.substring(0, 10)} -{" "} */}
            Current date here - __
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>

        <h1>{item.title}</h1>
        <div className={styles.desc}>{item?.desc.substring(0, 600)}</div>
        <Link href={`/posts/${item.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </Link>
  );
};

export default Card;
