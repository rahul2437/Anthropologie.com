import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import Products from "../Components/Products/Products";
import SingleProduct from "../Components/Products/SingleProduct";
import { Signup } from "../Components/Signup";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dresses" element={<Products />} />
      <Route path="/dresses/:id" element={<SingleProduct />} />
    </Routes>
  );
};
