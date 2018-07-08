import React from 'react';

const Nav = props => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" >WineBuddy</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                    <a class="nav-link" id="go_home" href="">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a id="saved_articles" class="nav-link" href="#">My Wines</a>
                </li>
                <button type="button" class="btn btn-success" id="scraper">Find a Wine!</button>
            </ul>
        </div>
    </nav>
)



export default Nav;