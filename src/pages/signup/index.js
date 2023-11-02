import {Link, useNavigate} from "react-router-dom";
import { object, string } from 'yup';

import "./index.css";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import useForm from "../../hooks/useForm";
import axios from "axios";
import {useEffect, useState} from "react";
import {useFirstRender} from "../../hooks/useFirstRender";
import Token from "../../utils/Token";

const signupSchema = object({
  name: string()
    .min(2, "Минимально 2 символа")
    .max(30, "Максимально 30 символов")
    .required("Поле обязательно для заполнения"),
  email: string()
    .email("Email не валидный")
    .required("Поле обязательно для заполнения"),
  password: string()
    .required("Поле обязательно для заполнения"),
});

export default function SignupPage({ onSignup }) {

  const { form, formValues, formErrors, handleInputChange } = useForm(signupSchema);

  const firstRender = useFirstRender();

  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (firstRender) {
      return;
    }

    setError("");
    setDisabled(
      formErrors.length !== 0
      || (
        form.name.value.length === 0
        || form.email.value.length === 0
        || form.password.value.length === 0
      )
    );
  }, [formErrors, firstRender, form]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisabled(true);

    try {
      await axios.post("/signup", formValues);

      const { data: { token } } = await axios.post("/signin", {
        email: formValues.email,
        password: formValues.password
      });

      Token.set(token);
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
    }

    onSignup && onSignup(formValues);
  };

  return (
    <div className="container">
      <section className="register">
        <div className="register__head">
          <Logo />
          <h1>Добро пожаловать!</h1>
        </div>
        <form className="register__form" onSubmit={handleSubmit}>
          <div className="register__form-inputs">
            <Input
              name="name"
              caption="Имя"
              value={form.name.value}
              error={form.name.error}
              onChange={handleInputChange}
            />
            <Input
              name="email"
              caption="E-mail"
              value={form.email.value}
              error={form.email.error}
              onChange={handleInputChange}
            />
            <Input
              name="password"
              caption="Пароль"
              type="password"
              value={form.password.value}
              error={form.password.error}
              onChange={handleInputChange}
            />
          </div>
          <div className="register__form-actions">
            {error && (
              <p className="register__form-actions__error">{error}</p>
            )}
            <button type="submit" disabled={disabled}>
              Зарегистрироваться
            </button>
            <p className="register__form-actions__create">
              Уже зарегистрированы? <Link to="/signin">Войти</Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
