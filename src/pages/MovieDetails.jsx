import {
  useParams,
  Link,
  NavLink,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieDetails } from 'api/tmdb';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState('');
  const [error, setError] = useState(null);

  const location = useLocation();
  const backHref = location.state?.from ?? '/movies';
  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(response => setMovieDetails(response.data))
      .catch(error => setError(error.message));
  }, [movieId]);

  const { title, vote_average, overview, genres, poster_path, release_date } =
    movieDetails;
  return (
    <>
      {movieDetails && !error ? (
        <>
          <NavLink to={backHref} /*className={styles.link*/>← Go back</NavLink>
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
              <p>{genres && genres.map(({ name }) => ` ${name},`)}</p>
            </div>
          </main>
          <hr />
          <aside>
            <p>Additional information</p>

            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`} state={location.state}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`} state={location.state}>
                  Reviews
                </Link>
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
