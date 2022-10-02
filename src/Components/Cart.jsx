import {
  Box,
  Button,
  Container,
  Table,
  Td,
  Text,
  Th,
  Tr,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../Context/App/AppContext";
import { AlertChecout } from "./AlertChecout";

export const Cart = () => {
  const { cart, removeFromCart, TotalInCart } = useContext(AppContext);

  console.log(TotalInCart());

  const handleCheckout = () => {};

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        margin: "0 1rem",
      }}
    >
      <Box>
        <Text>Cart Total: ${TotalInCart()}</Text>
        <AlertChecout />
      </Box>
      <Table>
        <Tr>
          <Th>Image</Th>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>Price</Th>
        </Tr>
        {cart.map((item) => (
          <Tr style={{}}>
            <Td>
              <img width={"150px"} src={item.images[0]} alt="" />
            </Td>
            <Td>{item.id}</Td>
            <Td>{item.title}</Td>
            <Td>${item.price}</Td>
            <Td>
              <Button onClick={() => removeFromCart(item.id)}>Delete</Button>
            </Td>
          </Tr>
        ))}
      </Table>
    </div>
  );
};
