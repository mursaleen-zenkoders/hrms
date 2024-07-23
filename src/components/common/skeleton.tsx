import React from 'react';

// React Loading Skeleton
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonLoaderProps {
  width?: number;
  count?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
}

const SkeletonLoader = ({
  count,
  height,
  width,
  className,
  containerClassName,
}: SkeletonLoaderProps) => {
  return (
    <Skeleton
      baseColor='#9ea9aa5b'
      highlightColor='#f8f8f84d'
      className={className}
      width={width || undefined}
      height={height || undefined}
      borderRadius={8}
      count={count || 1}
      containerClassName={containerClassName}
    />
  );
};

export default SkeletonLoader;
