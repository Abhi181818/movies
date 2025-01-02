import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="main-row">
        <div className="logo-section">
          {/* <h4>Logo</h4> */}
          <img src="https://play-lh.googleusercontent.com/n9_SKKjuOM-AK9Fmo0UB9dcBVm6bZOXq8_nUtuHSoZbQqxzdNvYIBDLcEE9JpbwN0n_V=w240-h480-rw" alt="website logo" className="logo"/>
          <p className="company-description">
            We deliver fresh groceries to your doorstep, ensuring quality and
            convenience. Contact us for any queries or support.
          </p>
        </div>
        <div>
          <p className="fw-bold">Delivery</p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Grocery Lane, City, Country
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +1 234 567 890
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> contact@basketbites.com
          </p>
        </div>
        <div>
          <p className="fw-bold">Quick Links</p>
          <p><a href="#about" className="footer-link">About Us</a></p>
          {/* <p><a href="#services" className="footer-link">Services</a></p> */}
          <p><a href="#contact" className="footer-link">Contact</a></p>
          <p><a href="#faq" className="footer-link">FAQ</a></p>
        </div>
        <div>
          <p className="fw-bold">Privacy & Terms</p>
          <p><a href="#privacy" className="footer-link">Privacy Policy</a></p>
          <p><a href="#terms" className="footer-link">Terms of Service</a></p>
        </div>
        <div className="social-media">
          <p className="fw-bold">Follow Us</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.twitter.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com" className="footer-icon" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-text">
        <p>© 2024 BasketBites. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
