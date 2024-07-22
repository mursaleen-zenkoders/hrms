import AnnualLeaveCard from '@/components/card/annual-leave-card';
import CardFrameTwo from '@/components/card/card-frame-two';
import { BarChartComp } from '@/components/charts/bar-chart';
import { DonutChart } from '@/components/charts/donut-chart';
import Button from '@/components/common/button';
import Navbar from '@/components/navbar/navbar';
import { annualLeavesData } from '@/constant/dummy-data/annual-leaves-data';
import React from 'react';

const HomeView = () => {
  return (
    <div className='space-y-4'>
      <Navbar heading='Dashboard' />
      <div className='grid lg:grid-cols-3 lg:gap-x-4 gap-y-4'>
        <CardFrameTwo className='col-span-2 overscroll-none h-full space-y-3'>
          <div className='flex justify-between border-b pb-3'>
            <h1 className='text-white font-semibold text-lg'>Annual Leaves</h1>
            <h3 className='text-primary font-medium border-b cursor-pointer border-primary border-dashed'>
              View Details
            </h3>
          </div>

          <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-y-4 items-center py-2.5'>
            {annualLeavesData.map(item => (
              <AnnualLeaveCard
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </CardFrameTwo>

        <CardFrameTwo className='space-y-2 w-full col-span-2 lg:col-span-1'>
          <h1 className='text-xl font-semibold text-white'>Stand Up</h1>
          <p>Summarize your day&lsquo;s work and plan for tomorrow.</p>
          <Button
            text='Write Today&lsquo;s Stand-Up'
            redirectURL='/dashboard/standup'
            className='mt-3'
          />
        </CardFrameTwo>
      </div>
      <div className='grid lg:grid-cols-5 lg:gap-x-4 gap-y-4'>
        <div className='lg:col-span-3 h-full'>
          <BarChartComp />
        </div>
        <div className='lg:col-span-2 h-full'>
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
