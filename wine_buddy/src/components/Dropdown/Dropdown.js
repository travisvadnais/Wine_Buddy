import React from 'react';
import './Dropdown.css';
import foods from '../../pages/Wine/foods.json'

//Set up the dropdown list
const Dropdown = (props) => (
  <select name="food">
    {/* Default Option */}
    <option value="" disabled selected>Select the Star of Your Dish!</option>
    {/* We're going to loop through each item in the foods API and set up an Option for each one */}
    {foods.map(e =>{
      return <option key={e.food} value={e.food}>{e.food}</option>;
    })}
  </select>
)

export default Dropdown;