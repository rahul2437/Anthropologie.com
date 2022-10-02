import { Grid, GridItem, Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/App/AppContext";
import { ProductCard } from "./ProductCard";

const ProductListing = () => {
  const { loading, data } = useContext(AppContext);

  return (
    <div
      style={{
        margin: "auto",
      }}
    >
      {loading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}

      {!!data && data.length > 0 ? (
        <Grid
          justifyItems={"center"}
          gap={"10px"}
          templateColumns={"repeat(2,1fr)"}
        >
          {data?.map((product, i) => (
            <ProductCard
              key={i}
              id={product.id}
              name={product.title}
              price={product.price}
              images={product.images}
            />
          ))}
        </Grid>
      ) : (
        <p>API did not provided any product, try again.</p>
      )}
    </div>
  );
};

export default ProductListing;
