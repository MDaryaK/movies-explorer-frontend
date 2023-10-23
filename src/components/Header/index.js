import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import user from "../../images/icons/user.svg"
import burger from "../../images/icons/burger.svg"

import "./index.css";
import Logo from "../Logo";

export default function Header({ type = "default" }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isMainPath = location.pathname === "/";

  const path = location.pathname;

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
            <a className="header__profile" href="/profile">
              <span>Аккаунт</span>
              <div className="header__profile-img">
                <img src={user} alt="user avatar" />
              </div>
            </a>
          </>
        )}
        <div className="header__burger">
          <img src={burger} alt="burger icon" />
        </div>
      </div>
    </header>
  );
}
