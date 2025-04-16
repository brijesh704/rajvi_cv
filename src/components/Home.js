import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <section className="home" id="home">
      <h3>HI THERE !</h3>
      <h1>
        I'M <span>Rajvi Donga</span>
      </h1>
      <p>I am currently pursuing a BBA degree. I have a strong interest in business development, strategic planning, and finance.</p>
      <Link to="/about">
        <button className="btn">
          About Me <i className="fas fa-user"></i>
        </button>
      </Link>
    
    </section>
  );
}

export default Home;
