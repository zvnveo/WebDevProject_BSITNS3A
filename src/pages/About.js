// About.js
import React, { useState } from "react";
import Cats from "../assets/whisketaboutbg.png";
import DonationForm from "../pages/DonationForm";
import "../styles/About.css";

function About() {
  const [showDonationForm, setShowDonationForm] = useState(false);

  const handleDonateClick = () => {
    setShowDonationForm(true);
  };

  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Cats})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>WLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLSSSSSSSSSSSSSS</p>
        <button className="donate-button" onClick={handleDonateClick}>
          Donate
        </button>
      </div>
      {showDonationForm && (
        <DonationForm onClose={() => setShowDonationForm(false)} />
      )}
    </div>
  );
}

export default About;
