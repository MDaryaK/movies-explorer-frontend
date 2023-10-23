import {Link, useNavigate} from "react-router-dom";

import "./index.css";
import Input from "../../components/Input";
import Logo from "../../components/Logo";

export default function SigninPage() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="login">
        <div className="login__head">
          <Logo />
          <h1>
            Рады видеть!
          </h1>
        </div>
        <form className="login__form" onSubmit={() => navigate("/profile")}>
          <div className="login__form-inputs">
            <Input caption="E-mail" value="pochta@yandex.ru" />
            <Input caption="Пароль" type="password" />
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
      </div>
    </div>
  );
}
