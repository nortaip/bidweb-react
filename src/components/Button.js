import React ,{ useState } from 'react';
import Data from "./Data";
import { Button, Dropdown, Space } from 'antd';

const Buttons = ({ filterItem, setItem, menuItems }) => {
  const [size, setSize] = useState('large');
  return (

    <Space>
      <div className="filtr conrainer ">
        <nav className="fdfghri">
            {menuItems.map((Val, ID, title) => {
              return (
                <Dropdown.Button
                  menu={{
                    title,
                  }}
                  key={ID}
                  onClick={() => filterItem(Val)}
                >
                  Submit
                </Dropdown.Button>
              );
            })}
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
            <Button variant="light" className="all" onClick={() => setItem(Data)}>Sıfırla</Button>
            <Button type="primary" size={size}>
              Download
            </Button>
          </div>

        </div>

      </div>
    </Space>
  );
};

export default Buttons;