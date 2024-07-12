import Sidebar from '@/components/sidebar/sidebar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full flex gap-x-5 w-full'>
      <Sidebar />
      <div className='overflow-y-auto max-h-[87dvh]'>{children}</div>
    </div>
  );
};

export default layout;
