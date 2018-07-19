import React from 'react';

//Set up the dropdown list
const DropDown = ({name, onChange, placeholder, items}) => (
  <select  name={name} onChange={onChange} >
    {/* Default Option */}
    <option value="" disabled selected>{placeholder}</option>
    {/* We're going to loop through each item in the foods API and set up an Option for each one */}
    {items.map(item =>{
      return <option key={item} value={item}>{item}</option>;
    })}
  </select>
)

export default DropDown;