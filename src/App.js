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
        <Route path="/" element={<Main />}/>
        <Route path="/products/:productId" element={<ProductDetails/>} />
        <Route path="/auction-live/:productId" element={<Auction/>} />
      </Routes>
    );
  }
}

export default App;