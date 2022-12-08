import React from 'react'

function TableColorInput({tableInfo, state, setState}) {
  const setStateFunc = () => setState(tableInfo);
  return (
    <div className={`form__group__wrapper ${state === tableInfo ? "active" : ""}`} onClick={setStateFunc}>
      <div className="form__group__content__wrapper">
        <i className="checkmark"></i>
        <div className={`table-color-div ${tableInfo}`}></div>
      </div>
    </div>
  )
}

export default TableColorInput