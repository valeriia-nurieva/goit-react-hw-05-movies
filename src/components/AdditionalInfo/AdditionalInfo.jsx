import { useLocation } from 'react-router-dom';
import { AdditionalTitle, AdditionalInfoItem } from './AdditionalInfo.styled';

export const AdditionalInfo = () => {
    const location = useLocation();
    const backLinkHref = { from: location.state?.from } ?? '/';

  return (
    <>
      <AdditionalTitle>Additional information</AdditionalTitle>
      <AdditionalInfoItem
        to="cast"
        state={backLinkHref}
      >
        Cast
      </AdditionalInfoItem>
      <AdditionalInfoItem
        to="reviews"
        state={backLinkHref}
      >
        Reviews
      </AdditionalInfoItem>
    </>
  );
};
