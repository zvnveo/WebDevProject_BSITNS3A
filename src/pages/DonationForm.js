// DonationForm.js
import React from "react";
import "../styles/DonationForm.css";

function DonationForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // ...
    // Close the form after submission
    onClose();
  };

  return (
    <div className="donation-form-overlay" onClick={onClose}>
      <div
        className="donation-form-content"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Donate</h2>
        <form onSubmit={handleFormSubmit}>
          {/* sakakda */}
          <label htmlFor="amount">Amount:</label>
          <input type="text" id="amount" name="amount" />

          {/* ioaehfabf */}

          <button type="submit">Submit Donation</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default DonationForm;
