import SearchForm from "../../components/Movies/SearchForm";

import "./index.css";
import MoviesList from "../../components/Movies/MoviesList";

export default function MoviesPage() {
  return (
    <div className="container">
      <div className="movies">
        <SearchForm />
        <MoviesList />
        <button className="movies__load-more" type="button">Ещё</button>
      </div>
    </div>
  );
}
