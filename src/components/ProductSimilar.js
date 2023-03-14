import React, { useState } from "react";
import Data from "./Api/Data";
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

            <div className="products">
                <Divider orientation="left" orientationMargin="0">
                    Popular Car For you
                </Divider>
                <Card item={item} />
            </div>
        </>
    );
};

export default App;