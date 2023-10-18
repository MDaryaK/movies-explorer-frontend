import React, { useState } from "react";

import FilmItem from "./FilmItem";

import "./index.css";

export default function Films({ filmsList }) {
  const [isShowMore, setShowMore ] = useState(false);

  const showMore = () => {
    setShowMore(!isShowMore);
  }

  return (
    <>
      <div className={`film__list ${isShowMore ? "film__list-active" : ""} `}>
        {filmsList.map((film) => (
          <FilmItem
            key={film.id}
            title={film.title}
            hours={film.hours}
            minute={film.minute}
            preview={film.preview}
            saved={film.saved}
          />
        ))}
      </div>
      {filmsList.length > 12 && (
        <p
          className={`
            films__list__moreBtn-more
            ${isShowMore ? "films__list__moreBtn-more-hide" : ""}
          `}
          onClick={showMore}
        >
          Ещё
        </p>
      )}
    </>
  );
}