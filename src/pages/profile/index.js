import "./index.css";
import {Link, redirect, useNavigate} from "react-router-dom";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from "../../contexts/CurrentUser";
import {object, string} from "yup";
import useForm from "../../hooks/useForm";
import Token from "../../utils/Token";
import {useFirstRender} from "../../hooks/useFirstRender";

const profileSchema = object({
  name: string()
    .min(2, "Минимально 2 символа")
    .max(30, "Максимально 30 символов")
    .required("Поле обязательно для заполнения"),
  email: string()
    .email("Email не валидный")
    .required("Поле обязательно для заполнения")
});

export default function ProfilePage() {

  const user = useContext(CurrentUserContext);

  const { form, formValues, formErrors, handleInputChange } = useForm(profileSchema, {
    name: user.name,
    email: user.email
  });

  const firstRender = useFirstRender();

  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    if (firstRender) {
      return;
    }

    setError("");
    setDisabled(formErrors.length !== 0);
  }, [formErrors]);

  const saveProfile = () => {

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
              name="name"
              type="text"
              value={form.name.value}
              onChange={handleInputChange}
            />
          </div>
          <div className="account-form__item">
            <p className="account-form__item-title">
              E-mail
            </p>
            <input
              className="account-form__item-value"
              name="email"
              type="email"
              value={form.email.value}
              onChange={handleInputChange}
            />
          </div>
        </form>
        <div className="account__actions">
          {isEdit ? (
            <>
              {error && (
                <p className="account__actions-error">{error}</p>
              )}
              {formErrors.length !== 0 && (
                <p className="account__actions-error">{formErrors.join(" ")}</p>
              )}
              <button
                className="account__actions-save"
                disabled={disabled}
                onClick={saveProfile}
              >
                Сохранить
              </button>
            </>
          ) : (
            <>
              <div
                className="account__actions-edit"
                onClick={() => setIsEdit(true)}
              >
                Редактировать
              </div>
              <Link
                className="account__actions-logout"
                to="/"
                onClick={() => Token.remove()}
              >
                Выйти из аккаунта
              </Link>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
