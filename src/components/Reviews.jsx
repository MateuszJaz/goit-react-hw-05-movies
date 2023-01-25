import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'api/tmdb';
import propTypes from 'prop-types';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieReviews(movieId)
      .then(response => setMovieReviews(response.data.results))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      {movieReviews.length ? (
        <ul>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        (error && <p>{error}</p>) || <p>No reviews yet</p>
      )}
    </>
  );
};

export default Reviews;

Reviews.propTypes = {
  movieReviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      author: propTypes.string,
      content: propTypes.string,
    })
  ),
};