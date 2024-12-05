import React from "react";
import "./Home.css";
import Navbar from "../../components/navbar/Navbar";
import Buttonn from "../../components/button/Buttonn";

const Home = () => {
  return (
    <div className="home">
      <div className="hnavbar">
        <div className="text">Saarthak Sharma</div>
        <Navbar />
      </div>
      <div className="main">
        <div className="image"></div>
        <div className="fields">
          <h1>Hello I'm</h1>
          <h2>Saarthak Sharma</h2>
          <h3>Programmer & Developer</h3>
          <div className="buttongrp">
            <a
              href="https://drive.google.com/file/d/1QcyoK_L32kgDGe9bY4GCRMFyfMbgAK4y/view?usp=drive_link"
              target="blank"
            >
              {" "}
              <Buttonn text="Download CV" />
            </a>

            <a href="#contact">
              {" "}
              <Buttonn text="Contact Info" />{" "}
            </a>
          </div>
          <div className="socials">
            <a href="https://github.com/saarthaks19" target="blank">
              <div className="gh"></div>
            </a>
            <a
              href="https://www.linkedin.com/in/saarthak-sharma-a6aa04228/"
              target="blank"
            >
              {" "}
              <div className="ld"></div>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
