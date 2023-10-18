import React from "react";

import SectionTitle from "../../SectionTitle";

import "./index.css";

export default function AboutProject() {
  return (
    <section className="about ">
      <div className="about__container">
        <SectionTitle title="О проекте" />
        <div className="about__container__information">
          <div className="stages">
            <div>
              <p className="stages__title">
                Дипломный проект включал 5 этапов
              </p>
              <p className="stages__description">
                Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
              </p>
            </div>
            <div>
              <p className="stages__title">
                На выполнение диплома ушло 5 недель
              </p>
              <p className="stages__description">
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
              </p>
            </div>
          </div>
          <div className="weeks">
            <div className="weeks__first week">
              <div>
                <p>
                  1 неделя
                </p>
              </div>
              <p>Back-end</p>
            </div>
            <div className="weeks__second week ">
              <div>
                <p>
                  4 недели
                </p>
              </div>
              <p>
                Front-end
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
