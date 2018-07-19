import React from 'react';
import './Button.css';

const Button = props => (
    <button type="button" className="btn btn-danger get_started">{props.text}</button>
)

export default Button;