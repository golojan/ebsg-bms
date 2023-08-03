import React from 'react';
import { StaleHolder } from 'components/all/skeletons';

export function DisplayModal(props: ModalProps) {
  const { show, children, toggleModal, busy } = props;
  return (
    <StaleHolder busy={busy ? busy : false} height={300} variant="rectangular">
      <div
        className={`modal ${
          show ? 'fixed' : 'hidden'
        } inset-0 z-50 overflow-y-auto flex items-center justify-center bg-transparent`}
      >
        <div className="modal-overlay absolute inset-0 bg-black opacity-75 dark:bg-white dark:opacity-10"></div>
        <div className="relative transform rounded-lg bg-bgray-300 dark:bg-darkblack-600 p-8 text-left transition-all min-w-[300px] max-w-[700px] text-base text-white dark:text-darkblack-400">
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
    </StaleHolder>
  );
}
