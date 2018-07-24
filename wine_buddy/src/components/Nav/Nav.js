import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css'

const Nav = props => (

    <nav className="navbar navbar-expand-lg navbar-brand navbar-light bg-light justify-content-between">
        <div className="collapse navbar-collapse">
            <img className="nav_p" alt="wine logo" src="https://images.clipartuse.com/1e618854f1003f98adf3fd5f4d482f52_clinking-wine-glasses-stickers-by-libberdoodle-redbubble_771-800.jpeg" height="50" width="50" />
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="../home" className="nav-link" id="go_home" href=""><h1>Wine Buddy</h1> <span className="sr-only">(current)</span></Link>
                </li>

            </ul>
          
            <form className="form-inline-right">
            
                        <Link to="../SignupForm"><button type="button" className="btn btn-warning my-2 my-sm-0" id="sign up">Sign-Up</button></Link>
                        <Link to="../Signin"><button type="button" className="btn btn-warning my-2 my-sm-0" id="sign in">Sign-In</button></Link>
                    
                    <br/>
                    
                        <Link to="../wine_pair"><button type="button" className="btn btn-warning btn-vertical my-2 my-sm-0" id="scraper">Find Your Wine!</button></Link>
                    
            </form>
        </div>

    </nav>


)




//      <nav className="navbar fixed-top navbar-light bg-light">
//     <div id="nav-left">
//       <img className="nav_p" alt="wine logo" src="https://images.clipartuse.com/1e618854f1003f98adf3fd5f4d482f52_clinking-wine-glasses-stickers-by-libberdoodle-redbubble_771-800.jpeg" />
//       <h2 className="wine_buddy"><strong>Wine Buddy</strong></h2>
//     </div>
//     <div id="nav-right">
//       <ul>
//           <li>
//           <Link to="../wine_pair"><button type="button" className="btn btn-warning my-2 my-sm-0" id="scraper">Find Your Wine!</button></Link>
//           </li>
//           <li>
//           <Link to="../SignupForm"><button type="button" className="btn btn-warning my-2 my-sm-0" id="sign up">Sign-Up</button></Link>
//           </li>
//           <li>
//           <Link to="../Signin"><button type="button" className="btn btn-warning my-2 my-sm-0" id="sign in">Sign-In</button></Link>
//           </li>
//       </ul>
//     </div>
//   </nav>







// )



export default Nav;