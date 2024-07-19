'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface IProps {
  name: string;
  icon: string;
  link: string;
  coloredIcon?: string;
  isHover?: boolean;
}

const Tab = ({ icon, name, link, isHover, coloredIcon }: IProps) => {
  const style = {
    transition: !isHover ? 'all 0.3s ease-in-out' : 'all 0.5s ease-in-out',
  };

  const path = usePathname();
  const isActive = path.includes(link);

  return (
    <Link
      href={link}
      style={style}
      className={`flex cursor-pointer gap-x-3 items-center
        hover:bg-sidebar-active rounded-md
        ${isHover && 'py-2 px-3'}
        ${isHover && isActive && 'text-primary bg-sidebar-active'}`}
    >
      <Image
        alt='dashboard'
        src={isActive ? coloredIcon || '' : icon}
        width={24}
        height={24}
      />
      <h1
        className={`${isHover && isActive && 'text-primary'} ${!isHover && 'text-transparent'}`}
        style={style}
      >
        {name}
      </h1>
    </Link>
  );
};

export default Tab;
