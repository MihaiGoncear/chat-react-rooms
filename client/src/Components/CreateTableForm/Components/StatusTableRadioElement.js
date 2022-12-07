import React from 'react'

function StatusTableRadioElement({statusObj, state, setState}) {
  const setStateFunc = () => setState(statusObj.name);
  return (
    <div className={`form__group__wrapper ${state === statusObj.name ? "active" : ""}`} onClick={setStateFunc}>
      <div className="form__group__content__wrapper">
        <i className="checkmark"></i>
        {statusObj.value !== -1 && <div className="level-img"><img alt="no" className="responsive__image" src={`https://belot.md/img/v3/status_hq/${statusObj.value}.png`}/></div>}
        <div className="description">{statusObj.name}</div>
      </div>
    </div>
  )
}

export default StatusTableRadioElement