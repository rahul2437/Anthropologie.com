import { Button } from "@chakra-ui/react";
import React from "react";

export const ProductFilters = () => {
  return (
    <div>
      <div>
        <Button>Sort by Low to High</Button>
        <Button>Sort by High to Low</Button>
      </div>
      <div>
        <Button>Sort Alphabetically</Button>
      </div>
      <div>
        <Button>Sort By Rating High to Low</Button>
        <Button>Sort By Rating Low to High</Button>
      </div>
    </div>
  );
};
