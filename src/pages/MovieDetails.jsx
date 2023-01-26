import {
  useParams,
  Link,
  NavLink,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieDetails } from 'api/tmdb';
import Loader from 'components/Loader';
import style from '../pages/MovieDetails.module.css';

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
          <NavLink to={backHref}>
            <button>← Go back</button>
          </NavLink>
          <main className={style.mainSection}>
            <img
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg`
              }
              alt={`${title} movie poster`}
              width={200}
            />
            <div className={style.movieInfo}>
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
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </aside>
        </>
      ) : (
        <p>{error}</p>
      )}
    </>
  );
};

export default MovieDetails;
