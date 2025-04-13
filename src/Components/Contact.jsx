import React from "react";
import "./style.css";
import magdu from '../images/magdu.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const Contact = () => {
  return (
    <div class="container-fluid">
    <div className="contact-page">
      <h1>BRIDGE THE GAP</h1>
      <div className="contact-container row">
        {/* Left Section */}
        <div className="left-section col">
          <img src={magdu} alt="Your Profile" className="profile-pic" />
          <div className="contact-info">
            <div className="info-item">
              <span>📞</span> +91 9778159713
            </div>
            <div className="info-item">
              <span>📧</span> magdalenexavier31@gmail.com
            </div>
            <div className="info-item">
              <span>📍</span> CARMALA RANI HOUSE,TC 33/200, <br /> VETTUCAUD BEACH PO, <br /> TRIVANDRUM - 695007
            </div>
          </div>
        </div>
        
        {/* Right Section */}
        <div className="right-section col">
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>        
      </div>
      <div className="social-links"> 
          <a href="https://www.instagram.com/magdalenexavierfernandez?igsh=MWh1bW43YnF3Y21lOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: '#C13584', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faInstagram} />
            <span>Instagram</span>
          </a>
          <a href="https://www.instagram.com/magdalenexavierfernandez?igsh=MWh1bW43YnF3Y21lOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: '#C13584', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faTwitter} />
            <span>Twitter</span>
          </a>
          <a href="https://www.facebook.com/magdalene.xavierfernandez?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} /> {/* Facebook Icon */}
            <span>Facebook</span> {/* Optional text */}
          </a> 
          <a href="https://www.instagram.com/magdalenexavierfernandez?igsh=MWh1bW43YnF3Y21lOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: '#C13584', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faPinterest} />
            <span>Pinterest</span>
          </a>
          <a href="https://www.instagram.com/magdalenexavierfernandez?igsh=MWh1bW43YnF3Y21lOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ color: '#C13584', textDecoration: 'none' }}>
            <FontAwesomeIcon icon={faLinkedin} />
            <span>LinkedIn</span>
          </a>
          </div>
      {/* Footer */}
      <footer className="footer">© 2024 Your Name. All rights reserved.</footer>
    </div>
    </div>
  );
};

export default Contact;
