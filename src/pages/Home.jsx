import toast, { Toaster } from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'api';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Loader } from 'components/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        const { results } = await getTrendingMovies();
        setMovies(results);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getMovies();
  }, []);

  return (
    <main>
      <MoviesGallery movies={movies} />
      {isLoading && <Loader />}
      <Toaster />
    </main>
  );
};

export default Home;
