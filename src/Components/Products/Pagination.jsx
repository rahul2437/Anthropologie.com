import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AppContext } from "../../Context/App/AppContext";

export const Pagination = ({ page }) => {
  const { offset, limit, setOffset } = useContext(AppContext);

  return (
    <div
      style={{
        gridColumn: "1/-1",
      }}
    >
      <Button
        onClick={() => setOffset((prev) => prev - limit)}
        disabled={offset === 0}
      >
        PREV
      </Button>
      <Button disabled>{offset / 10}</Button>
      <Button onClick={() => setOffset((prev) => prev + limit)}>NEXT</Button>
    </div>
  );
};
