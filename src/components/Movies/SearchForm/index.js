import "./index.css";
import search from "../../../images/icons/search.svg";
import find from "../../../images/icons/find.svg";
import React, {useState} from "react";
import Switch from "../../Switch";

export default function SearchForm() {
  const [isShortFilm, setIsShortFilm] = useState(false);

  const toggleShortFilm = () => {
    setIsShortFilm(!isShortFilm);
  };

  return (
    <form className="movies-search">
      <div className="movies-search__container">
        <img
          className="movies-search__icon movies-search__icon-find"
          src={search}
          alt="иконка лупы"
        />
        <input
          className="movies-search__input"
          type="text"
          placeholder="Фильм"
        />
        <img
          className="movies-search__icon movies-search__icon-search"
          src={find}
          alt="иконка поиска"
        />
      </div>
      <div className="movies-search__switch">
        <Switch caption="Короткометражки" />
      </div>
    </form>
  );
}
