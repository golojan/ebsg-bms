import React, { useEffect, useState } from 'react';
import { screenAtom } from 'store';
import { useAtom } from 'jotai';

export function ViewModal(props: ModalProps) {
  const { show, children, toggleModal, screens } = props;
  const [screen] = useAtom(screenAtom);
  const [showModal, setShowModal] = useState(false);
  // check if screen is in screens array

  useEffect(() => {
    if (screens.includes(screen) && show && children) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  }, [children, screen, screens, show]);

  return (
    <>
      {showModal ? (
        <>
          <div
            className={`modal ${
              show ? 'fixed' : 'hidden'
            } inset-0 z-50 overflow-y-auto flex items-center justify-center`}
          >
            <div className="modal-overlay absolute inset-0 bg-gray-900 opacity-75 dark:bg-darkblack-900 dark:opacity-50"></div>
            <div className="relative transform rounded-lg bg-white dark:bg-darkblack-600 p-8 text-left transition-all">
              <div className="absolute top-0 right-0 pt-5 pr-5">
                <button
                  onClick={toggleModal}
                  type="button"
                  className="rounded-md bg-white dark:bg-darkblack-500 focus:outline-none"
                >
                  <span className="sr-only">Close</span>
                  {/* Cross Icon */}
                  <svg
                    className="stroke-darkblack-300"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6L18 18M6 18L18 6L6 18Z"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              {children}
            </div>
          </div>
        </>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default ViewModal;
