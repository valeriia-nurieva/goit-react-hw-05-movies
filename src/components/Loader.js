import { Rings } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Rings
      height="80"
      width="80"
      color="#FF4500"
      radius="6"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: ' 50%',
        transform: 'translate(-50%, -50%)',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};
