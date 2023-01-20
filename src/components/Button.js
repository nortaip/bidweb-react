import React, { useState } from 'react';
import Data from "./Data";
import { Button, Radio, Space } from 'antd';
const Buttons = ({ filterItem, setItem, menuItems }) => {
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
                  // key={ID}
                  onClick={() => filterItem(Val)}
                >{Val.title}</Radio.Button>
                
              </Radio.Group>
            );
          })} */}
        </nav>
        <div className="conrainer filter">
          <div className="bvisdt">
            <label className="bvye9eh Bold ">
              Marka
              <input type="text" name="name" className="input" placeholder="test" />
            </label>
            <label className="bvye9eh Bold">
              Model
              <input type="text" name="name" className="input" placeholder="test" />
            </label>
            <label className="bvye9eh Bold">
              Qiymət
              <input type="text" name="name" className="input" placeholder="test" />
            </label>
            <label className="bvye9eh Bold">
              Şəhər
              <input type="text" name="name" className="input" placeholder="test" />
            </label>
          </div>

          <div className="bvisdt">
            {/* <Button variant="light" className="all" onClick={() => setItem(Data)}>Sıfırla</Button> */}
            <Button type="primary" size={size}>
              Search
            </Button>
          </div>
        </div>
      </div>
    </Space>
  );
};

export default Buttons;