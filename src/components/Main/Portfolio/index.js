import React from "react";

import arrow from "../../../images/icons/arrow.png";

import "./index.css";

export default function Portfolio() {

  const portfolioLinks = [
    {
      title: "Статичный сайт",
      link: ""
    },
    {
      title: "Адаптивный сайт",
      link: ""
    },
    {
      title: "Одностраничное приложение",
      link: ""
    },
  ];

  return (
    <div className="landing-container">
      <div className="main-portfolio">
        <p className="main-portfolio__title">
          Портфолио
        </p>
        <div className="main-portfolio__links">
          {portfolioLinks.map(({ title, link }, index) => (
            <a
              className="main-portfolio__links-item"
              href={link}
              key={index}
            >
              <p>{title}</p>
              <img src={arrow} alt="arrow icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
