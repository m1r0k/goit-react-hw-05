import { useEffect, useState } from "react";
import { getTrendingMovies } from "../services/api";
import { Loader } from "../components/Loader/Loader";
import MovieList from "../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getTrendingMovies();
        setMovies(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h2>Trending movies today</h2>
      {isLoading && <Loader />}
      {error && <p>Something is wrong! Reload page, please.</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default HomePage;
