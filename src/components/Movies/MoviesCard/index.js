import "./index.css";

export default function MoviesCard({ name, time, img }) {
  return (
    <div className="movies-card">
      <div className="movies-card__head">
        <h2 className="movies-card__head-name">{name}</h2>
        <p className="movies-card__head-time">{time}</p>
      </div>
      <img className="movies-card__preview" src={img} alt={name} />
    </div>
  );
}
