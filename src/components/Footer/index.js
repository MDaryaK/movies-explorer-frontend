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
            <ul className="footer__links">
              <li>
                <a
                  className="footer__links-item"
                  href="https://practicum.yandex.ru/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li>
                <a
                  className="footer__links-item"
                  href="https://github.com/MDaryaK"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
