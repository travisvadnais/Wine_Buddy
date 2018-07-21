import React from 'react';
import { Link } from "react-router-dom";
import SignOutButton from '../Signout/Signout'

const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
<ul>
  <li><Link to='../../pages/Home/Home'>Home</Link></li>
  <li><Link to='../../pages/Profile/Profile'>Profile</Link></li>
  <li><SignOutButton /></li> 
</ul>

const NavigationNonAuth = () =>
<ul>
  <li><Link to='../../pages/Home/Home'>Home</Link></li>
  <li><Link to='../Signin/Signin'>Sign In</Link></li>
</ul>

const Nav = props => (

    <nav className="navbar navbar-expand-lg navbar-brand navbar-light bg-light justify-content-between">
    <h1 className="brand">Wine Buddy</h1> 
    <br/>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbar fixed-top-right">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="../home" className="nav-link" id="go_home" href="">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="../profile" id="saved_articles" className="nav-link" href="">My Wines</Link>
                </li>
             
            <form className="form-inline">
            <Link to="../wine_pair"><button type="button" className="btn btn-danger my-2 my-sm-0" id="scraper">Find Your Wine!</button></Link>
            <Link to="../Signin"><button type="button" className="btn btn-danger my-2 my-sm-0" id="sign in">Sign-In</button></Link>
            <Link to="../SignupForm"><button type="button" className="btn btn-danger my-2 my-sm-0" id="sign up">Sign-Up</button></Link>
            <li><SignOutButton /></li> </form>
            </ul>
        </div>
       
    </nav>


)



export default Nav;