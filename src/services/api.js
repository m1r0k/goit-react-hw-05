import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const API_KEY = "69a4b890d785eee6e88a5871be2f43ad";

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&language=en-US`
  );
  return data.results;
};

export const getMoviesByQuery = async (query) => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&include_adult=false&language=en-US&page=1`
  );
  return data.results;
};

export const getMovieById = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getCast = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
};

export const getReview = async (movieId) => {
  const { data } = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data.results;
};
