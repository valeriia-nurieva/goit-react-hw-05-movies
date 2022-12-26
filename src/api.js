import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const API_KEY = '1d9e78535f6a01dcc41594da81e379a7';

export const getTrendingMovies = async () => {
  const response = await axios.get(`3/trending/all/day?api_key=${API_KEY}`);
  return response.data;
};

export const getMoviesByKeyword = async (query) => {
    const response = await axios.get(`3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
    return response.data;
};

export const getMovieById = async (id) => {
    const response = await axios.get(`3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return response.data;
}

export const getMovieCredits = async (id) => {
    const response = await axios.get(`3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
    return response.data;
}

export const getMovieReviews = async (id) => {
    const response = await axios.get(`3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data;    
}