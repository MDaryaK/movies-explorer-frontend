import "./index.css";
import {useEffect, useMemo, useState} from "react";
import SearchForm from "../SearchForm";
import MoviesList from "../MoviesList";
import Preloader from "../../Preloader/Preloader";

export default function MoviesWrapper({ type = "default", data, savedFilms, onFavorite }) {

  const [shortValue, setShortValue] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);

  const [films, setFilms] = useState(data.data);

  const limitedFilms = [ ...(films ? films : []) ].splice(0, limit * page);

  useEffect(() => {
    setFilms(data.data);
  }, [data]);

  useEffect(() => {
    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const filter = (search, checked) => {
    let newFilms = [ ...data.data ];

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
      <div className="movies-wrapper">
        <SearchForm
          shortValue={shortValue}
          searchValue={searchValue}
          onSearchValue={handleSearchChange}
          onShortChange={handleShortChange}
        />
        {(!data.loading && !savedFilms.loading) ? (
          <>
            <MoviesList
              type={type}
              data={limitedFilms}
              savedFilms={savedFilms}
              onFavorite={onFavorite}
            />
            {limitedFilms.length < (films?.length || 0) && (
              <button
                className="movies-wrapper__load-more"
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