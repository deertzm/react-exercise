import React from 'react'
import './Button.css'

const Button = props => (
    <div className="btn" onClick={props.toggleClick}>
    <span className="btn__btn-text">{props.buttonText}</span>
    </div>
)

export default Button