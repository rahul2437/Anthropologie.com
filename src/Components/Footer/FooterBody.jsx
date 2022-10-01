import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const help = {
  data: [
    "Track Your Order",
    "Start A Return Or Exchange",
    "Returns & Exchanges",
    "Shipping",
    "Customer Service",
    "Current Promotions",
    "Product Recalls",
  ],
};
const about = {
  data: [
    "Our Story",
    "Events",
    "A Greater Good",
    "Diversity & Inclusion",
    "Stories",
  ],
};
const services = {
  data: [
    "AnthroPerks",
    "Gift Cards",
    "AnthroLiving Designer & Trade Progeam",
    "Furniture: Guides & Services",
    "Store Pickup & Collection Points",
    "Klarna",
  ],
};
const contact = {
  data: [
    "Contact Us",
    "Stay Connected",
    "Careers",
    "Styling Services",
    "Request A Catalog",
  ],
};

export const FooterBody = () => {
  return (
    <div
      style={{
        padding: "0 3rem",
      }}
    >
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Help</Th>
              <Th>About Us</Th>
              <Th>Services</Th>
              <Th>Connect</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Td>
              {help.data.map((ele) => (
                <Tr>{ele}</Tr>
              ))}
            </Td>
            <Td>
              {about.data.map((ele) => (
                <Tr>{ele}</Tr>
              ))}
            </Td>
            <Td>
              {services.data.map((ele) => (
                <Tr>{ele}</Tr>
              ))}
            </Td>
            <Td>
              {contact.data.map((ele) => (
                <Tr>{ele}</Tr>
              ))}
            </Td>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};
