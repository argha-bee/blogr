import React from 'react'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'
import Image from 'next/image'
import Card from '../card/Card'


const getData = async (page, cat) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store",
    }
  );

  if(!res.ok){
    throw new Error("Failed fetching card data");
  }

  return res.json();
}

const CardList = async ({ page, cat }) => {
  // const { posts, count } = await getData(page, cat);
  const posts = [
  {
    id: 1,
    title: "Exploring the Mountains",
    desc: "A journey through the most breathtaking mountain ranges. Exploring techniques and styles in modern photography. Exploring techniques and styles in modern photography. Exploring techniques and styles in modern photography. Exploring techniques and styles in modern photography.",
    img: "/img/coding.png",
  },
  {
    id: 2,
    title: "City Lights at Night",
    desc: "Capturing the vibrant life of cities after dark. Exploring techniques and styles in modern photography. Exploring techniques and styles in modern photography. Exploring techniques and styles in modern photography.",
    img: "/img/travel.png",
  },
  {
    id: 3,
    title: "The Art of Photography",
    desc: "Exploring techniques and styles in modern photography. Exploring techniques and styles in modern photography. Exploring techniques and styles in modern photography.",
    img: "/img/fashion.png",
  },
  {
    id: 4,
    title: "Bugichigi",
    desc: "Exploring techniques and styles in modern photography. Exploring techniques and styles in modern photography. Exploring techniques and styles in modern photography.",
    img: "/img/fashion.png",
  },
];
  const count = 4;
  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Recent Posts</h1>
        <div className={styles.posts}>
          {posts?.map((item) => (
            <Card item={item} key={item._id} />
          ))}
        </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  )
}

export default CardList

