import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT SIDE: ADDRESS */}
        <div className="footer-left">
          <h3>Zing Gym</h3>
          <p>
            A/B Patel Complex, Vishwas Nagar, Banjari, Pithampur <br />
            Near St. George School
          </p>
          <p>📞 +91 98765 43210</p>
          <p>🕐 5:00 AM – 10:00 AM | 4:00 PM – 10:00 PM</p>
        </div>

        {/* CENTER: SOCIALS */}
        <div className="footer-center">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/zingym?igsh=Z2ZvbGM3ZTJoajFw"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://wa.me/916268703761" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE: COPYRIGHT */}
        <div className="footer-right">
          <h4>About Zing Gym</h4>
          <p>
            Building strength, stamina, and confidence — join our community and
            achieve your fitness goals with expert trainers and supportive vibes.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zing Gym | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
