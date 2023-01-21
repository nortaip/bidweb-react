import React, { useState } from "react";
import Data from "./Data";
import Card from "./OUC-card";
import { Divider } from 'antd';

const App = () => {
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
      {/* <Buttons
        filterItem={filterItem}
        setItem={setItem}
        menuItems={menuItems}
      /> */}

      <div className="products">
        <Divider orientation="left" orientationMargin="50">
          Auctions
        </Divider>
        <Card item={item} />
      </div>
    </>
  );
};

export default App;