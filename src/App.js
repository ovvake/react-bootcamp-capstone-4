import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from './pages/Home';
import { NoPage } from "./pages/NoPage";
import { Product } from "./pages/products";
import {ProductDetail} from "./pages/productDetail";
import {BuscarTest} from "./pages/buscar";
import {SearchDetail} from "./pages/searchDetail";
import {Cart} from "./pages/cart";
import { Checkout } from './pages/checkout';
import { ArticleWrapper } from './pages/test';
import {CartContext} from './components/context';

function App() {

  const [carrito, setCarrito] = useState([]);
  const addToCarrito = (item) => {
  	const newShoppingCart = [...carrito];
    newShoppingCart.push(item);
    setCarrito(newShoppingCart);
  }
  return (
    <>
    <CartContext.Provider value={{
      carrito,
      addToCarrito,
    }}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Product />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="*" element={<NoPage />} />
            <Route path="home" element={<Home />} />
            <Route path="buscar" element={<BuscarTest />} />
            <Route path="searchDetail" element={<SearchDetail />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="test" element={<ArticleWrapper />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
    

      </>
  );
}

export default App;

