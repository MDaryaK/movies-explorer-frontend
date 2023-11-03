import MoviesWrapper from "../components/Movies/MoviesWrapper";

export default function MoviesPage({ data, savedFilms, onFavorite }) {
  return (
    <MoviesWrapper
      type="default"
      data={data}
      savedFilms={savedFilms}
      onFavorite={onFavorite}
    />
  );
}
