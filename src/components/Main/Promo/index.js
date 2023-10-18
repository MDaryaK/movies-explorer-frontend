import React from "react";

import world from "./img/world.png"

import "./index.css";

export default function Promo() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__container__info">
          <div className="info">
            <p className="info__title">
              Учебный проект студента факультета Веб-разработки.
            </p>
            <p className="info__description">
              Листайте ниже, чтобы узнать больше про этот проект и его создателя.
            </p>
          </div>
          <button>
            Узнать больше
          </button>
        </div>
        <div className="hero__container__image">
          <img src={world} alt=""/>
        </div>
      </div>
    </section>
  )
}
