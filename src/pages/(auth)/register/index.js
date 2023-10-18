import { Link } from "react-router-dom";

import logo from "../../../images/logo.svg";

import "./index.css";

export default function Register() {
  return (
    <div className="register">
      <form className="register__form">
        <div>
          <div className="register__form__head">
            <img src={logo} alt=""/>
            <p>
              Добро пожаловать!
            </p>
          </div>
          <div className="register__form__actions">
            <div className="input">
              <label htmlFor="name">
                Имя
              </label>
              <input
                id="name"
                type="text"
              />
            </div>
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
              <p className="input__password error">
                Что-то пошло не так...
              </p>
            </div>
          </div>
        </div>
        <div  className="register__form__entry">
          <button>
            Зарегистрироваться
          </button>
          <div className="register__form__createAccount">
            <p>
              Уже зарегистрированы? <Link to="/auth">Войти</Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
