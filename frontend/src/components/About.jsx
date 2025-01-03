import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we are serious about is your fitness.</p>
            </div>

            <p className="mid">
            Welcome to Fuel Feast, where we believe that a healthy lifestyle begins with the right nutrition. Our mission is to provide delicious, nourishing meals that fuel your body and help you reach your fitness and wellness goals. Every dish on our menu is thoughtfully crafted using fresh, locally-sourced ingredients to ensure peak flavor and nutritional value. Whether you're a dedicated athlete, a fitness enthusiast, or simply someone aiming to eat healthier, Fuel Feast offers a diverse range of options to meet your needs. Join us for meals that not only taste amazing but also empower you to live your healthiest life.

            </p>
            <a href="./menu.html" target="_blank" rel="noopener noreferrer">
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </a>

          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;