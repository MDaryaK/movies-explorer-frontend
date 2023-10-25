import React from "react";

import SectionTitle from "../SectionTitle";

import "./index.css";

export default function AboutProject() {
  return (
    <section id="about-project" className="main-about">
      <div className="landing-container">
        <div className="main-about__container">
          <SectionTitle title="О проекте" />
          <div className="main-about__information">
            <div className="main-about__stages">
              <div>
                <h3 className="main-about__stages-title">
                  Дипломный проект включал 5 этапов
                </h3>
                <p className="main-about__stages-description">
                  Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </p>
              </div>
              <div>
                <h3 className="main-about__stages-title">
                  На выполнение диплома ушло 5 недель
                </h3>
                <p className="main-about__stages-description">
                  У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                </p>
              </div>
            </div>
            <div className="main-about__weeks">
              <div className="main-about__weeks-item">
                <div>
                  <h3>
                    1 неделя
                  </h3>
                </div>
                <p>Back-end</p>
              </div>
              <div className="main-about__weeks-item">
                <div>
                  <h3>
                    4 недели
                  </h3>
                </div>
                <p>
                  Front-end
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
