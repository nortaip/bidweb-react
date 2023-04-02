import React, { useState, useEffect } from 'react';
import Card from "../Cards/OUC-card";
import { Divider, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

const App = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost/tu/api/sell.php')
      .then(response => response.json())
      .then(data => {
        // İlk veri seti burada state'e atanır
        setItems(data);
      });
  }, []);

  const sortItems = (items) => {
    const sortedItems = items.sort((a, b) => {
      if (a.to_up === 1) return -1;
      if (b.to_up === 1) return 1;
      return 0;
    });
    return sortedItems;
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <>
      <div className="products">
        <Divider orientation="left" orientationMargin="50">
          {/* Auctions */}
        </Divider>
        <Card item={sortItems(items)} onChange={onChange} />
      </div>
    </>
  );
};

export default App;
