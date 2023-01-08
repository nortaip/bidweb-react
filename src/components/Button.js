import React from "react";
import Data from "./Data";

const Buttons = ({ filterItem, setItem, menuItems }) => {
  return (
    <>
      <div className="filter">
        <nav>
          <ul className="nav">
            {menuItems.map((Val, id) => {
              return (
                <li className="nav-item">
                  <a className="nav-link" onClick={() => filterItem(Val)}
                    key={id}>{Val}</a>
                </li>
              );
            })}
            {/* <li className="nav-item">
              <a className="nav-link" onClick={() => setItem(Data)}
              ><i className="text-blueGray-400  text-lg leading-lg fa fa-scroll"></i>All</a>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Buttons;