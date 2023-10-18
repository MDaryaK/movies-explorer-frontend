import React from "react";

import "./index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__content">
          <p className="footer__copyright">
            © 2020
          </p>
          <div className="footer__links">
            <a href="">
              Яндекс.Практикум
            </a>
            <a href="">
              Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}