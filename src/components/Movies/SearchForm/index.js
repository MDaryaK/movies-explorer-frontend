import "./index.css";
import search from "../../../images/icons/search.svg";
import find from "../../../images/icons/find.svg";
import React, {useState} from "react";
import Switch from "../../Switch";

export default function SearchForm({ searchValue, shortValue, onSearchValue, onShortChange }) {

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
          value={searchValue}
          placeholder="Фильм"
          onChange={onSearchValue}
        />
        <img
          className="movies-search__icon movies-search__icon-search"
          src={find}
          alt="иконка поиска"
        />
      </div>
      <div className="movies-search__switch">
        <Switch
          caption="Короткометражки"
          checked={shortValue}
          onClick={() => onShortChange()}
        />
      </div>
    </form>
  );
}
