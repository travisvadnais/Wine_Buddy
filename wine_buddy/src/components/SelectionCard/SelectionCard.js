import React from 'react';
import './SelectionCard.css';

const SelectionCard = props => (
  <div className="card user_card">
    <img className="card-img-top user_selection" src={props.image} alt={props.alt} />
        <div className="card-body">
            <p className="card-text">{props.selection}</p>
        </div>
  </div>
)

export default SelectionCard