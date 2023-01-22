import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'api/tmdb';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(response => setMovieDetails(response.data))
      .catch(error => setError(error.message));
  }, [movieId]);

  const { title, vote_average, overview, genres, poster_path, release_date } =
    movieDetails;
  return (
    <>
      {console.log(movieDetails)}
      {movieDetails && !error ? (
        <>
          <main>
            <img
              src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
              alt={`${title} movie poster`}
            />
            <div>
              <h2>
                {title} {`(${release_date.slice(0, 4)})`}
              </h2>
              <p>User Score: {Math.round(vote_average * 10)}%</p>
              <h3>Overview:</h3>
              <p>{overview}</p>
              <h4>Genres</h4>
              <p>{genres && genres.map(({ name }) => ` ${name}`)}</p>
            </div>
          </main>
          <hr />
          <aside>
            <p>Additional information</p>

            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
            <hr />

            <Outlet />
          </aside>
        </>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
};

export default MovieDetails;
