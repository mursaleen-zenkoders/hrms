'use client';

// React & Next Imports
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Components
import CardFrame from '../card/card-frame';

// Constant
import { tabs } from '@/constant/sidebar';

const BottomBar = () => {
  const path = usePathname();
  return (
    <CardFrame className='max-h-[20px] justify-between sticky bottom-5 md:hidden flex'>
      {tabs.map((tab, index) => {
        const isActive = path.includes(tab.link);
        return (
          <Link
            href={tab.link}
            key={index}
            className={`flex items-center flex-col justify-center relative ${isActive && 'bg-sidebar-active '}`}
          >
            <Image
              alt='icon'
              src={isActive ? tab.coloredIcon : tab.icon}
              width={24}
              height={24}
            />
          </Link>
        );
      })}
    </CardFrame>
  );
};

export default BottomBar;
