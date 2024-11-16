import React from "react";
import "../styles/main.css";
import logo from '../img/logo-2.svg'

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-contact">
        <img
          src={logo} 
          alt="Carebot Logo"
          className="footer-logo"
        />
        <p>Smart AI for Seamless Customer Support</p>
        <p>1234 Elm Street, Suite 567, Springfield, IL 62701, USA</p>
        <p>(954) 563-6305</p>
      </div>

      
      <div className="footer-links">
        <div>
          <h4>COMPANY</h4>
          <a href="#">Pricing</a>
          <a href="#">Press Release</a>
          <a href="#">About Us</a>
        </div>
        <div>
          <h4>RESOURCES</h4>
          <a href="#">Funding News</a>
          <a href="#">Medium</a>
          <a href="#">Download Chrome Extension</a>
        </div>
        <div>
          <h4>ABOUT</h4>
          <a href="#">Security</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      
      <div className="footer-bottom">
        <p>© 2024 Carebot, Inc. All rights reserved.</p>
        <div className="footer-social">
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Twitter">X</a>
          <a href="#" aria-label="LinkedIn">In</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
