import React from "react";

import SectionTitle from "../SectionTitle";

import student from "../../../images/student.png";

import "./index.css";

export default function AboutMe() {
  return (
    <section className="main-about-me">
      <div className="landing-container">
        <div className="main-about-me__container">
          <SectionTitle title="Студент" />
          <div className="main-about-me__block">
            <div className="main-about-me__info">
              <div>
                <h3 className="main-about-me__info-name">
                  Виталий
                </h3>
                <p className="main-about-me__info-profession">
                  Фронтенд-разработчик, 30 лет
                </p>
                <p className="main-about-me__info-description">
                  Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                  и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                </p>
              </div>
              <a
                className="main-about-me__info-link"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MDaryaK"
              >
                Github
              </a>
            </div>
            <img
              className="main-about-me__block-avatar"
              src={student}
              alt="user avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
