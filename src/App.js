import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from './pages/main';
import ProductDetails from './pages/ProductDetail';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/products/:ValId" element={<ProductDetails/>} ></Route>
      </Routes>
    );
  }
}

export default App;