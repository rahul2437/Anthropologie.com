import {
  Button,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../Context/App/AppContext";

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);

  const { addToCart } = useContext(AppContext);

  useEffect(() => {
    console.log("usedEeffet");
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.dir(err));
  }, []);

  return data ? (
    <div
      style={{
        margin: "1rem",
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <div>
          <Grid gap={"2rem"}>
            {data?.images.map((image, i) => (
              <GridItem onClick={() => setImgIdx(i)} key={i} w={"8rem"}>
                <Image src={image} />
              </GridItem>
            ))}
          </Grid>
        </div>
        <Image src={data.images[imgIdx]} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Heading>{data.title}</Heading>
        <Text>Price: ${data.price}</Text>
        <Text fontSize={"sm"}>
          {" "}
          <Text fontWeight={"bold"}>Description:</Text> {data.description}
        </Text>
        <Divider />
        <Button onClick={() => addToCart(data)} colorScheme={"blue"} my={3}>
          ADD TO CART
        </Button>
      </div>
    </div>
  ) : (
    <h1>"No product selected"</h1>
  );
};

export default SingleProduct;
