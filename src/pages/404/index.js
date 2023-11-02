import "./index.css";
import {Link, useNavigate} from "react-router-dom";

export default function NotFoundPage() {

  const navigate = useNavigate()

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
          <p className="not-found__back" onClick={() => navigate(-1)}>
            Назад
          </p>
        </div>
      </section>
    </div>
  );
}
