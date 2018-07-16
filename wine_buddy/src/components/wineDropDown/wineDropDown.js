import React from 'react';
import './wineDropDown.css';
import wines from '../../pages/Wine/foods.json'

//Set up the dropdown list
const wineDropDown = (props) => (
    <form>
  <select id={props.id} name={props.name} onChange={props.onChange}>
    {/* Default Option */}
    <option value="" disabled selected>{props.placeholder}</option>
    {/* We're going to loop through each item in the foods API and set up an Option for each one */}
    {wines.map(e =>{
      return <option key={e.wines} value={e.wines}>{e.wines}</option>;
    })}
  </select>
  </form>
)

export default WineDropDown;