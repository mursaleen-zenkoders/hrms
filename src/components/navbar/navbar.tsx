'use client';
import google from '@/../public/assets/icons/google.svg';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import CardFrame from '../card/card-frame';

const Navbar = () => {
  const { data } = useSession();
  return (
    <CardFrame className='text-lg flex justify-between items-center !py-3'>
      <p className='text-text-gray font-semibold text-xl'>Zenkoders</p>
      {data ? (
        <div className='flex gap-x-3 items-center'>
          <p className='text-base text-text-gray'>{data?.user?.name}</p>
          <Image
            alt={data?.user?.name || ''}
            src={data?.user?.image || ''}
            width={40}
            height={40}
            className='rounded-full'
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
