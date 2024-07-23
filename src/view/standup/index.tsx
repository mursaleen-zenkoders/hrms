'use client';
// Component Imports
import CardFrameTwo from '@/components/card/card-frame-two';
import Accordion from '@/components/common/accordion';
import { DatePicker } from '@/components/inputs/date-picker';
import SearchInput from '@/components/inputs/searchbar';
import Navbar from '@/components/navbar/navbar';
import Button from '@/components/common/button';
import TextEditor from '@/components/inputs/text-editor';

// REACT & NEXT IMPORTS
import React, { useState } from 'react';
import Image from 'next/image';

// ICONS
import toDoList from '@/../public/assets/icons/To do list.svg';

// Constant Imports
import { accordionData } from '@/constant/dummy-data/accordion-data';

// FORM IMPORTS
import { useFormik } from 'formik';

const StandUpView = () => {
  const formik = useFormik({
    initialValues: {
      summaryOrTask: '',
      roadblockOrIssues: '',
    },

    onSubmit: values => {
      values;
    },
  });

  const { values, handleChange, handleSubmit } = formik;
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div className='xl:max-h-[84dvh] h-full space-y-4 '>
      <Navbar heading='Standup' />
      <div className='grid xl:grid-cols-3 gap-5 h-fit xl:h-full'>
        {/* Section 1 */}
        <CardFrameTwo className='xl:col-span-2 space-y-3 h-fit xl:h-full overscroll-none order-2 xl:order-1 flex flex-col justify-between'>
          <div className='space-y-3'>
            <div className='flex flex-col sm:flex-row w-full gap-3'>
              <SearchInput className='w-full' />
              <DatePicker />
            </div>
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                {...item}
                isExpendAll={isCollapsed}
              />
            ))}
          </div>
          <div className='flex gap-x-3'>
            <Button
              text={isCollapsed ? 'Expend All' : 'Collapse All'}
              onClick={() => setIsCollapsed(!isCollapsed)}
            />
          </div>
        </CardFrameTwo>

        {/* Section 2 */}
        <CardFrameTwo className='space-y-5 !overscroll-none h-fit xl:h-full order-1 xl:order-2'>
          <div className='flex items-center gap-3'>
            <Image
              alt=''
              src={toDoList}
              width={24}
              height={24}
            />
            <h1 className='text-gray-50 font-semibold text-xl'>
              Write Stand Up
            </h1>
          </div>

          <TextEditor
            label='Summary of tasks completed'
            value={values.summaryOrTask}
            onChange={handleChange('summaryOrTask')}
          />
          <TextEditor
            label='Any roadblocks or issues faced.'
            value={values.roadblockOrIssues}
            onChange={handleChange('roadblockOrIssues')}
          />

          <Button
            text='Submit'
            className='mt-5'
            onClick={handleSubmit}
          />
        </CardFrameTwo>
      </div>
    </div>
  );
};

export default StandUpView;
