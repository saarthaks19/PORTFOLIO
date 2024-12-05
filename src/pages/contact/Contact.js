import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Contact.css";
import mailIcon from "../../assets/mail.svg";  // Adjust the path as necessary
import linkedinIcon from "../../assets/icons8-linkedin.svg";  // Adjust the path as necessary

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="ContactBox">
        <h2>Get In Touch</h2>
        <h1>Contact Me</h1>
        <div className="ContactButton">
          <a href="mailto:saarthaksharma19@gmail.com" target="_blank">
            <div className="email">
              <div
                className="circle"
                style={{ backgroundImage: `url(${mailIcon})` }}
              ></div>
              <p>saarthaksharma19@gmail.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/saarthak-sharma-a6aa04228/" target="_blank">
            <div className="email">
              <div
                className="circle"
                style={{ backgroundImage: `url(${linkedinIcon})` }}
              ></div>
              <p>LinkedIn</p>
            </div>
          </a>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Contact;
