import React from "react";

import world from "../../../images/world.png"

import "./index.css";

export default function Promo() {
  return (
    <section className="main-promo">
      <div className="container">
        <div className="main-promo__container">
          <div className="main-promo__info">
            <div className="main-promo__info-wrapper">
              <p className="main-promo__info-title">
                Учебный проект студента факультета Веб-разработки.
              </p>
              <p className="main-promo__info-description">
                Листайте ниже, чтобы узнать больше про этот проект и его создателя.
              </p>
            </div>
            <button>
              Узнать больше
            </button>
          </div>
          <div className="main-promo__image">
            <img src={world} alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}
