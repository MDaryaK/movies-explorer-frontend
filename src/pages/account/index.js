import "./index.css";

export default function Account() {
  return (
    <div className="account">
      <p className="account__title">
        Привет, Виталий!
      </p>
      <div className="account__form">
        <div className="account__form__item">
          <p className="form__title">
            Имя
          </p>
          <p className="form__value">
            Виталий
          </p>
        </div>
        <span className="account__form__line" />
        <div className="account__form__item">
          <p className="form__title">
            E-mail
          </p>
          <p className="form__value">
            pochta@yandex.ru
          </p>
        </div>
      </div>
      <div className="account__actions">
        <p className="account__actions__edit">
          Редактировать
        </p>
        <p className="account__actions__logout">
          Выйти из аккаунта
        </p>
      </div>
    </div>
  );
}
