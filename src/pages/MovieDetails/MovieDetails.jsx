import { useEffect, useState, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from '../../api';
import toast, { Toaster } from 'react-hot-toast';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Loader } from 'components/Loader';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import {
  BackLinkHref,
  MovieCard,
  Image,
  Title,
  InfoTitle,
  Info,
} from './MovieDetails.styles';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    async function getMovie() {
      try {
        setIsLoading(true);
        const result = await getMovieById(id);
        setMovie(result);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getMovie();
  }, [id]);
  const { title, poster_path, vote_average, genres, overview } = movie;
  const backLinkHref = location.state?.from ?? '/';
  const totalVoteAverage = 10;
  const percent = (vote_average * 100) / totalVoteAverage;
  return (
    <>
      <BackLinkHref to={backLinkHref}>
        <BsArrowLeftShort />
        Go back
      </BackLinkHref>
      <MovieCard>
        <Image
          src={
            poster_path
              ? `${BASE_IMG_URL}${poster_path}`
              : 'https://i.ibb.co/4ThsTsv/poster-coming-soon.jpg'
          }
          alt="Movie poster"
        />
        <div>
          <Title>{title}</Title>
          <InfoTitle>
            User Score: <Info>{percent.toFixed()}%</Info>
          </InfoTitle>
          <InfoTitle>
            Overview: <Info> {overview}</Info>
          </InfoTitle>
          <InfoTitle>
            Genres:{' '}
            <Info>{genres && genres.map(genre => genre.name).join(', ')}</Info>
          </InfoTitle>
        </div>
      </MovieCard>
      <AdditionalInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {isLoading && <Loader />}
      <Toaster />
    </>
  );
};

export default MovieDetails;
