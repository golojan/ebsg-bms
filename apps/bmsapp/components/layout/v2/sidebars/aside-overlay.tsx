import React from 'react';

export const AsideOverlay = () => {
  return (
    <>
      <div
        style={{ zIndex: 25 }}
        className="aside-overlay block sm:hidden w-full h-full fixed left-0 top-0 bg-black bg-opacity-30"
      />
    </>
  );
};

export default AsideOverlay;
