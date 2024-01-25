// PopUpDetails.js
import React from "react";
import "../styles/PopupDetails.css";

function PopUpDetails({ details, onClose }) {
  return (
    <div className="popup-details-overlay" onClick={onClose}>
      <div
        className="popup-details-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{details.title}</h2>
        <div className="details-section">
          <strong>Name:</strong> {details.name}
        </div>
        <div className="details-section">
          <strong>Contact Number:</strong> {details.number}
        </div>
        <div className="details-section">
          <strong>Address:</strong> {details.address}
        </div>
        <div className="details-section">
          <strong>Email:</strong> {details.email}
        </div>
        <div className="details-section">
          <strong>GCash Number:</strong> {details.gcashNumber}
        </div>
        <div className="details-section quote-section">
          <span className="quote-text">{details.quote}</span>
        </div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default PopUpDetails;
