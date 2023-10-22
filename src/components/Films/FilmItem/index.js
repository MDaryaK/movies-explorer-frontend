import React, {useState} from "react";

import unsaved_ico from "./img/unsaved.svg";
import saved_ico from "./img/saved.svg";

import "./index.css";

export default function FilmItem({ title, hours, minute, preview, saved }) {
  const [isSaved, setIsSaved] = useState(saved);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="film">
      <div className="film__head">
        <p className="film__head__title">
          { title }
        </p>
        <p className="film__head__time">
          {hours}ч {minute}м
        </p>
        <img
          className="film__head__saved"
          src={!isSaved ? unsaved_ico : saved_ico}
          alt="save icon"
          onClick={handleSaveClick}
        />
      </div>
      <img
        src={preview}
        alt="film preview"
      />
    </div>
  );
}
