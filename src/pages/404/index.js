import "./index.css";
import {Link} from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <div className="not-found__head">
          <p className="not-found__head__title">
            404
          </p>
          <p className="not-found__head__subtitle">
            Страница не найдена
          </p>
        </div>
        <Link
          className="not-found__back"
          to="/"
        >
          Назад
        </Link>
      </div>
    </div>
  );
}
