import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Image, StyledLink } from './MoviesGalleryItem.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const MoviesGalleryItem = ({ title, id, name, posterPath }) => {
  const location = useLocation();
  return (
    <StyledLink to={`/movies/${id}`} state={{ from: location }}>
      <Image src={posterPath? `${BASE_IMG_URL}${posterPath}` : 'https://i.ibb.co/4ThsTsv/poster-coming-soon.jpg'} alt="Movie poster" />
      {title || name}
    </StyledLink>
  );
};

MoviesGalleryItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  posterPath: PropTypes.string,
};
