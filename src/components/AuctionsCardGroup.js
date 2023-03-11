import React, { useState } from "react";
import Data from "./Data";
import Card from "./OUC-card";
import { Divider, Skeleton } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
const App = () => {
  const [item, setItem] = useState(Data);
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(Data)
      .then((res) => res.json())
      .then((body) => {
        setData([...Data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  
  return (
    <>
      <InfiniteScroll
        dataLength={Data.length}
        next={loadMoreData}
        hasMore={Data.length < 5}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>Daha çox elan görmək ücün Paylaş</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <div className="products">
          <Divider orientation="left" orientationMargin="50">
            Auctions
          </Divider>
          <Card item={item} onChange={onChange} />
        </div>
      </InfiniteScroll>

    </>
  );
};

export default App;