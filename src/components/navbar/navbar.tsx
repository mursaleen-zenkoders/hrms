'use client';
import google from '@/../public/assets/icons/google.svg';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import CardFrame from '../card/card-frame';

const Navbar = ({ heading }: { heading?: string }) => {
  const { data } = useSession();
  return (
    <CardFrame className='text-lg flex justify-between items-center !py-3 sticky top-0 z-50'>
      <p className='font-bold text-base md:text-2xl'>
        {heading ? heading : 'Zenkoders'}
      </p>
      {data ? (
        <div className='flex gap-x-3 items-center'>
          <Image
            alt={data?.user?.name || ''}
            src={data?.user?.image || ''}
            width={40}
            height={40}
            className='rounded-full w-[34px] h-[34px] md:w-[50px] md:h-[50px]'
          />
        </div>
      ) : (
        <button onClick={() => signIn('google')}>
          <abbr title='Sign in with Google'>
            <Image
              src={google}
              width={24}
              height={24}
              alt='Sign in with Google'
            />
          </abbr>
        </button>
      )}
    </CardFrame>
  );
};

export default Navbar;
