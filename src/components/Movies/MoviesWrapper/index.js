import "./index.css";
import {useEffect, useState} from "react";
import SearchForm from "../SearchForm";
import MoviesList from "../MoviesList";
import Preloader from "../../Preloader/Preloader";
import {LIMIT_1280, LIMIT_360, LIMIT_768} from "../../../consts/limits";
import {DURATION} from "../../../consts/app";

export default function MoviesWrapper({ type = "default", data, savedFilms, onFavorite }) {

  const [shortValue, setShortValue] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);

  const [films, setFilms] = useState(data.data);

  const limitedFilms = [ ...(films ? films : []) ].splice(0, limit * page);

  useEffect(() => {
    setFilms(data.data);

    if (data.data) {
      filter(searchValue, shortValue);
    }
  }, [data]);

  useEffect(() => {
    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const searchString = localStorage.getItem("search");

    if (!searchString) {
      return;
    }

    const { search, checked } = JSON.parse(searchString);

    setSearchValue(search);
    setShortValue(checked);
  }, []);

  const filter = (search, checked) => {
    let newFilms = [ ...data.data ];

    newFilms = checked ? (
      newFilms.filter((item) => item.duration <= DURATION)
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

    localStorage.setItem("search", JSON.stringify({
      checked,
      search
    }));

    setPage(1);
    setFilms(newFilms);
  };

  const onResize = () => {
    const width = document.getElementById("root").clientWidth;

    if (width > 900) {
      setLimit(LIMIT_1280);
    } else if (width > 600) {
      setLimit(LIMIT_768);
    } else {
      setLimit(LIMIT_360);
    }

    setPage(1);
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
