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
      <div className="container">
        <div className="main-technologies__container">
          <SectionTitle title="Технологии" />
          <div>
            <div className="main-technologies__info">
              <p className="main-technologies__info-title">
                7 технологий
              </p>
              <p className="main-technologies__info-subtitle">
                На курсе веб-разработки мы освоили технологии, которые применили <br/> в дипломном проекте.
              </p>
            </div>
            <div className="main-technologies__list">
              {technologies.map(({ title }, index) => (
                <div
                  className="main-technologies__list-item"
                  key={index}
                >
                  <p>
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
