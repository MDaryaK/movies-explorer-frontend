import {Link} from "react-router-dom";

import "./index.css";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import useForm from "../../hooks/useForm";
import axios from "axios";
import {object, string} from "yup";
import {useEffect, useState} from "react";
import {useFirstRender} from "../../hooks/useFirstRender";
import Token from "../../utils/Token";

const signinSchema = object({
  email: string()
    .email("Email не валидный")
    .required("Поле обязательно для заполнения"),
  password: string()
    .required("Поле обязательно для заполнения"),
});

export default function SigninPage({ onSignin }) {

  const { form, formValues, formErrors, handleInputChange } = useForm(signinSchema);

  const firstRender = useFirstRender();

  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (firstRender) {
      return;
    }

    setError("");
    setDisabled(
      formErrors.length !== 0
      || (
        form.email.value.length === 0
        || form.password.value.length === 0
      )
    );
  }, [formErrors, firstRender, form]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setDisabled(true);

    try {
      const { data: { token } } = await axios.post("/signin", formValues);

      Token.set(token);

      onSignin && onSignin(token);
    } catch (e) {
      console.log(e);
      setError(e.response.data.message);
    }
  };

  return (
    <div className="container">
      <section className="login">
        <div className="login__head">
          <Logo />
          <h1>Рады видеть!</h1>
        </div>
        <form className="login__form" onSubmit={handleSubmit}>
          <div className="login__form-inputs">
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
          <div className="login__form-actions">
            {error && (
              <p className="login__form-actions__error">{error}</p>
            )}
            <button type="submit" disabled={disabled}>
              Войти
            </button>
            <p className="login__form-actions__create">
              Ещё не зарегистрированы? <Link to="/signup">Регистрация</Link>
            </p>
          </div>
        </form>
      </section>
    </div>
  );
}
