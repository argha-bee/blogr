
import FeaturedPost from "./FeaturedPost";

const FEATURED_DATA = [
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
];

const Featured = () => {
  return (
    <div className="featured-wrapper">
      <FeaturedPost posts={FEATURED_DATA} />
    </div>
  );
};

export default Featured;
