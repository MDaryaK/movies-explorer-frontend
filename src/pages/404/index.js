import "./index.css";
import {Link} from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="container">
      <section className="not-found">
        <div className="not-found__container">
          <div className="not-found__head">
            <p className="not-found__head-title">
              404
            </p>
            <p className="not-found__head-subtitle">
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
      </section>
    </div>
  );
}
