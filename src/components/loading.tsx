import React from 'react';
import { TbLoaderQuarter } from 'react-icons/tb';
const LoadingView = () => {
  return (
    <div className='w-full h-[94.5dvh] flex justify-center items-center flex-col'>
      <TbLoaderQuarter
        color='#21AB70'
        size={50}
        className='animate-spin'
      />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingView;
