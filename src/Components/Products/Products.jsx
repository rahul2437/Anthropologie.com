import React from "react";
import { Pagination } from "./Pagination";
import { ProductFilters } from "./ProductFilters";
import ProductListing from "./ProductListing";

export const Products = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 2fr",
        margin: "2rem",
        gap: "10px",
      }}
    >
      <ProductFilters />
      <ProductListing />
      <Pagination />
    </div>
  );
};
