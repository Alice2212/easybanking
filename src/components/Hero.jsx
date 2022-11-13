import React from "react";

function Hero() {
  return (
    <section className="hero ">
      <div className="container">
        <div className="hero-image"></div>
        <div className="hero-text">
          <h1 className="text-red-600">Next generation digital banking</h1>
          <p>
            Take your financial life online. Your Easybank account will be
            one-stop-shop for spending, saving, budgeting, investing and much
            more
          </p>
          <button className="hero-cta">Request Invite</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
