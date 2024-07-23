import Speaker from '@/../public/assets/icons/speaker.png';
import { AnnouncementAcknowledgeMutationHook } from '@/services/react-query-client/announcement/post-announcement-acknowledge';
import moment from 'moment';
import Image from 'next/image';
import Link from 'next/link';
import { BiLike, BiSolidLike } from 'react-icons/bi';

interface IProps {
  updated_at?: string;
  title?: string;
  description?: string;
  id: number;
}

const AnnouncementCard = ({ description, id, title, updated_at }: IProps) => {
  const { mutateAsync } = AnnouncementAcknowledgeMutationHook(id);

  const likeHandler = () => {
    mutateAsync({ announcement_id: id });
  };

  return (
    <div className='bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-10 border-gray-100 p-3 flex flex-col justify-between gap-y-3'>
      <div className='space-y-3'>
        <div className='flex justify-between items-center w-full'>
          <Image
            alt='Icon'
            src={Speaker}
            width={30}
            height={30}
          />
          <p className='text-sm'>{moment(updated_at).format('LLL')}</p>
        </div>
        <h1 className='text-light-gray'>{title}</h1>
        <p className='text-sm line-clamp-3'>{description}</p>
      </div>
      <div className='flex justify-between items-center'>
        <Link
          href={`/dashboard/announcements/${id}`}
          className='text-primary border-b border-primary w-fit border-dashed cursor-pointer text-sm'
        >
          Read More
        </Link>
        {title ? (
          <BiSolidLike
            onClick={() => likeHandler()}
            className='text-primary cursor-pointer'
            size={20}
          />
        ) : (
          <BiLike
            onClick={() => likeHandler()}
            className='text-primary cursor-pointer'
            size={20}
          />
        )}
      </div>
    </div>
  );
};

export default AnnouncementCard;
