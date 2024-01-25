import React, { useState } from "react";
import PopUpDetails from "./PopupDetails";
import Cats from "../assets/whisketaboutbg.png";
import "../styles/About.css";

function About() {
  const [showDetails, setShowDetails] = useState(false);

  const details = {
    title: "WHERE YOU CAN DONATE",
    name: "Whisker Welfare",
    number: "09290548626",
    address: "San Marcelino St, Ayala Blvd, Ermita, Manila, 1000",
    email: "whiskerwelfare@gmail.com",
    gcashNumber: "09290548626",
    quote:
      "Give a little, help a lot. Your donation transforms lives, one paw at a time.",
  };

  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Cats})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Welcome to Whisker Welfare, a compassionate online platform dedicated
          to feline well-being. At Whisker Welfare, our mission is to connect
          loving homes with adorable cats in need through our seamless cat
          adoption process. Browse through our gallery of furry companions, each
          with a unique tale and ready to bring joy to your home. Not only are
          we passionate about finding forever homes for our whiskered friends,
          but we also believe in the power of community support. Whisker Welfare
          provides a space for cat lovers to contribute to the welfare of these
          lovable creatures through donations. Your generosity helps us provide
          essential care, medical attention, and a comfortable environment for
          our resident cats. Join us in making a difference in the lives of
          these precious felines. Whether you're looking to open your heart and
          home to a new family member or contribute to the welfare of cats in
          need, Whisker Welfare is your trusted partner in creating a brighter
          future for our furry friends. Adopt, donate, and be a part of the
          Whisker Welfare family today!
        </p>
        <button className="donateButton" onClick={() => setShowDetails(true)}>
          Donate
        </button>
      </div>
      {showDetails && (
        <PopUpDetails details={details} onClose={() => setShowDetails(false)} />
      )}
    </div>
  );
}

export default About;
