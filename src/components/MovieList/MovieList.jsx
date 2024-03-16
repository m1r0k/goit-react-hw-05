import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import unknown from "../../components/img/unknown.jpg";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {movies.map(({ id, title, original_title, poster_path }) => (
        <li key={id} className={css.item}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <div className={css.div}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : unknown
                }
                width={120}
                alt={title || original_title}
                className={css.img}
              />
              <h3 className={css.h3}>{title || original_title}</h3>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
