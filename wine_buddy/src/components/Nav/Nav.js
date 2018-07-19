import React from 'react';
import { Link } from "react-router-dom";

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-brand navbar-light bg-light justify-content-between">
    <h1 className="brand">Wine Buddy</h1>
    <br/>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {/* The 'Link to' will render the linked page */}
                    <Link to="../home" className="nav-link" id="go_home" href="">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="../profile" id="saved_articles" className="nav-link" href="">My Wines</Link>
                </li>
            </ul>
                <Link to="../wine_pair"><button type="button" className="btn btn-danger" id="scraper">Find Your Wine!</button></Link>
        </div>
       
    </nav>


)



export default Nav;