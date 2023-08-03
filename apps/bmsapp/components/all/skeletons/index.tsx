import React from 'react';
import { Skeleton } from '@mui/material';

type IProps = {
  busy: boolean;
  children: React.ReactNode;
  variant?: 'text' | 'rectangular' | 'circular';
  animation?: 'wave' | 'pulse';
  height?: string | number;
  width?: string | number;
  className?: string;
  repeat?: number;
};

export const StaleHolder = (props: IProps) => {
  const {
    variant,
    animation,
    height,
    width,
    busy,
    children,
    className,
    repeat = 1,
  } = props;

  const repeatArray = Array.from(Array(repeat).keys());
  return (
    <>
      {busy ? (
        <>
          {repeatArray.map((i) => (
            <Skeleton
              key={i}
              variant={variant || 'text'}
              width={width ? width : '100%'}
              height={height || 20}
              animation={animation || 'wave'}
              className={`${width ? '' : 'w-full'} ${className} ${
                repeat > 1 ? 'mb-2' : ''
              } `}
            />
          ))}
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
