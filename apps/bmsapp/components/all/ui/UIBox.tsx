import React, { FC } from 'react';
import { StaleHolder } from '../skeletons';
type IProps = {
  children: React.ReactNode;
  busy?: boolean;
};
export const UIBox: FC<IProps> = (props) => {
  const { children, busy } = props;
  return (
    <>
      <div className="p-2 rounded-lg bg-white dark:bg-darkblack-600 text-bray-300 dark:darkblack-900">
        <div className="relative flex justify-between items-center">
          <StaleHolder
            busy={busy ? busy : false}
            variant="rectangular"
            height={100}
          >
            {children}
          </StaleHolder>
        </div>
      </div>
    </>
  );
};

export default UIBox;
