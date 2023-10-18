import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../../images/logo.svg"
import user from "../../images/icons/user.svg"
import burger from "../../images/icons/burger.svg"

import "./index.css";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const isMainPath = location.pathname !== "/";

  const path = location.pathname;

  const links = [
    {
      title: "Фильмы",
      href: "/movies"
    },
    {
      title: "Сохранненые фильмы",
      href: "/saved-movies"
    },
    {
      title: "Аккаунт",
      href: "/profile"
    }
  ]

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
          <nav className={"header__nav"}>
            {links.map(((item, index) => (
              <p
                className={`
                    nav__item
                    ${path === item.href ? "nav__item-active" : ""}
                    ${isMainPath ? "header__nav-main" : ""}
                  `}
                onClick={() => navigate(item.href)}
                key={index}
              >
                {item.title}
              </p>
            )))}
          </nav>
          <button>
            <img src={user} alt="user avatar" />
          </button>
          <div className="header__burgerBtn">
            <img src={burger} alt="burger menu icon" />
          </div>
        </div>
      </div>
    </header>
  );
}
