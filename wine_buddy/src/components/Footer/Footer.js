import React from "react";
import "./Footer.css"

const Footer = () => (
  <nav className="navbar fixed-bottom navbar-light bg-light">
    <div id="footer-left">
      <img className="footer_p" src="https://images.clipartuse.com/1e618854f1003f98adf3fd5f4d482f52_clinking-wine-glasses-stickers-by-libberdoodle-redbubble_771-800.jpeg" />
      <p className="footer_p">Wine Buddy</p><p className="footer_p"><span>&#169;</span> 2018</p>
    </div>
    <div id="footer-right">
      <p>Powered by Vivino</p>
    </div>
  </nav>
);

export default Footer;