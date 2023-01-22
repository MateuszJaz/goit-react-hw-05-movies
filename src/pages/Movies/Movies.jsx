import { Link } from 'react-router-dom';
import { fetchMoviesWithQuery } from 'api/tmdb';
import { useEffect } from 'react';
import { useState } from 'react';

const Movies = () => {
  const [query, setQuery] = useState(null);
  const [searchResults, setSearchResult] = useState(null);

  useEffect(() => {
    query &&
      fetchMoviesWithQuery(query)
        .then(response => setSearchResult(response.data.results))
        .catch(error => console.log(error));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.search.value);
    e.target.reset();
  };

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          className="searchFormInput"
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
        />
        <button type="submit" className="searchFormButton">
          <span className="searchFormButtonLabel">Search</span>
        </button>
      </form>
      {searchResults && searchResults.length !== 0 ? (
        <ul>
          {searchResults.map(({ id, title, name }) => {
            return (
              <li key={id}>
                <Link to={`${id}`}>{title || name}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        searchResults && <p>Nothing found</p>
      )}
    </>
  );
};

export default Movies;
