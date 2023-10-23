import React from "react";

import "./index.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <p className="footer__title">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className="footer__content">
            <p className="footer__copyright">
              © {year}
            </p>
            <div className="footer__links">
              <a
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
              <a
                href="https://github.com/MDaryaK"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
