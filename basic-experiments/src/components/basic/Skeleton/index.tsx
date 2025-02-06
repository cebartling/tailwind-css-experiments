import React from 'react';
import { SkeletonLoaderProps } from '@components/basic/Skeleton/types';
import { twMerge } from 'tailwind-merge';

const Skeleton: React.FC<SkeletonLoaderProps> = ({
  className = '',
  width = 100,
  height = 100,
}: SkeletonLoaderProps) => {
  return (
    <div
      style={{
        width: `${width}px`,
        maxWidth: `${width}px`,
        minWidth: `${width}px`,
        height: `${height}px`,
      }}
      className={twMerge('bg-gray-200 animate-pulse rounded-lg', className)}
    ></div>
  );
};

export default Skeleton;
