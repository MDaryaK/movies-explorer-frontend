import "./index.css";

import FavoriteIcon from "../../../images/icons/favorite.svg";
import UnfavoriteIcon from "../../../images/icons/unfavorite.svg";
import DeleteIcon from "../../../images/icons/delete.svg";
import axios from "axios";

export default function MoviesCard({ type = "default", name, link, time, img, data, isFavorite, onFavorite }) {

  const addToFavorite = async (e) => {
    e.preventDefault();

    try {
      const { data: movieCard } = await axios.post("/movies", {
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: img,
        trailer: link,
        thumbnail: img,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      });

      onFavorite && onFavorite(type, movieCard, true);
    } catch (e) {
      console.log(e);
    }
  };

  const removeFromFavorite = async (e) => {
    e.preventDefault();
    onFavorite && onFavorite(type, data, false);
  };

  return (
    <a
      className="movies-card"
      rel="noreferrer"
      target="_blank"
      href={link}
    >
      <div className="movies-card__head">
        <div className="movies-card__head-info">
          <h2 className="movies-card__head-name">{name}</h2>
          <p className="movies-card__head-time">{time}</p>
        </div>
        {type === "default" ? (
          !isFavorite ? (
            <div
              className="movies-card__head-icon"
              onClick={addToFavorite}
            >
              <img
                src={FavoriteIcon}
                alt="добавить в избранное"
              />
            </div>
          ) : (
            <div
              className="movies-card__head-icon movies-card__head-icon-active"
              onClick={removeFromFavorite}
            >
              <img
                src={UnfavoriteIcon}
                alt="убрать из избранного"
              />
            </div>
          )
        ) : (
          <div
            className="movies-card__head-icon"
            onClick={removeFromFavorite}
          >
            <img
              src={DeleteIcon}
              alt="убрать из избранного"
            />
          </div>
        )}
      </div>
      <img className="movies-card__preview" src={img} alt={name} />
    </a>
  );
}
