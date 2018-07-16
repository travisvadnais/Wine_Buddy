import React from 'react';
import './Dropdown.css';
import foods from '../../pages/Wine/foods.json'

//Set up the dropdown list
const Dropdown = (props) => (
  <select id={props.id} name={props.name} onChange={props.onChange}>
    {/* Default Option */}
    <option value="" disabled selected>{props.placeholder}</option>
    {/* We're going to loop through each item in the foods API and set up an Option for each one */}
    {foods.map(e =>{
      return <option key={e.food} value={e.food}>{e.food}</option>;
    })}
  </select>
)

export default Dropdown;