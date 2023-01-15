import React from "react";
import Data from "./Data";
import Button from '@mui/material/Button';
const Buttons = ({ filterItem, setItem, menuItems }) => {

  return (
    <>
      <div className="filtr">
        <nav className="fdfghri">
          <ul className="nav">
            {menuItems.map((Val, id, title) => {
              return (
                <li className="nav-item">
                  <a className="nav-link" onClick={() => filterItem(Val)}
                    key={id}>{Val}</a>
                </li>
              );
            })}
          </ul>
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
            <label className="bvye9eh Bold">
              İli
              <input type="text" name="name" className="input" placeholder="test" />
            </label>
            <label className="bvye9eh Bold">
              Salon
              <input type="text" name="name" className="input" placeholder="test" />
            </label>
            <Button  className="all"onClick={() => setItem(Data)}>Sıfırla</Button>
            <Button className="sehdfsa">Search</Button>
          </div>

        </div>

      </div>
    </>
  );
};

export default Buttons;