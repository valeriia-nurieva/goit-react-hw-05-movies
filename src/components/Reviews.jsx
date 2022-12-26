import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../api';
import toast from 'react-hot-toast';

export const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    async function getActors() {
      try {
        const result = await getMovieReviews(id);
        setReviews(result);
      } catch (error) {
        toast.error('Oops! Something went wrong! Please try again.');
      }
    }
    getActors();
  }, [id]);
  const { results } = reviews;
  return (
    <section>
      <ul>
        {results ? (
          results.map(({ author, id, content }) => {
            return (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <div>We don't have any reviews for this movies</div>
        )}
      </ul>
    </section>
  );
};
