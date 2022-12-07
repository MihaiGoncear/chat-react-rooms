import React from 'react'
import "./Button.sass"

function Button({text, className = ""}) {
  return (
    <div className={"common-btn-color__green " + className}>{text}</div>
  )
}

export default Button