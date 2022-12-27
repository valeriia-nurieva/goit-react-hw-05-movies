import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesByKeyword } from '../api';
import { Searchbox } from 'components/SearchBox/SearchBox';
import toast, { Toaster } from 'react-hot-toast';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState('');
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getMovie() {
      try {
        const { results } = await getMoviesByKeyword(query);
        results.length > 0 ? setSearchMovies(results) : toast.error(`Sorry! We couldn't find any movies matching your search query ${query}`);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getMovie();
  }, [query]);

  const handleSumbit = query => {
    setSearchParams({ query: query });
  };

  return (
    <main>
      <Searchbox onSubmit={handleSumbit} />
      {searchMovies && (
        <ul>
          {searchMovies.map(({ id, title, name }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`}>{title || name}</Link>
              </li>
            );
          })}
        </ul>
      )}
      <Toaster />
    </main>
  );
};
