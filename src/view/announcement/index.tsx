'use client';

// Components
import AnnouncementCard from '@/components/card/announcement-card';
import Pagination from '@/components/common/pagination';
import SearchInput from '@/components/inputs/searchbar';
import { DatePicker } from '@/components/inputs/date-picker';
import Navbar from '@/components/navbar/navbar';

// Constant
import { announcementCardData } from '@/constant/dummy-data/announcement-card-data';

// React Hook
import { useState } from 'react';

const AnnouncementsView = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className='flex flex-col justify-between h-full gap-y-3'>
      <div className='space-y-3'>
        <Navbar heading='Announcements' />
        <div className='flex flex-col sm:flex-row w-full gap-3'>
          <SearchInput className='w-full' />
          <DatePicker />
        </div>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5'>
          {announcementCardData.map((item, index) => (
            <AnnouncementCard
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={10}
      />
    </div>
  );
};

export default AnnouncementsView;
