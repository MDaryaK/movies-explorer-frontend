import React from "react";

import SectionTitle from "../../SectionTitle";

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
                На курсе веб-разработки мы освоили технологии, которые применили <br/> в дипломном проекте.
              </p>
            </div>
            <div className="main-technologies__list">
              {technologies.map(({ title }, index) => (
                <p
                  className="main-technologies__list-item"
                  key={index}
                >
                  {title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
