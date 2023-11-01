import MoviesWrapper from "../components/Movies/MoviesWrapper";

export default function SavedMoviesPage({ data, savedFilms, onFavorite }) {
  return (
    <MoviesWrapper
      type="saved"
      data={data}
      savedFilms={savedFilms}
      onFavorite={onFavorite}
    />
  );
}
