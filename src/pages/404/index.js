import "./index.css";
import {Link} from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="notFountPage">
      <div className="notFountPage__container">
        <div className="notFountPage__head">
          <p className="notFountPage__head__title">
            404
          </p>
          <p className="notFountPage__head__subtitle">
            Страница не найдена
          </p>
        </div>
        <Link
          className="notFountPage__back"
          to="/"
        >
          Назад
        </Link>
      </div>
    </div>
  );
}