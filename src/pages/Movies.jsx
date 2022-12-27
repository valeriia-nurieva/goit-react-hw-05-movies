import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getMoviesByKeyword } from '../api';
import { Searchbox } from 'components/SearchBox/SearchBox';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Loader } from 'components/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getMovie() {
      try {
        setIsLoading(true);
        const { results } = await getMoviesByKeyword(query);
        results.length > 0
          ? setSearchMovies(results)
          : toast.error(
              `Sorry! We couldn't find any movies matching your search query ${query}`
          );
        setIsLoading(false);
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
      {searchMovies && <MoviesGallery movies={searchMovies} />}
      {isLoading && <Loader />}
      <Toaster />
    </main>
  );
};

export default Movies;
