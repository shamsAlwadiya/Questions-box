import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <p>If you have any questions or suggestions, feel free to contact us!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
