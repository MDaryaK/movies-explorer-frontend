import MoviesCard from "../MoviesCard";
import "./index.css";
import formatDuration from "../../../functions/formatDuration";

export default function MoviesList({ type = "default", data, savedFilms, onFavorite }) {
  return (
    <>
      <div className="movies__list">
        {data && data.map((item, index) => {
          const { hours, minutes } = formatDuration(item.duration);

          return (
            <MoviesCard
              key={index + item.nameRU}
              type={type}
              name={item.nameRU}
              link={item.trailerLink || item.trailer}
              time={`${hours}ч ${minutes > 0 ? `${minutes}м` : ''}`}
              img={item.image?.url ? `https://api.nomoreparties.co/${item.image.url}` : item.image}
              data={item}
              isFavorite={savedFilms.data && savedFilms.data.findIndex((savedItem) => savedItem.movieId === item.id) !== -1}
              onFavorite={onFavorite}
            />
          );
        })}
      </div>
      {data && data.length === 0 && (
        <div className="movie__error">Ничего не найдено</div>
      )}
    </>
  );
}
