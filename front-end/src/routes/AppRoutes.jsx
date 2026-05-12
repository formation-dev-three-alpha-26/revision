import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import ProductDetails from "../components/ProductDetails";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import ProductsList from "../components/ProductsList";

const AppRoutes = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="app-layout">
      <Navbar onCartClick={() => setCartOpen(true)} />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/collections" element={<ProductsList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default AppRoutes;
