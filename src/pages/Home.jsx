import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchTrendingToday } from 'api/tmdb';
import propTypes from 'prop-types';

const Home = () => {
  const [trendingToday, setTrendingToday] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingToday().then(response =>
      setTrendingToday(response.data.results)
    );
  }, []);

  return (
    <>
      <main>
        <h1>Trending today</h1>
        <ul>
          {trendingToday.map(({ id, title, name }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title || name}
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default Home;

Home.propTypes = {
  trendingToday: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      title: propTypes.string,
      name: propTypes.string,
    })
  ),
};
