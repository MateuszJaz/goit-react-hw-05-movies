import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '338552ddf479699ffa2d32656eaccc70';

export const fetchTrendingToday = async () => {
  return await axios.get(`trending/all/day?api_key=${API_KEY}`);
};

export const fetchMovieDetails = async movie_id => {
  return await axios.get(`movie/${movie_id}?api_key=${API_KEY}`);
};

export const fetchMovieCredits = async movie_id => {
  return await axios.get(`movie/${movie_id}/credits?api_key=${API_KEY}`);
};

export const fetchMovieReviews = async movie_id => {
  return await axios.get(
    `movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
};

export const fetchMoviesWithQuery = async query => {
  return await axios.get(
    `search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
};
