'use client';

// Components
import CardFrame from '../card/card-frame';

// Next Auth
import { useSession } from 'next-auth/react';

// Icon
import { IoIosArrowBack } from 'react-icons/io';

// React
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Navbar = ({
  heading,
  isBackBtn,
}: {
  heading?: string;
  isBackBtn?: boolean;
}) => {
  const { data } = useSession();
  const router = useRouter();

  return (
    <CardFrame className='text-lg flex justify-between items-center !py-3 sticky top-0 z-50'>
      {isBackBtn && (
        <button
          className='text-primary flex items-center text-lg font-semibold'
          onClick={() => router.back()}
        >
          <IoIosArrowBack size={24} /> Back
        </button>
      )}
      <p className='font-bold text-base md:text-2xl'>
        {heading ? heading : 'Zenkoders'}
      </p>

      <div className='flex gap-x-3 items-center'>
        <Image
          alt={data?.user?.name || ''}
          src={data?.user?.image || ''}
          width={40}
          height={40}
          className='rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px]'
        />
      </div>
    </CardFrame>
  );
};

export default Navbar;
