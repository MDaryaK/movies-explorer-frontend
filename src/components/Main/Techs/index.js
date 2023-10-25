import React from "react";

import SectionTitle from "../SectionTitle";

import "./index.css";

export default function Techs() {

  const technologies = [
    {
      title: "HTML"
    },
    {
      title: "CSS"
    },
    {
      title: "JS"
    },
    {
      title: "React"
    },
    {
      title: "Git"
    },
    {
      title: "Express js"
    },
    {
      title: "mongoDB"
    }
  ];

  return (
    <section className="main-technologies">
      <div className="landing-container">
        <div className="main-technologies__container">
          <SectionTitle title="Технологии" />
          <div>
            <div className="main-technologies__info">
              <h3 className="main-technologies__info-title">
                7 технологий
              </h3>
              <p className="main-technologies__info-subtitle">
                На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
              </p>
            </div>
            <ul className="main-technologies__list">
              {technologies.map(({ title }, index) => (
                <li
                  className="main-technologies__list-item"
                  key={index}
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
