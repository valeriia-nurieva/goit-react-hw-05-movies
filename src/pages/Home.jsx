import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'api';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getMovies();
  }, []);

  return (
    <main>
      <ul>
        {movies.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title || name}</Link>
            </li>
          );
        })}
      </ul>
      <Toaster />
    </main>
  );
};
