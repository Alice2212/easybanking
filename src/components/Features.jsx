import React from "react";
import onlineImg from "../Assets/icon-online.svg";
import budgetImg from "../Assets/icon-budgeting.svg"
import onboardingImg from "../Assets/icon-onboarding.svg"
import apiImg from "../Assets/icon-api.svg";


function Feature(){
    return (
      <div>
        <section className="features">
          <div className="features__content">
            <h1 className="features__header">Why choose Easybank?</h1>
            <p className="features__copy">
              We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
            </p>
          </div>
          <div className="features__cards">
            <article className="features-card">
              <img
                className="features-card__img"
                src={onlineImg}
                alt="icon of hand holding credit cards"
              />
              <h1 className="features-card__header">Online Banking</h1>
              <p className="features-card__copy">
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </article>
            <article className="features-card">
              <img
                className="features-card__img"
                src={budgetImg}
                alt="smartphone icon with dollar sign on a chat bubble"
              />
              <h1 className="features-card__header">Simple Budgeting</h1>
              <p className="features-card__copy">
                See exactly where your money goes each month. Received
                notifications when you're close to hitting your limits.
              </p>
            </article>
            <article className="features-card">
              <img
                className="features-card__img"
                src={onboardingImg}
                alt="icon with people"
              />
              <h1 className="features-card__header">icon with people</h1>
              <p className="features-card__copy">
                We don't do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </article>
            <article className="features-card">
              <img
                className="features-card__img"
                src={apiImg}
                alt="icon of computer chip"
              />
              <h1 className="features-card__header">Open API</h1>
              <p className="features-card__copy">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </article>
          </div>
        </section>
      </div>
    );
}

export default Feature;