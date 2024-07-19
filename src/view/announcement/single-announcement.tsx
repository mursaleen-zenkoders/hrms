// Components
import CardFrameTwo from '@/components/card/card-frame-two';
import ImageGallery from '@/components/gallery/image-gallery';
import Navbar from '@/components/navbar/navbar';

// React
import Image from 'next/image';

// Constant
import { imageGalleryData } from '@/constant/dummy-data/image-gallery';

// Assets
import Speaker from '@/../public/assets/icons/speaker.png';
import attendance from '@/../public/assets/icons/attendance-colored.svg';
import clock from '@/../public/assets/icons/clock.png';
import location from '@/../public/assets/icons/location.png';

const AnnouncementView = () => {
  return (
    <div className='space-y-3 h-full'>
      <Navbar heading='Announcement' />
      <CardFrameTwo className={`h-[89%] overflow-y-auto space-y-5`}>
        <div className='flex justify-between items-center'>
          <Image
            alt='speaker'
            src={Speaker}
            width={48}
            height={48}
          />
          <p className='text-primary text-xl'>22 Oct, 2020</p>
        </div>

        <h1 className='text-white font-semibold text-xl'>
          Join Us for the Annual BBQ Party 🎉
        </h1>
        <p>
          We are thrilled to invite you to our Annual BBQ Party, a special event
          to celebrate our teams hard work, achievements, and dedication over
          the past year. This is an opportunity for everyone to come together,
          relax, and enjoy a fun-filled day with delicious food, exciting
          activities, and great company.
        </p>
        <p>
          We look forward to celebrating with you and making this BBQ Party an
          unforgettable event. Thank you for your hard work and dedication. Let
          celebrate our achievements together!
        </p>

        <ImageGallery images={imageGalleryData} />

        <div className='space-y-3 '>
          <div className='flex items-center gap-x-2'>
            <Image
              alt='attendance'
              src={attendance}
              width={24}
              height={24}
            />
            <p>10 July 2024</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Image
              alt='clock'
              src={clock}
              width={24}
              height={24}
            />
            <p>6:30 pm</p>
          </div>
          <div className='flex items-center gap-x-2'>
            <Image
              alt='address'
              src={location}
              width={24}
              height={24}
            />
            <p>Zenkoders Office</p>
          </div>
        </div>
      </CardFrameTwo>
    </div>
  );
};

export default AnnouncementView;
