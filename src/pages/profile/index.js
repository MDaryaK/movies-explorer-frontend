import "./index.css";
import {Link} from "react-router-dom";
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

export default function ProfilePage({ onSave, onSignout }) {

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
  }, [formErrors, firstRender]);

  useEffect(() => {
    if (formErrors.length !== 0) {
      return;
    }

    setDisabled(user.name === form.name.value && user.email === form.email.value);
  }, [formErrors, user, form]);

  const saveProfile = async () => {
    setDisabled(true);

    try {
      await axios.patch("/users/me", formValues);
      setIsEdit(false);
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
    }

    onSave && onSave(formValues);
  };

  const signOut = () => {
    Token.remove();
    onSignout && onSignout();
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
              disabled={!isEdit}
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
              disabled={!isEdit}
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
                onClick={signOut}
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
