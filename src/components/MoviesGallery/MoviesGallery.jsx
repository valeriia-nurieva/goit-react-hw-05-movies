import PropTypes from 'prop-types';
import { MoviesGalleryItem } from './MoviesGalleryItem';
import { GalleryBox, GalleryItem } from './MoviesGallery.styled';

export const MoviesGallery = ({ movies }) => {
  return (
    <GalleryBox>
      {movies.map(({ id, title, name, poster_path }) => {
        return (
          <GalleryItem key={id}>
            <MoviesGalleryItem id={id} title={title} name={name} posterPath={poster_path} />
          </GalleryItem>
        );
      })}
    </GalleryBox>
  );
};

MoviesGallery.propTypes = {
  movies: PropTypes.array.isRequired,
};
