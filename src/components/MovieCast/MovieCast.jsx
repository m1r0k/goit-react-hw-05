import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { getCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [actor, setActor] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getCast(movieId);
        setActor(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something is wrong! Reload.</p>}
      {actor.length > 0 && (
        <ul>
          {actor.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                alt={name}
              />
              <div>
                <p>{name ? name : "No information available"} </p>
                <p>{character ? character : "No information available"} </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
