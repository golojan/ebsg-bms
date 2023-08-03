import style from './indicator.module.scss';
import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { toFiat } from 'libs/monify';
import Link from 'next/link';

type IndicatorProps = {
  busy?: boolean;
  amount: number;
  title: string;
  indicator: string;
};

const StateIndicator: React.FC<IndicatorProps> = (props) => {
  const { busy, title, amount, indicator } = props;
  const rebaseMda = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="p-5 rounded-lg bg-white dark:bg-darkblack-600">
        <div className="flex justify-between items-center mb-5">
          <div className="flex space-x-[7px] items-center">
            <div className="icon">
              <span>
                <img src="./assets/images/icons/total-earn.svg" alt="icon" />
              </span>
            </div>
            <span className="text-lg text-bgray-900 dark:text-white font-semibold">
              {title}
            </span>
          </div>
          <div>
            <img src="./assets/images/avatar/members-2.png" alt="members" />
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex-1">
            <p className="text-bgray-900 dark:text-white font-bold text-3xl leading-[48px]">
              {toFiat(amount)}
            </p>
            <div className="flex items-center space-x-1">
              <span>
                <svg
                  width={16}
                  height={14}
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4318 0.522827L12.4446 0.522827L8.55575 0.522827L7.56859 0.522827C6.28227 0.522827 5.48082 1.91818 6.12896 3.02928L9.06056 8.05489C9.7037 9.1574 11.2967 9.1574 11.9398 8.05489L14.8714 3.02928C15.5196 1.91818 14.7181 0.522828 13.4318 0.522827Z"
                    fill="#22C55E"
                  />
                  <path
                    opacity="0.4"
                    d="M2.16878 13.0485L3.15594 13.0485L7.04483 13.0485L8.03199 13.0485C9.31831 13.0485 10.1198 11.6531 9.47163 10.542L6.54002 5.5164C5.89689 4.41389 4.30389 4.41389 3.66076 5.5164L0.729153 10.542C0.0810147 11.6531 0.882466 13.0485 2.16878 13.0485Z"
                    fill="#22C55E"
                  />
                </svg>
              </span>
              <span className="text-success-300 text-sm font-medium">
                + 3.5%
              </span>
              <span className="text-bgray-700 dark:text-bgray-50 text-sm font-medium">
                - from last week
              </span>
              <a href="#" className="float-right">
                rebase
              </a>
            </div>
          </div>
          <div className="w-[106px]">
            <canvas id="totalEarn" height={68} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StateIndicator;
