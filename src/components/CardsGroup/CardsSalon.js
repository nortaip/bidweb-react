import React, { useState } from "react";
import Data from "../Api/Salon";
import Card from "../Cards/CardSalon";
import { Divider, Button, Empty } from 'antd';
import { Link } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
const SalonCardGroup = () => {
    const [item, setItem] = useState(Data);
    const [loading, setLoading] = useState(false);
    const [Data, setData] = useState([]);
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        fetch(Data)
            .then((res) => res.json())
            .then((body) => {
                setData([...Data, ...body.results]);
                setLoading(true);
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
                hasMore={Data.length < 1}
                loader={
                    <Empty
                        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                        imageStyle={{
                            height: 100,
                        }}
                        description={
                            <span>
                                Hazırda elanınız yoxdur
                            </span>
                        }
                    >
                        <Link to={'/sell'}>
                            <Button type="primary">İndi paylaşın</Button>
                        </Link>
                    </Empty>
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

export default SalonCardGroup;