'use client';
import Image from 'next/image';

import google from '@/../public/assets/icons/google.svg';
import CardFrame from '@/components/card/card-frame';
import { signIn } from 'next-auth/react';

const LoginView = () => {
  const onLogin = () => {
    signIn('google');
  };

  return (
    <div className='h-full flex justify-center items-center'>
      <CardFrame className='!py-3 !px-6'>
        <button
          className='flex items-center gap-x-3'
          onClick={onLogin}
        >
          <Image
            alt='Login'
            src={google}
            width={24}
            height={24}
          />
          <p className='text-text-gray'>Login With Google</p>
        </button>
      </CardFrame>
    </div>
  );
};

export default LoginView;
