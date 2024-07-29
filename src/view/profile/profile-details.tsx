'use client';
import CardFrameTwo from '@/components/card/card-frame-two';
import Button from '@/components/common/button';
import { ProfileFormikT } from '@/types/types/profile';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

interface ProfileDetailsProps {
  formik: ProfileFormikT;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileDetails = ({ formik, setIsEdit }: ProfileDetailsProps) => {
  const { values } = formik;

  const { data } = useSession();
  const personalDetails = [
    { title: 'Email Address', value: data?.user?.email },
    { title: 'Phone Number', value: values.phone },
    { title: 'NIC Number', value: values.nic },
  ];

  const addressDetails = [
    { title: 'Country', value: values.country },
    { title: 'State', value: values.state },
    { title: 'City', value: values.city },
    { title: 'Zip', value: values.zip },
    { title: 'Address', value: values.address },
  ];

  const othersDetails = [
    { title: 'About', value: values.about },
    { title: 'Date Of Birth', value: values.dob },
    { title: 'Education', value: values.education },
    { title: 'Experience', value: values.experience },
    { title: 'Gender', value: values.gender },
  ];
  return (
    <CardFrameTwo className='space-y-6  '>
      <div>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-lg flex items-center gap-x-1'>
            <div className='bg-primary h-6 w-1 rounded-md' />
            Profile Details
          </h1>

          <Button
            onClick={() => setIsEdit(true)}
            text='Edit Profile'
          />
        </div>

        <div className='flex gap-5 flex-col md:flex-row'>
          <div className='flex gap-x-3 items-start !size-24'>
            <Image
              alt={data?.user?.name || ''}
              src={data?.user?.image || ''}
              width={100}
              height={100}
              className='rounded-full'
            />
          </div>

          <div className='w-full flex flex-col gap-y-3'>
            <h1 className='font-bold text-white text-2xl'>
              {data?.user?.name}
            </h1>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
              {personalDetails.map(input => (
                <div key={input.title}>
                  <h1 className='italic'>{input.title}</h1>
                  <p className='text-white'>{input.value || '-'}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='w-full border-b border-primary' />

      <div className='space-y-4'>
        <h1 className='font-bold text-lg flex items-center gap-x-1 '>
          <div className='bg-primary h-6 w-1 rounded-md' />
          Address Information
        </h1>

        <div className='w-full flex flex-col gap-y-3'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3'>
            {addressDetails.map(item => (
              <div key={item.title}>
                <h1 className='italic'>{item.title}</h1>
                <p className='text-white'>{item.value || '-'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full border-b border-primary' />

      <div className='space-y-4'>
        <h1 className='font-bold text-lg flex items-center gap-x-1 '>
          <div className='bg-primary h-6 w-1 rounded-md' />
          Others Information
        </h1>

        <div className='w-full flex flex-col gap-y-3'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3'>
            {othersDetails.map(item => (
              <div key={item.title}>
                <h1 className='italic'>{item.title}</h1>
                <p className='text-white'>{item.value || '-'}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardFrameTwo>
  );
};

export default ProfileDetails;
