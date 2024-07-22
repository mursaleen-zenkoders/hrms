import React from 'react';

interface ChartFooterProps {
  label: string;
  color: string;
  doitSize: '12px' | '8px';
}

const ChartFooter = ({ label, color, doitSize }: ChartFooterProps) => {
  return (
    <div className='flex gap-x-2 items-center'>
      <div
        className='rounded-full'
        style={{ backgroundColor: color, width: doitSize, height: doitSize }}
      />
      <p>{label}</p>
    </div>
  );
};

export default ChartFooter;
