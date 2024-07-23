'use client';
// Components
import CardFrameTwo from '@/components/card/card-frame-two';
import Navbar from '@/components/navbar/navbar';
import SkeletonLoader from '@/components/common/skeleton';

// React
import Image from 'next/image';

// Assets
import attendance from '@/../public/assets/icons/attendance-colored.svg';
import clock from '@/../public/assets/icons/clock.png';
import location from '@/../public/assets/icons/location.png';
import Speaker from '@/../public/assets/icons/speaker.png';

// Service
import { GetAnnouncementHook } from '@/services/react-query-client/announcement/get-announcement';

// Moment Library
import moment from 'moment';

export default function AnnouncementView({ id }: { id: number }) {
  const { data } = GetAnnouncementHook(id);

  const eventInfo = [
    {
      image: attendance,
      label: data?.event_date,
    },
    {
      image: clock,
      label: data?.event_time,
    },
    {
      image: location,
      label: data?.event_location,
    },
  ];

  return (
    <div className='space-y-3 h-full'>
      <Navbar
        heading='Announcement'
        isBackBtn
      />
      <CardFrameTwo
        className={`h-[89%] overflow-y-auto flex flex-col justify-between gap-y-5 bg-[]`}
      >
        <div className='space-y-5'>
          <div className='flex justify-between items-center'>
            <Image
              alt='speaker'
              src={Speaker}
              width={48}
              height={48}
            />
            <p className='text-primary text-xl'>
              {moment(data?.updated_at).format('LLL')}
            </p>
          </div>

          <h1 className='text-white font-semibold text-xl capitalize'>
            {data?.title || <SkeletonLoader />}
          </h1>

          <p className=''>
            {data?.description || <SkeletonLoader count={3} />}
          </p>
        </div>
        {/* <ImageGallery images={imageGalleryData} /> */}

        <div className='space-y-3 '>
          {eventInfo.map((item, index) => (
            <div
              key={index}
              className='flex items-center gap-x-2'
            >
              <Image
                alt=''
                src={item.image}
                width={24}
                height={24}
              />
              <p>{item.label || <SkeletonLoader width={100} />}</p>
            </div>
          ))}
        </div>
      </CardFrameTwo>
    </div>
  );
}
