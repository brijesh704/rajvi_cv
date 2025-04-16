import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>About</span> Me
      </h1>

      <div className="row">
        <div className="info">
          <h3>
            <span>Name: </span>Rajvi Donga
          </h3>
          <h3>
            <span>About me: </span>I am a BBA student at GSFC University. I have a strong passion for business development and strategic planning. My goal is to start a successful business in the future.
          </h3>
          <h3>
            <span>Language: </span>Gujarati, Hindi, English
          </h3>
          <Link to="/">
            <button className="btn">
              Download CV <i className="fas fa-download"></i>
            </button>
          </Link>
        </div>

        <div className="counter">
          
        </div>
      </div>
    </section>
  );
}

export default About;
