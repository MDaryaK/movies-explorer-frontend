import SearchForm from "../../components/Movies/SearchForm";

import "./index.css";
import MoviesList from "../../components/Movies/MoviesList";
import {useContext, useEffect, useMemo, useState} from "react";
import Preloader from "../../components/Preloader/Preloader";
import {FilmsContext} from "../../contexts/Films";

export default function MoviesPage() {

  const initialFilms = useContext(FilmsContext);

  const [shortValue, setShortValue] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);

  const [films, setFilms] = useState(initialFilms.data);

  const limitedFilms = useMemo(() => {
    return [ ...(films ? films : []) ].splice(0, limit * page);
  }, [films, limit, page]);

  useEffect(() => {
    setFilms(initialFilms.data);
  }, [initialFilms]);

  useEffect(() => {
    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const filter = (search, checked) => {
    let newFilms = [ ...initialFilms.data ];

    newFilms = checked ? (
      newFilms.filter((item) => item.duration <= 40)
    ) : newFilms;

    if (search) {
      newFilms = newFilms.filter((item) => {
        const formatRuName = item.nameRU
          .toLowerCase()
          .trim();

        const formatEnName = item.nameEN
          .toLowerCase()
          .trim();

        return (
          formatRuName.indexOf(search) !== -1
          || formatEnName.indexOf(search) !== -1
        )
      });
    }

    setFilms(newFilms);
  };

  const onResize = () => {
    const width = document.getElementById("root").clientWidth;

    if (width > 1280) {
      setLimit(12);
    } else if (width > 768) {
      setLimit(8);
    } else if (width > 320) {
      setLimit(4);
    }
  };

  const handleShortChange = () => {
    const value = !shortValue;

    setShortValue(value);
    filter(searchValue, value);
  };

  const handleSearchChange = (e) => {
    const { value } = e.target;

    setSearchValue(value);

    const searchValue = value
      .toLowerCase()
      .trim();

    filter(searchValue, shortValue);
  };

  const showMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className="container">
      <div className="movies">
        <SearchForm
          shortValue={shortValue}
          searchValue={searchValue}
          onSearchValue={handleSearchChange}
          onShortChange={handleShortChange}
        />
        {!initialFilms.loading ? (
          <>
            <MoviesList data={limitedFilms} />
            {limitedFilms.length < (films?.length || 0) && (
              <button
                className="movies__load-more"
                type="button"
                onClick={showMore}
              >
                Ещё
              </button>
            )}
          </>
        ) : (
          <Preloader />
        )}
      </div>
    </div>
  );
}
