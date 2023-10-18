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
    <section className="technologies">
      <div className="technologies__container">
        <SectionTitle title="Технологии" />
        <div>
          <div className="technologies__info">
            <p className="technologies__info__title">
              7 технологий
            </p>
            <p className="technologies__info__subtitle">
              На курсе веб-разработки мы освоили технологии, которые применили <br/> в дипломном проекте.
            </p>
          </div>
          <div className="technologies__items">
            {technologies.map(({ title }, index) => (
              <div
                className="block"
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
    </section>
  );
}
