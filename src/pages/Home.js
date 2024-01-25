import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/whiskerbg.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> WHISKER WELFARE </h1>
        <Link to="/pet">
          <button> ADOPT NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
