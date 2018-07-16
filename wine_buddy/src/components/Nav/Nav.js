import React from 'react';
import { Link } from "react-router-dom";

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" >WineBuddy</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    {/* The 'Link to' will render the linked page */}
                    <Link to="../home"><a className="nav-link" id="go_home" href="">Home <span className="sr-only">(current)</span></a></Link>
                </li>
                <li className="nav-item">
                    <Link to="../profile"><a id="saved_articles" className="nav-link" href="">My Wines</a></Link>
                </li>
                <Link to="../wine_pair"><button type="button" className="btn btn-success" id="scraper">Find a Wine!</button></Link>
            </ul>
        </div>
    </nav>
)



export default Nav;