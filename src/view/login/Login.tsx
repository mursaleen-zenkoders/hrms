'use client';
import Image from 'next/image';

import google from '@/../public/assets/icons/google.svg';
import Logo from '@/../public/assets/images/Sidebar logo.svg';
import CardFrame from '@/components/card/card-frame';
import CardFrameTwo from '@/components/card/card-frame-two';
import { signIn } from 'next-auth/react';

const LoginView = () => {
  const onLogin = () => {
    signIn('google');
  };

  return (
    <CardFrameTwo className='h-[95dvh] flex flex-col justify-center'>
      <Image
        alt='Login'
        src={Logo}
        width={300}
        height={300}
      />
      <div className='flex justify-center items-center h-full'>
        <div className='flex flex-col gap-y-6'>
          <h1 className='font-bold text-3xl'>
            Welcome to the{' '}
            <span className='text-primary underline'>Zenkoders</span>
          </h1>
          <CardFrame className='!py-3 !px-6 mx-auto'>
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
      </div>
    </CardFrameTwo>
  );
};

export default LoginView;
{
  /* ; */
}
