import React from 'react';

interface ChartFooterProps {
  label: string;
  color: string;
  value?: string;
}

const ChartFooter = ({ label, color, value }: ChartFooterProps) => {
  return (
    <div
      className='flex gap-x-2 items-center justify-between w-full border-b pb-1 border-dashed'
      style={{ borderColor: color }}
    >
      <div className='flex items-center gap-x-2'>
        <div
          className='h-5 w-1 rounded-md'
          style={{ backgroundColor: color }}
        />
        <p>{label}</p>
      </div>
      <p className='text-white text-xs'>{value}</p>
    </div>
  );
};

export default ChartFooter;
