// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">Power Your Plate</h1>
          </div>
          <div className="combined_boxes">
            <div className="textAndLogo">
              <div className="textWithSvg">
                {/* <h1 className="title">Your</h1> */}
                <h1 className="title dishes_title">Plate</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
              <img className="logo" src="logoFF.png" alt="logo" />
            </div>
          </div>
        </div>
        <div className="banner">
          <h1 className="title dishes_title"></h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
