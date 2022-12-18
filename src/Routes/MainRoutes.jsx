import { Route, Routes } from "react-router";
import Home from "./Home";
import Product from "./Product";
import Blog from "./Blog";
import Cart from "./Cart";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
