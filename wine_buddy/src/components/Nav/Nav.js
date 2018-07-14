import React from 'react';

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" >WineBuddy</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" id="go_home" href="">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a id="saved_articles" className="nav-link" href="">My Wines</a>
                </li>
                <button type="button" className="btn btn-success" id="scraper">Find a Wine!</button>
            </ul>
        </div>
    </nav>
)



export default Nav;