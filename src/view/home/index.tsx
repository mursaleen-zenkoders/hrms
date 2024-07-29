import AnnualLeaveCard from '@/components/card/annual-leave-card';
import CardFrameTwo from '@/components/card/card-frame-two';
import { BarChartComp } from '@/components/charts/bar-chart';
import { DonutChart } from '@/components/charts/donut-chart';
import Button from '@/components/common/button';
import { BackgroundBeams } from '@/components/effects/background-beams';
import Navbar from '@/components/navbar/navbar';
import Link from 'next/link';

const HomeView = () => {
  return (
    <div className='space-y-4'>
      {/* <BackgroundBeams /> */}

      <Navbar heading='Dashboard' />
      <CardFrameTwo className='gap-y-10 !bg-transparent'>
        <BackgroundBeams />

        <div>
          <div className='overscroll-none h-full space-y-3'>
            <div className='flex justify-between'>
              <h1 className='text-white font-semibold text-2xl'>
                Annual Leaves
              </h1>
              <Link
                href={'attendance'}
                className='text-primary font-medium border-b cursor-pointer border-primary border-dashed'
              >
                View Details
              </Link>
            </div>
          </div>

          <AnnualLeaveCard />
        </div>

        <div className='space-y-2 w-full col-span-2 lg:col-span-1 mt-6'>
          <h1 className='font-semibold text-white text-2xl'>Stand Up</h1>
          <p>Summarize your day&lsquo;s work and plan for tomorrow.</p>
          <Button
            text='Write Today&lsquo;s Stand-Up'
            redirectURL='/dashboard/standup'
            className='mt-3'
          />
        </div>

        <div className=' gap-y-4 mt-6'>
          <div className='lg:col-span-3 h-full'>
            <BarChartComp />
          </div>
          <div className='lg:col-span-2 h-full'>
            <DonutChart />
          </div>
        </div>
      </CardFrameTwo>
    </div>
  );
};

export default HomeView;
