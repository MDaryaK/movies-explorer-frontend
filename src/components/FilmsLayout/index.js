import React, { useState } from "react";

import Films from "../Films";
import Header from "../Header";
import Footer from "../Footer";

import find from "./img/find.svg";
import search from "./img/search.svg";

import "./index.css";

export default function FilmsLayout({ filmsList }) {
  const [isShortFilm, setIsShortFilm] = useState(false);

  const toggleShortFilm = () => {
    setIsShortFilm(!isShortFilm);
  };

  return (
    <>
      <Header />
      <div className="films">
        <div className="films__search">
          <div className="films__search__container">
            <img
              className="search__ico"
              src={search}
              alt=""
            />
            <input
              type="tex"
              placeholder="Фильм"
            />
            <img
              className="find__ico"
              src={find}
              alt=""
            />
          </div>
          <div className="films__search__toggle">
            <div
              className={`toggle ${isShortFilm ? "toggle-active" : ""}`}
              onClick={toggleShortFilm}
            >
              <div
                className={`dot ${isShortFilm ? "dot-active" : ""}`}
              />
            </div>
            <p>
              Короткометражки
            </p>
          </div>
        </div>
        <Films filmsList={filmsList} />
      </div>
      <Footer />
    </>
  );
}