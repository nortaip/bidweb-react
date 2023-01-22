import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from './pages/main';
import ProductDetails from '../src/pages/Products';
import Auction from '../src/pages/Auction';

class App extends Component {
  render() {
    return (
      <Routes>
        <Route target="_blank" path="/" element={<Main />} />
        <Route target="_blank" path="/products/:productId" element={<ProductDetails />} />
        <Route target="_blank" path="/auction-live/:productId" element={<Auction />} />
      </Routes>
    );
  }
}

export default App;