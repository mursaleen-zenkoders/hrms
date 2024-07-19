import Image from 'next/image';
import React from 'react';
import Speaker from '@/../public/assets/icons/speaker.png';
import Link from 'next/link';

interface IProps {
  date?: string;
  title?: string;
  description?: string;
  id?: number;
}

const AnnouncementCard = ({ date, description, id, title }: IProps) => {
  return (
    // bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10
    <div className='bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border-gray-100 p-3 flex flex-col gap-y-3'>
      <div className='flex justify-between items-center w-full'>
        <Image
          alt='Icon'
          src={Speaker}
          width={30}
          height={30}
        />
        <p className='text-sm'>{date}</p>
      </div>
      <h1 className='text-light-gray'>{title}</h1>
      <p className='text-sm line-clamp-3'>{description}</p>
      <Link
        href={`/dashboard/announcements/${id}`}
        className='text-primary border-b border-primary w-fit border-dashed cursor-pointer text-sm'
      >
        Read More
      </Link>
    </div>
  );
};

export default AnnouncementCard;
