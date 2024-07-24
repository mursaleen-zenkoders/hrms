'use client';

// Components
import AnnouncementCard from '@/components/card/announcement-card';
import Pagination from '@/components/common/pagination';
import SkeletonLoader from '@/components/common/skeleton';
import { DatePicker } from '@/components/inputs/date-picker';
import Navbar from '@/components/navbar/navbar';

// Service
import { GetAllAnnouncementsHook } from '@/services/react-query-client/announcement/get-announcements';

// React Hook
import { useState } from 'react';

const AnnouncementsView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDate, setSelectedDate] = useState('');
  const { data } = GetAllAnnouncementsHook(currentPage, selectedDate);

  return (
    <div className='flex flex-col justify-between h-full gap-y-3'>
      <div className='space-y-3'>
        <Navbar heading='Announcements' />
        <div className='flex justify-end w-full gap-3'>
          <DatePicker onSelectDate={setSelectedDate} />
        </div>
        <div
          className={`${data ? 'grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5' : 'w-full'}`}
        >
          {data ? (
            data?.result?.map((item, index) => (
              <AnnouncementCard
                key={index}
                {...item}
              />
            ))
          ) : (
            <div>
              <SkeletonLoader
                className='w-full md:!w-[48%] h-60'
                count={4}
                containerClassName='w-full flex-wrap flex gap-3'
              />
            </div>
          )}
        </div>
      </div>

      <Pagination
        currentPage={currentPage || 1}
        setCurrentPage={page => setCurrentPage(page as number)}
        totalPages={data?.totalPages || 1}
      />
    </div>
  );
};

export default AnnouncementsView;
