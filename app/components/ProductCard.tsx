import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      {/* in the line nextjs uses PostCSS to generate unique classnames to prevent clashes (is add CSS scope) */}
      <AddToCart />
    </div>
  );
};

export default ProductCard;
