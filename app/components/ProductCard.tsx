import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <>
      <div className={styles.card}>
        {/* in the line nextjs uses PostCSS to generate unique classnames to prevent clashes (is add CSS scope) */}
        <AddToCart />
      </div>
      <div className='p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500'>
        {/* styled with tailwind */}
        <AddToCart />
      </div>
    </>
  );
};

export default ProductCard;
