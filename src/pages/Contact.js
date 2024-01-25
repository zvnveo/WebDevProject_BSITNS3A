import React, { useState } from "react";
import CatLeft from "../assets/catLeft.png";
import "../styles/Contact.css";

function Contact() {
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary form submission logic here
    // For now, let's just show the pop-up message
    setShowMessage(true);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${CatLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>

        {showMessage && (
          <div className="popup-message">
            <p>MESSAGE SENT!</p>
            <button onClick={handleCloseMessage}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
