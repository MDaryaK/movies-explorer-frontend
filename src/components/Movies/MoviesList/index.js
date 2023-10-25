import MoviesCard from "../MoviesCard";
import Preview from "../../../images/preview.png";
import "./index.css";

export default function MoviesList() {
  return (
    <div className="movies__list">
      {new Array(12).fill(null).map(() => (
        <MoviesCard
          name="33 слова о дизайне"
          time="1ч 47м"
          img={Preview}
        />
      ))}
    </div>
  );
}
