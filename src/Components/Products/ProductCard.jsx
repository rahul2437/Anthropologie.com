import React from "react";

export const ProductCard = ({ name, price, images }) => {
  return (
    <div
      style={{
        border: "1px solid gold",
      }}
    >
      <img src={images[0]} alt="" />
      <p>{name}</p>
      <span>Price: ${price}</span>
    </div>
  );
};
