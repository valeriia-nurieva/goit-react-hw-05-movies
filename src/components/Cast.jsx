import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../api';
import toast from 'react-hot-toast';

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500';

const Cast = () => {
  const { id } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    async function getActors() {
      try {
        const result = await getMovieCredits(id);
        setActors(result);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getActors();
  }, [id]);

  return (
    <section>
      <ul>
        {actors.cast &&
          actors.cast.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id}>
                <img src={`${BASE_IMG_URL}${profile_path}`} alt="Actor" />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Cast;