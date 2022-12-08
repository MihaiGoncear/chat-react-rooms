import React from 'react'
import sprite from "../../../svgSprite.svg"

function TableTypeInput({infoTable, state, setState}) {
  const setStateFunc = () => setState(infoTable.value);
  return (
    <div onClick={setStateFunc} className={`form__group__wrapper ${infoTable.value === state ? 'active' : ''}`}>
      <div className="form__group__content__wrapper">
        <i className="checkmark"></i>
        <div className="icon__wrapper">
          <svg className={`svg-sprite-icon icon icon-mese_${infoTable.value}`}>
            <use xlinkHref={`${sprite}#mese_${infoTable.value}`}></use>
          </svg>
        </div>
        <div className="description">
          {infoTable.value === 2 && <img alt="no" className="responsive__image coins" src="https://belot.md/static/images/user-account/coins2.png" />}
          {infoTable.text}
        </div>
      </div>
    </div>
  )
}

export default TableTypeInput