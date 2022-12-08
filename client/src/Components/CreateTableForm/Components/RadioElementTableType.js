import React from 'react'

function RadioElementTableType({statusObj, state, setState}) {
  const setStateFunc = () => setState(statusObj.value);
  
  return (
    <div className={`form__group__wrapper ${state === statusObj.value ? "active" : ""}`} onClick={setStateFunc}>
      <div className="form__group__content__wrapper">
        <i className="checkmark"></i>
        {statusObj.imgSrc && <div className="level-img"><img alt="no" className="responsive__image" src={`https://belot.md/img/v3/status_hq/${statusObj.value}.png`}/></div>}
        <div className="description">{statusObj.name}</div>
      </div>
    </div>
  )
}

export default RadioElementTableType