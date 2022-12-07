import React from 'react'
import "./Button.sass"

function Button({text, className = "", onClick}) {
  return (
    <div className="common-button-wrapper">
      <div className={`common-btn ${className}`} onClick={onClick}>{text}</div>
    </div>
  )
}

export default Button