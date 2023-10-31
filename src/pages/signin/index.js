import {Link, useNavigate} from "react-router-dom";

import "./index.css";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import useForm from "../../hooks/useForm";
import axios from "axios";
import {object, string} from "yup";

const signinSchema = object({
  email: string()
    .email("Email не валидный")
    .required("Поле обязательно для заполнения"),
  password: string()
    .required("Поле обязательно для заполнения"),
});

export default function SigninPage({ onSignin }) {

  const { form, formValues, validate, handleInputChange } = useForm(signinSchema);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (await validate()) {
      return;
    }

    onSignin && onSignin(formValues);
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
            <button type="submit">
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
