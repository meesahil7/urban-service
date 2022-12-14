import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Cart from "./Cart";
import Home from "./Home";
import Product from "./Product";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
