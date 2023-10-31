import "./index.css";
import {Link, redirect, useNavigate} from "react-router-dom";
import axios from "axios";

export default function ProfilePage() {

  const logout = () => {
    delete axios.defaults.headers["authorization"];
    localStorage.removeItem("token");
  };

  return (
    <div className="container">
      <section className="account">
        <h1 className="account__title">
          Привет, Виталий!
        </h1>
        <form className="account-form">
          <div className="account-form__item">
            <p className="account-form__item-title">
              Имя
            </p>
            <input
              className="account-form__item-value"
              type="text"
              value="Виталий"
            />
          </div>
          <div className="account-form__item">
            <p className="account-form__item-title">
              E-mail
            </p>
            <input
              className="account-form__item-value"
              type="email"
              value="pochta@yandex.ru"
            />
          </div>
        </form>
        <div className="account__actions">
          <Link className="account__actions-edit" to="/">
            Редактировать
          </Link>
          <Link
            className="account__actions-logout"
            to="/"
            onClick={logout}
          >
            Выйти из аккаунта
          </Link>
        </div>
      </section>
    </div>
  );
}
