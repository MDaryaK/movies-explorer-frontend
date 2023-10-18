import { Link } from "react-router-dom";

import logo from "../../../images/logo.svg";

import "./index.css";

export default function Auth() {
  return (
    <div className="auth">
      <form className="auth__form">
        <div>
          <div className="auth__form__head">
            <img src={logo} alt="" />
            <p>
              Рады видеть!
            </p>
          </div>
          <div className="auth__form__actions">
            <div className="input">
              <label htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                type="text"
              />
            </div>
            <div className="input">
              <label htmlFor="password">
                Пароль
              </label>
              <input
                id="password"
                type="password"
              />
            </div>
          </div>
        </div>
        <div  className="auth__form__entry">
          <button>
            Войти
          </button>
          <div className="auth__form__createAccount">
            <p>
              Ещё не зарегистрированы? <Link to="/register">Регистрация</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
