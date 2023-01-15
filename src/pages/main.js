import '../App.css';
import React, { useState } from "react";
import Navbar from '../components/Navbar.js';
import Banner from '../components/Banner.js';
import AuctionsCardGroup from '../components/AuctionsCardGroup.js';
import Footer from '../components/footer';
import Buttons from "../components/Button";
import Data from "../components/Data";
import Card from "../components/OUC-card";

function App() {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  return (
    <>
      <Navbar />
      <Banner />
      <Buttons
        filterItem={filterItem}
        setItem={setItem}
        menuItems={menuItems}
      />
      <section>
        <div className='container'>
          <div className="products">
            <Card item={item} />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
