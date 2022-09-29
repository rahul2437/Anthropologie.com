import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const bigCards = [
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/7jXvmMVDvBGbZ5ax59qC5r/af2ec2a1774f120eee1d0fe5c6f4412a/LS_M1a_jackets.jpg?w=856&q=80&fm=webp",
    title: "shop new clothing & accessories",
    path: "/dresses",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/3oktWnvoX15F1kZ0WG8SYD/ef2ef25b1b7bc38587dd0f374c71907c/LS_M1b_Shoes.jpg?w=856&q=80&fm=webp",
    title: "shop shoes",
    path: "/dresses",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/5Yr2tYsYs7WS7y2S9FzZu4/976815d22202c70be9017483809197f4/LS_M1c_skirts.jpg?w=856&q=80&fm=webp",
    title: "shop skirts",
    path: "/dresses",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/5wF5faH6ao1X9vqla1KqJK/99ce45550031f6c44ebb4c692b4a69e5/LS_M2a_dresses.jpg?w=856&q=80&fm=webp",
    title: "shop dresses",
    path: "/dresses",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/4ViZ4IpRi0cErovgLJcSF8/e438f6000d881848b06f46dfa0b5a231/LS_M2b_New_Apparel___Accessories.jpg?w=856&q=80&fm=webp",
    title: "shop legwear",
    path: "/dresses",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/jsCESTloNoXHssi8X1zFX/23b1b67b7821eb482d04231e2cd4832a/LS_M2c_new_apparel___accessories.jpg?w=856&q=80&fm=webp",
    title: "shop new clothing & accessories",
    path: "/dresses",
  },
];

const smallCards = [
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/4NK6QXYqXQVTDhpZ9UMWNK/d911d177da539390c2d1b6daa495ac8e/RR_Jewelry.jpg?w=856&q=80&fm=webp",
    title: "shop jewelry",
    path: "/dresses",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/6HzwDJ0UOm79B8yDxaLdZl/284875498314791ff31a37b44d8dfc84/RR_Tops.jpg?w=856&q=80&fm=webp",
    title: "shop tops",
    path: "/dresses",
  },
  {
    image:
      "https://images.ctfassets.net/5de70he6op10/2efDE4cBwaR3ZQyPzztR7J/597dd3c7dd19dca2852c0a43198f5d6d/RR_Candles.jpg?w=856&q=80&fm=webp",
    title: "shop candles",
    path: "/dresses",
  },
];
export const Home = () => {
  return (
    // <Container>
    <Box px={"3rem"}>
      <Grid
        gridTemplateColumns={{
          base: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
          md: "repeat(2,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap={4}
      >
        {bigCards.map((card) => (
          <Link to={card.path}>
            <Text
              fontSize={"2xl"}
              textDecoration={"underline"}
              left={2}
              position={"relative"}
              top={"90%"}
            >
              {card.title}
            </Text>
            <Image src={card.image} />
          </Link>
        ))}
      </Grid>
      <Box>
        <Image
          src="https://images.ctfassets.net/5de70he6op10/gvtQ7vdLL1NIzHnP61goT/cf11fdce21cdd03939556f8b620d1fc0/LS_M3_Home.jpg?w=2641&q=80&fm=webp"
          my={5}
        />
        <Center gap={3} position={"relative"} top={"-5rem"}>
          <Button>explore the edit</Button>
          <Button>take the full house tour</Button>
        </Center>
      </Box>
      <Grid
        gridTemplateColumns={{
          base: "repeat(3,1fr)",
          lg: "repeat(3,1fr)",
          md: "repeat(2,1fr)",
          sm: "repeat(1,1fr)",
        }}
        gap={4}
        mt={"-5rem"}
      >
        {smallCards.map((card) => (
          <Link to={card.path}>
            <Text
              fontSize={"2xl"}
              textDecoration={"underline"}
              left={2}
              position={"relative"}
              top={"90%"}
            >
              {card.title}
            </Text>
            <Image src={card.image} />
          </Link>
        ))}
      </Grid>
    </Box>
    // </Container>
  );
};
