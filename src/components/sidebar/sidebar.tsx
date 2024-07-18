'use client';

// Assets
import LogoutIcon from '@/../public/assets/icons/logout.svg';
import LOGO from '@/../public/assets/images/logo.png';
import FullLogo from '@/../public/assets/images/Sidebar logo.svg';

// Utilities
import { cn } from '@/lib/utils';

// Next Auth
import { signOut, useSession } from 'next-auth/react';

// Next && React
import Image from 'next/image';
import { useState } from 'react';

// Component
import Tab from './tab';

// Constants
import { tabs } from '@/constant/sidebar';

const Sidebar = () => {
  const { data: session } = useSession();

  const [onHover, setOnHover] = useState(false);

  return (
    <div
      className={cn(
        'p-4 hover:p-6',
        '!h-full',
        'custom-transition',
        'flex flex-col justify-between',
        'bg-card-black',
      )}
      onFocus={() => {}}
      onMouseOver={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <Image
        alt='logo'
        src={onHover ? FullLogo : LOGO}
        width={onHover ? 153 : 28}
        height={28}
      />

      <div
        className={`space-y-6 w-full ${onHover && 'min-w-[190px]'} text-base`}
      >
        {tabs.map((item, index) => (
          <Tab
            isHover={onHover}
            key={index}
            {...item}
          />
        ))}
      </div>

      {session && (
        <button
          className={`flex cursor-pointer gap-x-3 items-center hover:bg-sidebar-active rounded-md  ${onHover && 'py-2 px-3 min-w-[190px]'}`}
          onClick={() => signOut()}
          style={{
            color: onHover ? '#9EA9AA' : 'transparent',
            transition: !onHover
              ? 'all 0.3s ease-in-out'
              : 'all 1s ease-in-out',
          }}
        >
          <Image
            alt='dashboard'
            src={LogoutIcon}
            width={24}
            height={24}
          />
          <h1>Logout</h1>
        </button>
      )}
    </div>
  );
};

export default Sidebar;
