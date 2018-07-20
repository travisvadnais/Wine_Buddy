import React from 'react';

//Set up the dropdown list
const DropDown = ({name, onChange, placeholder, items}) => (
  //Remove 'selected' from the <option> and make the <select defaultValue> and <option value> values match
  //This gets rid of the React error we were getting
  <select defaultValue={placeholder} name={name} onChange={onChange} >
    {/* Default Option */}
    <option value={placeholder} disabled>{placeholder}</option>
    {/* We're going to loop through each item in the foods API and set up an Option for each one */}
    {items.map(item =>{
      return <option key={item} value={item}>{item}</option>;
    })}
  </select>
)

export default DropDown;