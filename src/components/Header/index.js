import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

import user from "../../images/icons/user.svg"
import burger from "../../images/icons/burger.svg"
import close from "../../images/icons/close.svg"

import "./index.css";
import Logo from "../Logo";

export default function Header({ type = "default" }) {

  const [burgerOpened, setBurgerOpened] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isMainPath = location.pathname === "/";

  const path = location.pathname;

  const openBurger = () => {
    setBurgerOpened(true)
  }
  const closeBurger = () => {
    setBurgerOpened(false)
  }

  return (
    <header className={`header ${isMainPath ? "header-main" : ""}`}>
      <div className="header__container">
        <Logo />
        {type === "default" && (
          <div className="header__actions">
            <a
              className="header__actions-link header__actions-link-signin"
              href="/signup"
            >
              Регистрация
            </a>
            <a
              className="header__actions-link header__actions-link-signup"
              href="/signin"
            >
              Войти
            </a>
          </div>
        )}
        {type === "profile" && (
          <>
            <ul className="header__nav">
              <li
                className={`header__nav-item ${path === "/movies" ? "header__nav-item_active" : ""}`}
                onClick={() => navigate("/movies")}
              >
                Фильмы
              </li>
              <li
                className={`header__nav-item ${path === "/saved-movies" ? "header__nav-item_active" : ""}`}
                onClick={() => navigate("/saved-movies")}
              >
                Сохраненные фильмы
              </li>
            </ul>
            <a className="header-profile" href="/profile">
              <span>Аккаунт</span>
              <span className="header-profile__img">
              <img src={user} alt="аватар пользователя" />
            </span>
            </a>
            <div className="header__burger">
              <img
                src={burger}
                alt="иконка бургера"
                onClick={openBurger}
              />
            </div>
          </>
        )}
      </div>
      <div className={`burger-menu ${burgerOpened ? "burger-menu_opened" : ""}`}>
        <div className="burger-menu__backdrop" onClick={closeBurger}></div>
        <div className="burger-menu__content">
          <img
            className="burger-menu__close"
            src={close}
            alt="кнопка закрытия"
            onClick={closeBurger}
          />
          <ul className="burger-menu__list">
            <li
              className={`burger-menu__list-item ${path === "/" ? "burger-menu__list-item_active" : ""}`}
              onClick={() => navigate("/")}
            >
             Главная
            </li>
            <li
              className={`burger-menu__list-item ${path === "/movies" ? "burger-menu__list-item_active" : ""}`}
              onClick={() => navigate("/movies")}
            >
             Фильмы
            </li>
            <li
              className={`burger-menu__list-item ${path === "/saved-movies" ? "burger-menu__list-item_active" : ""}`}
              onClick={() => navigate("/saved-movies")}
            >
              Сохранённые фильмы
            </li>
          </ul>
          <a className="header-profile" href="/profile">
            <span>Аккаунт</span>
            <span className="header-profile__img">
              <img src={user} alt="аватар пользователя" />
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
