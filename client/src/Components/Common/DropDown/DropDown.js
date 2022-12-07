import React, { useState } from 'react';
import "./DropDown.sass";

function DropDown({dropDownsItems, state, setState}) {
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const setStatus = () => setDropDownStatus(!dropDownStatus);

  return (
    <div className="dropdown-component">
      <div className={`dropdown-head ${dropDownStatus ? 'active' : ''}`} onClick={setStatus}>
        <div className="choosed-item" id="mizaMese2">{state === "" ? dropDownsItems[0] : state}</div>
        <div className="triangle">▼</div>
      </div>
      <div className={`dropdown-items ${!dropDownStatus ? 'hidden' : ''}`} onClick={setStatus}>
        {
          dropDownsItems.map((item, index) => {
            return <div key={item} className={`dropdown-item ${state === "" ? index === 0 ? "active" : "" : parseInt(state) === parseInt(item) ? "active" : ""}`} onClick={setState}>{item}</div>
          })
        }
      </div>
    </div>
  )
}

export default DropDown;