import { Icon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  HStack,
  Input,
  InputGroup,
  InputRightAddon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBag } from "react-icons/bs";
import { Login } from "../Components/Login";

const fashionNavItems = [
  {
    title: "New!",
    path: "/new",
  },
  {
    title: "Dresses",
    path: "/dresses",
  },
  {
    title: "Clothing",
    path: "/clothing",
  },
  {
    title: "Shoes",
    path: "/shoes",
  },
  {
    title: "Accessories",
    path: "/accessories",
  },
  {
    title: "Gifts",
    path: "/gifts",
  },
  {
    title: "Home & Furniture",
    path: "/homefurniture",
  },
  {
    title: "Beauty & Wellness",
    path: "/beautywellness",
  },
  {
    title: "Garden & Outdoor",
    path: "/gardenoutdoor",
  },
  {
    title: "BHLDN Weddings",
    path: "/bhldnwedding",
  },
  {
    title: "Sale",
    path: "/sale",
  },
];

const homeNavItems = [
  {
    title: "Holiday Décor & More",
    path: "/holidaydecor",
  },
  {
    title: "Furniture",
    path: "/furniture",
  },
  {
    title: "Décor",
    path: "/decor",
  },
  {
    title: "Kitchen & Dining",
    path: "/kitchendining",
  },
  {
    title: "Candles",
    path: "/candles",
  },
  {
    title: "Bedding",
    path: "/bedding",
  },
  {
    title: "Bath",
    path: "/bath",
  },
  {
    title: "Stationery",
    path: "/stationery",
  },
  {
    title: "Kids",
    path: "/kids",
  },
  {
    title: "Outdoor",
    path: "/outdoor",
  },
  {
    title: "Gifts",
    path: "/gifts",
  },
  {
    title: "Sale",
    path: "/homesale",
  },
];

const FashionMapNavbarItems = () => {
  return fashionNavItems.map((item) => (
    <Link to={item.path}>{item.title}</Link>
  ));
};
const DecorMapNavbarItems = () => {
  return homeNavItems.map((item) => <Link to={item.path}>{item.title}</Link>);
};

export const Navbar = () => {
  const [navState, setNavState] = useState("fashion");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box margin="1rem">
      <HStack my={2} justify={"flex-end"}>
        <Button onClick={onOpen}>Sign In / Sign Up</Button>
      </HStack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Login />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <HStack justify={"space-between"}>
        <Tabs>
          <TabList>
            <Link to={"/"}>
              <Tab onClick={() => setNavState("fashion")}>ANTHROPOLOGIE</Tab>
            </Link>
            <Link to={"/"}>
              <Tab onClick={() => setNavState("homedecor")}>
                anthro LIVING home
              </Tab>
            </Link>
          </TabList>
        </Tabs>
        <HStack>
          <InputGroup>
            <Input width={80} size="md" placeholder="Search Anthropologie" />
            <InputRightAddon children={<Search2Icon />} />
          </InputGroup>
          <Icon boxSize={6} as={BsBag} />
        </HStack>
      </HStack>
      <Divider />
      <HStack h="50px" gap={2} alignItems="center" justifyContent="center">
        {navState === "fashion" ? (
          <FashionMapNavbarItems />
        ) : (
          <DecorMapNavbarItems />
        )}
      </HStack>
      <Divider />
    </Box>
  );
};
