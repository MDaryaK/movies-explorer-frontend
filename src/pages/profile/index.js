import "./index.css";
import {Link} from "react-router-dom";

export default function ProfilePage() {
  return (
    <div className="container">
      <div className="account">
        <h1 className="account__title">
          Привет, Виталий!
        </h1>
        <div className="account-form">
          <div className="account-form__item">
            <p className="account-form__item-title">
              Имя
            </p>
            <p className="account-form__item-value">
              Виталий
            </p>
          </div>
          <div className="account-form__item">
            <p className="account-form__item-title">
              E-mail
            </p>
            <p className="account-form__item-value">
              pochta@yandex.ru
            </p>
          </div>
        </div>
        <div className="account__actions">
          <p className="account__actions-edit">
            Редактировать
          </p>
          <Link className="account__actions-logout" to="/">
            Выйти из аккаунта
          </Link>
        </div>
      </div>
    </div>
  );
}
