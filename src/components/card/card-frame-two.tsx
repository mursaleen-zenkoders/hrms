import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const CardFrameTwo = ({ children, className, style }: IProps) => {
  return (
    <div
      style={style}
      className={`bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-6 rounded-xl overflow-y-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default CardFrameTwo;
