import { useParams } from 'react-router-dom';
import { useEffect, useState, Suspense  } from 'react';
import { Link, Outlet, useLocation  } from 'react-router-dom';
import { getMovieById } from '../api';
import toast, { Toaster } from 'react-hot-toast';
import { BsArrowLeftShort } from 'react-icons/bs';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  useEffect(() => {
    async function getMovie() {
      try {
        const result = await getMovieById(id);
        setMovie(result);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getMovie();
  }, [id]);
  const { title, poster_path, vote_average, genres, overview } = movie;
  const backLinkHref = location.state?.from ?? "/";
  return (
    <div>
      <Link to={backLinkHref}>
        <BsArrowLeftShort />
        Go back
      </Link>
      <h1>{title}</h1>
      <img src={`${BASE_IMG_URL}${poster_path}`} alt="Movie poster" />
      <p>User Score: {vote_average}</p>
      <p>Overview: {overview}</p>
      <p>Genres: {genres && genres.map(genre => genre.name).join(', ')}</p>
      <ul>
        <p>Additional information</p>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
       <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
      <Toaster />
    </div>
  );
};

export default MovieDetails;