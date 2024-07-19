import BottomBar from '@/components/navbar/bottombar';
import Sidebar from '@/components/sidebar/sidebar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-[95dvh] flex relative gap-5 w-full'>
      <Sidebar />
      <div className='flex flex-col justify-between w-full gap-5 h-full'>
        <div className='overflow-y-auto h-full w-full'>{children}</div>
        <BottomBar />
      </div>
    </div>
  );
};

export default layout;
