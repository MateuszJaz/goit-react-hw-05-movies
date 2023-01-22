import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCredits } from 'api/tmdb';

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
      {console.log(movieCredits.cast)}
      {movieCredits && !error ? (
        <ul>
          {movieCredits.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <h3>{character}</h3>
              <p>{name}</p>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                width={100}
                alt={name}
              />
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
