import React from "react";

import arrow from "../../../images/icons/arrow.svg";

import "./index.css";

export default function Portfolio() {

  const portfolioLinks = [
    {
      title: "Статичный сайт",
      link: "https://github.com/MDaryaK/how-to-learn"
    },
    {
      title: "Адаптивный сайт",
      link: "https://github.com/MDaryaK/russian-travel"
    },
    {
      title: "Одностраничное приложение",
      link: "https://github.com/MDaryaK/react-mesto-api-full-gha"
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
              target="_blank"
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
