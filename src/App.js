import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/products/:ValId">
          <ProductDetail />
        </Route>
      </Routes>
    </div>
  );
}

export default App;