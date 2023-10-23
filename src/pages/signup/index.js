import {Link, useNavigate} from "react-router-dom";

import "./index.css";
import Input from "../../components/Input";
import Logo from "../../components/Logo";

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <section className="register">
        <div className="register__head">
          <Logo />
          <h1>
            Добро пожаловать!
          </h1>
        </div>
        <form className="register__form" onSubmit={() => navigate("/profile")}>
          <div className="register__form-inputs">
            <Input caption="Имя" value="Виталий" />
            <Input caption="E-mail" value="pochta@yandex.ru" />
            <Input caption="Пароль" type="password" value="Виталий" error="Что-то пошло не так..." />
          </div>
          <div className="register__form-actions">
            <button type="submit">
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
