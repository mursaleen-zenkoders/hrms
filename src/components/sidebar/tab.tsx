'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface IProps {
  name: string;
  icon: string;
  link: string;
}

const Tab = ({ icon, name, link }: IProps) => {
  const path = usePathname();
  return (
    <Link
      href={link || ''}
      className={`flex cursor-pointer gap-x-3 items-center  ${link == path ? '' : ''}`}
    >
      <Image
        alt='dashboard'
        src={icon}
        width={24}
        height={24}
      />
      <h1>{name}</h1>
    </Link>
  );
};

export default Tab;
