import React from "react";
import "./Footer.css"

const Footer = () => (
  <nav className="navbar fixed-bottom navbar-light bg-light">
    <div id="footer-left">
      <img className="footer_p" alt="wine logo" src="https://images.clipartuse.com/1e618854f1003f98adf3fd5f4d482f52_clinking-wine-glasses-stickers-by-libberdoodle-redbubble_771-800.jpeg" />
      <p className="footer_p"><strong>Wine Buddy</strong></p><p className="footer_p"><span><strong>&#169;</strong></span> <strong> 2018 </strong> </p>
    </div>
    <div id="footer-right">
      <p><strong>Powered by Vivino</strong></p>
    </div>
  </nav>
);

export default Footer;