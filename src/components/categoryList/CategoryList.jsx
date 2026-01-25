import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  //data fetch simulation
  const fetchCategories = async () => {
    const res = await fetch("https://localhost:3000/categories", {
      cache: "no-store",
    });
    if(!res.ok){
      throw new Error("Failed to fetch categories");
    }
    return res.json();
  }

  const categories = [
    { id: 1, name: "Technology", img: "/img/coding.png" },
    { id: 2, name: "Travel", img: "/img/travel.png" },
    { id: 3, name: "Food", img: "/img/food.png" },
    { id: 4, name: "Fashion", img: "/img/fashion.png" },
    { id: 11, name: "Technology", img: "/img/coding.png" },
    { id: 22, name: "Travel", img: "/img/travel.png" },
    { id: 33, name: "Food", img: "/img/food.png" },
    { id: 44, name: "Fashion", img: "/img/fashion.png" },
  ];

  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/category/${category.name.toLowerCase()}`}
          className={styles.categoryItem}
        >
          <div className={styles.imgContainer}>
            <Image
              src={category.img}
              alt={category.name}
              width={50}
              height={50}
              className={styles.image}
            />
          </div>
          <span className={styles.categoryName}>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
