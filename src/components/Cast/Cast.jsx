import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getMovieCredits } from '../../api';
import { Loader } from 'components/Loader';
import { Image, Thumb, CastBox, CastItem } from './Cast.styled';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    async function getActors() {
      try {
        setIsLoading(true);
        const result = await getMovieCredits(id);
        setActors(result);
        setIsLoading(false);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getActors();
  }, [id]);

  return (
    <section>
      <CastBox>
        {actors.cast &&
          actors.cast.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                <Thumb>
                <Image src={profile_path? `${BASE_IMG_URL}${profile_path}` : 'https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg'} alt="Actor"/>
                </Thumb>
                <p>{name}</p>
                <p>{character}</p>
              </CastItem>
            );
          })}
      </CastBox>
    {isLoading && <Loader />}
    </section>
  );
};

export default Cast;