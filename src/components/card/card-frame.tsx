import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const CardFrame = ({ children, className, style }: IProps) => {
  return (
    <div
      style={style}
      className={`bg-dark-black p-6 rounded-xl overflow-y-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default CardFrame;
