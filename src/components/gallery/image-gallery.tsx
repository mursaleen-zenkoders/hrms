import Image from 'next/image';
import React from 'react';

interface IProps {
  className?: string;
  images: string[];
}

const ImageGallery = ({ className, images }: IProps) => {
  return (
    <div className={`columns-md gap-0 ${className}`}>
      {images.map((image, index) => (
        <div
          className='p-2'
          key={index}
        >
          <Image
            src={image}
            width={1000}
            height={1000}
            alt=''
            loading='lazy'
            className='rounded-xl h-auto max-w-full'
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
