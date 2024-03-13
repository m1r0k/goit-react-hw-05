import { NavLink, useLocation } from "react-router-dom";

const MovieList = ({ movies }) => {
  const location = useLocation();
  // console.log(movies);

  return (
    <ul>
      {movies.map(({ id, title, original_title }) => (
        <li key={id}>
          <NavLink to={`/movies/${id}`} state={{ from: location }}>
            <h2>{title || original_title}</h2>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
