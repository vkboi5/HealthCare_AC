// Navbar.js
import React from 'react';
import './Footer.css';
import ytlogo from './ytlogo.png.png'; // Replace with your actual image path
import iglogo from './instalogo1.png.png'; // Replace with your actual image path
import fblogo from './fblogo1.png.png'; // Replace with your actual image path
import twlogo from './twitter.png.png'; // Replace with your actual image path
import logo from './Arogclogo.png';

const Footer = () => {
  return (
    <footer className="App-footer">
        <div className="footer-content">
          <div className="footer-section logo">
            <img src={logo} alt="ArogyaConnect Logo" className='Logo'/>

            <p className='newpara'>
            Arogya connect is a 150 bedded tertiary to quaternary care 
            hospital with genuine State of the Art facilities in keeping with 
            globally comparable level of healthcare deliverance.
            </p>
            
          </div>
          <div className="footer-section links">
            <h4>Links</h4>
            <ul className='foot'>
              <li>Service Areas</li>
              <li>Blogs</li>
              <li>About</li>
              <li>Contacts</li>
              <li>Solutions</li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h4>Contact</h4>
            <p>ArogyaConnect</p>
            <p>+917387130524</p>
            <p>+919356274667</p>
            <p>arogyaconnectwork@gmail.com</p>
          </div>
          <div className="footer-section social-media">
            <h4>Follow us on</h4>
            {/* Icons or links to social media */}
            <a  href="www.youtube.com/arogyaconnect"><img src={ytlogo} alt="Youtube" /></a>
            <a  href="www.instagram.com"><img src={iglogo} alt="Instagram" /></a>
            <a  href="www.facebook.com"><img src={fblogo} alt="Facebook" /></a>
            <a  href="www.twitter.com"><img src={twlogo} alt="twitter" /></a>
            

          </div>
          
        </div>
      </footer>
  );
};

export default Footer;
