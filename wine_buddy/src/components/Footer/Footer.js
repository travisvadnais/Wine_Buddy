import React from "react";
import "./Footer.css"

const Footer = () => (
  <nav className="navbar fixed-bottom navbar-light bg-light">
    <div id="footer-left">
      <img className="footer_p" alt="wine logo" src="https://img.freepik.com/free-vector/set-transparent-glasses-with-white-and-red-wine_1441-111.jpg?size=338&ext=jpg" />
      <p className="footer_p"><strong>Wine Buddy</strong></p><p className="footer_p"><span><strong>&#169;</strong></span> <strong> 2018 </strong> </p>
    </div>
    <div id="footer-right">
      <p><strong>Powered by Vivino</strong></p>
    </div>
  </nav>
);

export default Footer;