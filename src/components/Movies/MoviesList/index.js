import MoviesCard from "../MoviesCard";
import "./index.css";
import formatDuration from "../../../functions/formatDuration";

export default function MoviesList({ data }) {
  return (
    <div className="movies__list">
      {data && data.map((item) => {
        const { hours, minutes } = formatDuration(item.duration);

        return (
          <MoviesCard
            key={item.id}
            name={item.nameRU}
            time={`${hours}ч ${minutes > 0 ? `${minutes}м` : ''}`}
            img={`https://api.nomoreparties.co/${item.image.url}`}
          />
        );
      })}
    </div>
  );
}
