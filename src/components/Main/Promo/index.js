import React from "react";

import world from "../../../images/world.svg"

import "./index.css";

export default function Promo() {
  return (
    <section className="main-promo">
      <div className="container">
        <div className="main-promo__container">
          <div className="main-promo__info">
            <div className="main-promo__info-wrapper">
              <h1 className="main-promo__info-title">
                Учебный проект студента факультета <br/> Веб-разработки.
              </h1>
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
