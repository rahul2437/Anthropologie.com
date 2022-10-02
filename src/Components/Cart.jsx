import { Container, Table, Td, Text, Tr } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../Context/App/AppContext";

export const Cart = () => {
  const { cart } = useContext(AppContext);

  return (
    <div>
      <Table>
        {cart.map((item) => (
          <Tr style={{}}>
            <Td>
              <img width={"150px"} src={item.images[0]} alt="" />
            </Td>
            <Td>{item.id}</Td>
            <Td>{item.title}</Td>
            <Td>{item.price}</Td>
          </Tr>
        ))}
      </Table>
    </div>
  );
};
