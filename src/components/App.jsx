import { Routes, Route, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/Movies/MovieDetails';
import Cast from '../pages/Movies/Cast';
import Reviews from '../pages/Movies/Reviews';
import NotFound from '../pages/NotFound';

const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
