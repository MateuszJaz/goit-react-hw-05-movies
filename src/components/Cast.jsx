import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'api/tmdb';
import propTypes from 'prop-types';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCredits, setMovieCredits] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieCredits(movieId)
      .then(response => setMovieCredits(response.data.cast))
      .catch(error => setError(error.message));
  }, [movieId]);

  return (
    <>
      {movieCredits && !error ? (
        <ul>
          {movieCredits.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                    : `https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/100px-Placeholder_no_text.svg.png`
                }
                width={100}
                alt={name}
              />
              <h4>{name}</h4>
              <p>as: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
};

export default Cast;

Cast.propTypes = {
  movieCredits: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      name: propTypes.string,
      character: propTypes.string,
      profile_path: propTypes.string,
    })
  ),
};
