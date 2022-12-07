import React, { useState } from 'react';
import "./DropDown.sass";

function DropDown({dropDownsItems}) {
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const [stakeValue, setStakeValue] = useState(dropDownsItems[0]);

  const setStatus = () => setDropDownStatus(!dropDownStatus);
  const getStake = (e) => setStakeValue(e.target.innerText);

  return (
    <div className="dropdown-component">
      <div className={`dropdown-head ${dropDownStatus ? 'active' : ''}`} onClick={setStatus}>
        <div className="choosed-item" id="mizaMese2">{stakeValue}</div>
        <div className="triangle">▼</div>
      </div>
      <div className={`dropdown-items ${!dropDownStatus ? 'hidden' : ''}`} onClick={setStatus}>
        {
          dropDownsItems.map((item, index) => {
            return <div key={item} className={`dropdown-item ${index === 0 ? "active" : ""}`} onClick={getStake}>{item}</div>
          })
        }
      </div>
      <input type="hidden" value={stakeValue}/>
    </div>
  )
}

export default DropDown;