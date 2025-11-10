import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../index.css";

const ContactSection = () => {
  const whatsappNumber = "916268703761"; 

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h2 className="contact-title">Join Now</h2>
          <p className="contact-text">
            Ready to transform your body and lifestyle? Join our gym family today
            and start your fitness journey with expert trainers.
          </p>
          <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
            <FaWhatsapp className="whatsapp-icon" />
            Chat on WhatsApp
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <h3>Contact Us</h3>
          <p>
            Have any questions or need more details? Reach out to us anytime.
          </p>
          <div className="contact-info">
            <h4>📍 Address:</h4>
            <p>
              A/B Patel Complex, Vishwas Nagar, Banjari, Pithampur <br />
              Near St. George School
            </p>
            <h4>📞 Phone:</h4>
            <p>+91 62687 03761</p>
            <h4>🕐 Timings:</h4>
            <p>Morning: 5:00 AM – 10:00 AM<br />Evening: 4:00 PM – 10:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
