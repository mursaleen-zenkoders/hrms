import Image from 'next/image';
import React from 'react';

interface AnnualLeaveCardProps {
  className?: string;
  bgColor?: string;
  icon: string;
  title: string;
  count: number;
}

const AnnualLeaveCard = ({
  bgColor,
  className,
  icon,
  title,
  count,
}: AnnualLeaveCardProps) => {
  return (
    <div className={`flex gap-x-2 ${className}`}>
      <div
        className='w-[51px] h-[51px] rounded-lg flex justify-center items-center'
        style={{ backgroundColor: bgColor }}
      >
        <Image
          alt='icon'
          src={icon}
          width={32}
          height={32}
        />
      </div>
      <div>
        <p className='uppercase'>{title}</p>
        <h1 className='text-gray-50 font-semibold text-xl'>{count}</h1>
      </div>
    </div>
  );
};

export default AnnualLeaveCard;
