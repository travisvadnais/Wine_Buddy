import React from 'react';
import './InstructionCard.css';

const InstructionCard = props => (
    <div className="card">
        <img className="card-img-top" src={props.img} alt={props.alt} />
        <div className="card-body">
            <p className="card-text">{props.step}</p>
        </div>
    </div>
)

export default InstructionCard;