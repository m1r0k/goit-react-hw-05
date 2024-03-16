import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../../services/api";
import { Loader } from "../Loader/Loader";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const data = await getReview(movieId);
        setReviews(data);
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
      {error && <p>Something is wrong! Reload page, please.</p>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author} </h3>
              <p>{content} </p>
            </li>
          ))}
        </ul>
      )}
      {!reviews.length && <p>We don`t have any reviews for this movie</p>}
    </>
  );
};

export default MovieReviews;
