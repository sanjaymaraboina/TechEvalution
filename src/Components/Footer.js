import React from "react";
import "./Footer.css";
import img7 from "../assets/Fb.png";
import img8 from "../assets/Instagram.png";
import img9 from "../assets/twitter.png";

const Footer = () => {
  return (
    <div>
      <div className="Foot">
        <div className="footer1">
          <div class="footer-section">
            
            <ul>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>FAQ</li>
              <li>Site Credits</li>
            </ul>
          </div>
          <div class="footer-section1 ">
            <h4>Connect with Us</h4>
            <div className="logo">
              <img src={img7} alt="facebook" />
              <img src={img8} alt="instagram" />
              <img src={img9} alt="twitter" />
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>
            &copy; 2024 Tech-Evalution All rights reserved. | Designed by Sanjay
            Maraboina
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
