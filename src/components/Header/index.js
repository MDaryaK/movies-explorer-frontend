import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../images/logo.svg"
import user from "../../images/icons/user.svg"
import burger from "../../images/icons/burger.svg"

import "./index.css";

export default function Header({ type = "default" }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isMainPath = location.pathname === "/";

  return (
    <header className={`header ${isMainPath ? "header-main" : ""}`}>
      <div className="container">
        <div className="header__container">
          <img
            className="header__logo"
            src={logo}
            alt="site logo"
            onClick={() => navigate("/")}
          />
          {type === "default" && (
            <div className="header__actions">
              <a
                className="header__actions-link actions-link__signin"
                href="/signin"
              >
                Регистрация
              </a>
              <a
                className="header__actions-link actions-link__signup"
                href="/signup"
              >
                Войти
              </a>
            </div>
          )}
          {type === "profile" && (
            <>
              <ul className="header__nav">
                <li
                  className="header__nav-item"
                  onClick={() => navigate("/movies")}
                >
                  Фильмы
                </li>
                <li
                  className="header__nav-item"
                  onClick={() => navigate("/saved-movies")}
                >
                  Сохраненные фильмы
                </li>
              </ul>
              <div className="header__profile">
                <span>Аккаунт</span>
                <div className="header__profile-img">
                  <img src={user} alt="" />
                </div>
              </div>
              <button>
                <img src={user} alt="user avatar" />
              </button>
              <div className="header__burgerBtn">
                <img src={burger} alt="burger menu icon" />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
