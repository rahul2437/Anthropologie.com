import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  const [cart, setCart] = useState([]);

  console.log(data);

  const addToCart = (data) => {
    setCart([...cart, data]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const checkInCart = (id) => {
    return cart.forEach((item) => item.id === id);
  };
  const TotalInCart = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://api.escuelajs.co/api/v1/categories/1/products?offset=${offset}&limit=${10}`,
    })
      .then(({ data }) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.dir(err))
      .finally(() => setLoading(false));
  }, [offset]);

  return (
    <AppContext.Provider
      value={{
        loading,
        data,
        offset,
        limit,
        setOffset,
        setLimit,
        addToCart,
        cart,
        removeFromCart,
        checkInCart,
        TotalInCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
