'use client';
import Image from 'next/image';
import React from 'react';
import CardFrameTwo from './card-frame-two';
import calendarGreen from '@/../public/assets/icons/calendar-green.svg';
import calendarBlue from '@/../public/assets/icons/calendar-taken.svg';
import calendarRemove from '@/../public/assets/icons/calendar-remove.svg';
import { GetAttendanceHook } from '@/services/react-query-client/attendance/get-attendance-leaves';
import SkeletonLoader from '../common/skeleton';
interface AnnualLeaveCardProps {
  className?: string;
}

const AnnualLeaveCard = ({ className }: AnnualLeaveCardProps) => {
  const { data } = GetAttendanceHook();

  const annualLeavesData = [
    {
      id: 1,
      title: 'Total',
      count: data?.total_leaves,
      icon: calendarGreen,
    },
    {
      id: 2,
      title: 'Taken',
      count: data?.taken_leaves,
      icon: calendarBlue,
    },
    {
      id: 4,
      title: 'Remaining',
      count: data?.remaining_leaves,
      icon: calendarRemove,
    },
  ];

  return (
    <div className='grid sm:grid-cols-3 gap-4 items-center py-2.5'>
      {annualLeavesData.map(item => (
        <CardFrameTwo
          className={`flex gap-x-2 justify-between border-l-4 border-primary ${className}`}
          key={item.id}
        >
          <div>
            <p className='uppercase'>{item.title}</p>
            <h1 className='text-white font-semibold text-xl'>
              {item.count || <SkeletonLoader />}
            </h1>
          </div>
          <div className='w-[51px] h-[51px] rounded-lg flex justify-center items-center'>
            <Image
              alt='icon'
              src={item.icon}
              width={32}
              height={32}
            />
          </div>
        </CardFrameTwo>
      ))}
    </div>
  );
};

export default AnnualLeaveCard;
