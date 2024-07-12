'use client';
// Assets
import DashboardIcon from '@/../public/assets/icons/dashboard.svg';
import LogoutIcon from '@/../public/assets/icons/logout.svg';

// Utilities
import { cn } from '@/lib/utils';

// Components
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Tab from './tab';

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div
      className={cn(
        'p-4 hover:p-6',
        '!h-full',
        'custom-transition',
        'flex flex-col justify-between',
        'bg-card-black text-transparent hover:text-text-gray text-base',
      )}
    >
      <div className='space-y-6'>
        {/* Dashboard */}
        <Tab
          icon={DashboardIcon}
          name='Dashboard'
          link='/'
        />
      </div>

      {session && (
        <button
          className={`flex cursor-pointer gap-x-3 items-center `}
          onClick={() => signOut()}
        >
          <Image
            alt='dashboard'
            src={LogoutIcon}
            width={24}
            height={24}
            color='#EFEFEF'
          />
          <h1>Logout</h1>
        </button>
      )}
    </div>
  );
};

export default Sidebar;
