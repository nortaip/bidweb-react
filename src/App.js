import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from './pages/main';
import ProductDetails from '../src/pages/Products';
import Auction from '../src/pages/Auction';
import Sell from "./pages/Sell";
import Salon from "./pages/Salon";
import Salons from "./pages/Salons";
import Profile from "./pages/Profile";
import SpareParts from "./pages/SpareParts";
import Register from "./pages/Register";
import EhtiyathissələriDetail from "./pages/Ehtiyat";
import Login from "./pages/Login";
import Postdata from "./pages/postdata";
// import Index from "./pages/Index";
import SkeletonM from "./components/Skeletons/skaletonProduct";

class App extends Component {
  render() {
    return (
      <Routes>
        {/* <Route path="/" element={<Index />} /> */}
        <Route path="/SkeletonM" element={<SkeletonM />} />
        <Route path="/Elanlar" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route target="_blank" path="/Sell" element={<Sell />} />
        <Route target="_blank" path="/Profile" element={<Profile />} />
        <Route target="_blank" path="/SpareParts" element={<SpareParts />} />
        <Route target="_blank" path="/Ehtiyat-hissələri/:Id" element={<EhtiyathissələriDetail />} />
        <Route
          target="_blank" path="/products/:productId" element={<ProductDetails />}
        />

        <Route target="_blank" path="/Salons" element={<Salons />} />
        <Route target="_blank" path="/Salon/:productId" element={<Salon />} />
        <Route target="_blank" path="/auction-live/:productId" element={<Auction />} />
        <Route target="_blank" path="/postdata" element={<Postdata />} />
      </Routes>
    );
  }
}

export default App;