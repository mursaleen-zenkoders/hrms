import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const CardFrame = ({ children, className }: IProps) => {
  return (
    <div
      className={`bg-card-black p-6 rounded-xl overflow-y-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default CardFrame;
