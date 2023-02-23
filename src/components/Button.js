import React, { useState } from 'react';
import Data from "./Data";
import { Button, Input, Space } from 'antd';
const Buttons = ({ filterItem, menuItems }) => {
  const [size, setSize] = useState('large');
  const [placement, SetPlacement] = useState('topLeft');
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  const filterStyle = {
    display: "contents",
  };
  return (

    <Space style={filterStyle}>
      <div className="filtr conrainer" >
        <nav className="fdfghri">
          {/* {menuItems.map((Val, ID, title) => {
            return (
              <Radio.Group value={placement} onChange={placementChange}>
                <Radio.Button
                  menu={{
                    title,
                  }}
                  value={Val.ID}
                  key={ID}
                  onClick={() => filterItem(Val)}
                >{Val.title}</Radio.Button>
                
              </Radio.Group>
            );
          })} */}
        </nav>
        {/* <div className="conrainer filter">
          <div className="bvisdt">
            <Input placeholder="Basic usage" />
          </div>
        </div> */}
        
      </div>
    </Space>
  );
};

export default Buttons;