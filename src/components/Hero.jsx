import React from "react";
import Mockups from "../assets/image-mockups.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header-info">
          <h2 className="header-heading">Next generation digital banking</h2>
          <p className="header-paragraph">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="btn">Request Invite</button>
        </div>
        <div className="hero-img">
          <div className="bg-img"></div>
          <img className="mockups" src={Mockups} alt="mockups" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
