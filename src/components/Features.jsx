import React from "react";
import details from "./Features-Details";
import "./Features.css"

function Feature() {
  const listDetails = details.map((data) => (
    <article className="features-card">
      <img className="features-card--img" src={data.image} alt={data.alt} />
      <h1 className="features-card--header">{data.heading}</h1>
      <p className="features-card--body">{data.description}</p>
    </article>
  ));

  return (
    <div>
      <section className="features">
        <div className="features-content">
          <h1 className="features-header">Why choose Easybank?</h1>
          <p className="features-body">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="features-cards">{listDetails}</div>
      </section>
    </div>
  );
}

export default Feature;
