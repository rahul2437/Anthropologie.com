import { Button, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/App/AppContext";

export const ProductCard = ({ name, price, images, id }) => {
  const { addToCart, checkInCart } = useContext(AppContext);

  return (
    <div
      style={{
        border: "1px solid #2b6cb0",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link to={`/dresses/${id}`}>
        <img
          style={{
            borderRadius: "10px 10px 0 0",
          }}
          src={images[0]}
          alt=""
        />
        <div
          style={{
            padding: "0 1rem",
          }}
        >
          <Text fontWeight={"bold"} fontSize={"md"}>
            {name}
          </Text>
          <span>Price: ${price}</span>
        </div>
      </Link>
      <Button
        onClick={() => {
          addToCart(
            axios.get("https://api.escuelajs.co/api/v1/products/" + id)
          );
        }}
        disabled={() => checkInCart(id)}
        colorScheme={"blue"}
        m={2}
      >
        ADD TO CART
      </Button>
    </div>
  );
};
