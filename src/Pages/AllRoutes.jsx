import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Components/Cart";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { Products } from "../Components/Products/Products";
import SingleProduct from "../Components/Products/SingleProduct";
import { Signup } from "../Components/Signup";
import { fashionNavItems, homeNavItems } from "./Navbar";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      {fashionNavItems.map((item) => (
        <Route path={item.path} element={<Products />} />
      ))}
      {fashionNavItems.map((item) => (
        <Route path={item.path + "/:id"} element={<SingleProduct />} />
      ))}
      {homeNavItems.map((item) => (
        <Route path={item.path} element={<Products />} />
      ))}
      {homeNavItems.map((item) => (
        <Route path={item.path + "/:id"} element={<SingleProduct />} />
      ))}
    </Routes>
  );
};
