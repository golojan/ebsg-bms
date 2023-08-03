import React, { FC } from 'react';
import Image from 'next/image';
import { StaleHolder } from 'components/all/skeletons';
import Link from 'next/link';

type IProps = {
  children: React.ReactNode;
  busy: boolean;
};

export const InfomationBox: FC<IProps> = (props) => {
  const { children, busy } = props;
  return (
    <>
      <div className="p-5 rounded-lg bg-white dark:bg-darkblack-600">
        <div className="relative flex justify-between items-center mb-5">
          <StaleHolder busy={busy} variant="rectangular" height={50}>
            {children}
          </StaleHolder>
        </div>
      </div>
    </>
  );
};

export default InfomationBox;
