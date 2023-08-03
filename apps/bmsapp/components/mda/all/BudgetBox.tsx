import React, { useRef, useState } from 'react';
import { toFiat } from 'libs/monify';
import { StaleHolder } from 'components/all/skeletons';
import CurrencyInput from 'react-currency-input-field';
import { toWords } from 'libs';
import BudgetAiScore from 'components/all/budget-health';

type TNewBudgetSpendInfo = {
  amount: number;
  category: string;
};

type Props = {
  mda: MdaInfo;
  budget: BudgetInfo;
  busy: boolean;
};

export const BudgetBox = (props: Props) => {
  const { mda, budget, busy: isbusy } = props;
  const [startSpend, setStartSpend] = useState(false);
  const spendButtonRef = useRef<HTMLButtonElement>(null);
  const [newSpending, setNewSpending] = useState<TNewBudgetSpendInfo>({
    amount: 0,
    category: '',
  });

  const [busy, setBusy] = useState(false);
  const amountInputRef = useRef(null);

  const processSpendAmount = (amount: number) => {
    setNewSpending({
      ...newSpending,
      amount: amount,
    });
    if (spendButtonRef && spendButtonRef.current) {
      if (newSpending.amount > 0 && startSpend) {
        spendButtonRef.current.disabled = false;
        spendButtonRef.current.classList.remove('bg-[#fafafa]');
        spendButtonRef.current.classList.remove('hover:bg-[#fafafa]');
        spendButtonRef.current.classList.remove('text-bgray-600');
        spendButtonRef.current.classList.add('bg-success-300');
        spendButtonRef.current.classList.add('hover:bg-success-400');
        spendButtonRef.current.classList.add('text-white');
      } else {
        spendButtonRef.current.disabled = true;
        spendButtonRef.current.classList.remove('bg-success-300');
        spendButtonRef.current.classList.remove('hover:bg-success-400');
        spendButtonRef.current.classList.remove('text-white');
        spendButtonRef.current.classList.add('bg-[#fafafa]');
        spendButtonRef.current.classList.add('hover:bg-[#fafafa]');
        spendButtonRef.current.classList.add('text-bgray-600');
      }
    }
  };

  const handleStartSpend = () => {
    if (startSpend) {
      // setStartSpend(false);
    } else {
      processSpendAmount(newSpending.amount || 0.0);
      setBusy(true);
      setTimeout(() => {
        setStartSpend(true);
        setBusy(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="w-full rounded-xl bg-white dark:bg-darkblack-600 px-7 py-11 mb-[48px]">
        <div className="border border-bgray-300 dark:border-darkblack-400 rounded-lg p-8 pb-12 text-center">
          <h3 className="text-2xl font-semibold text-bgray-900 dark:text-white mb-2">
            Budget Balance
          </h3>
          <StaleHolder busy={isbusy} height={50}>
            <h2 className="text-xl font-bold font-poppins text-bgray-900 dark:text-white mb-2">
              {toFiat(budget.approvedBudget ?? 0)}
            </h2>
          </StaleHolder>

          <div className="flex gap-4">
            <StaleHolder busy={isbusy} height={20}>
              <span className="text-base font-medium text-bgray-500 dark:text-darkblack-300">
                <strong>Accessed: </strong>11 April 2022
              </span>
              <span className="flex">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 5.83325L10.8333 12.4999L7.5 9.16659L2.5 14.1666M10.8333 5.83325H17.5H10.8333ZM17.5 5.83325V12.4999V5.83325Z"
                    stroke="#00C566"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-base font-semibold text-success-300">
                  2,05%
                </span>
              </span>
            </StaleHolder>
          </div>
        </div>
        <div className="flex justify-center -mt-6 mb-3">
          <button className="py-3 px-6 border bg-white border-bgray-500 rounded-lg text-sm font-medium text-bgray-600 dark:bg-darkblack-600 dark:text-white">
            Rebase Total Budget
          </button>
        </div>
        {busy && (
          <>
            <StaleHolder busy={busy}>
              <></>
            </StaleHolder>
            <StaleHolder busy={busy} height={30}>
              <></>
            </StaleHolder>
            <StaleHolder busy={busy} height={50}>
              <></>
            </StaleHolder>
          </>
        )}
        {startSpend ? (
          <>
            <div className="w-full mt-5 text-center">
              <StaleHolder busy={busy} height={50}>
                <h3 className="text-lg font-bold text-bgray-900 dark:text-white mb-3">
                  Expenditure Details
                </h3>
              </StaleHolder>
              <StaleHolder busy={busy} height={50}>
                <div className="payment-select relative mb-3">
                  <select className="min-h-7 bg-bgray-50 dark:bg-darkblack-500 w-full dark:text-white rounded-lg border border-bgray-200 dark:border-darkblack-400 focus-within:border-success-300 p-4 focus:ring-0 text-lg">
                    <option value="1">Capital Project Expenses</option>
                    <option value="2">Bail Out Fund</option>
                  </select>
                </div>
              </StaleHolder>
              <StaleHolder busy={busy} height={50} variant="rectangular">
                <div className="w-full rounded-lg border border-bgray-200 dark:border-darkblack-400 focus-within:border-success-300 p-4 h-[98px] flex flex-col justify-between">
                  <p className="text-sm text-bgray-600 dark:text-bgray-50 font-medium">
                    Enter amount
                  </p>
                  <div className="w-full h-[35px] flex justify-between items-center">
                    <span className="text-2xl text-bgray-900 dark:text-white font-bold mr-3">
                      ₦
                    </span>
                    <label className="w-full">
                      <CurrencyInput
                        ref={amountInputRef}
                        className="focus:outline-none w-full dark:bg-darkblack-600 p-0 focus:ring-0 border-none text-2xl font-bold dark:border-darkblack-400 text-bgray-900 dark:text-white"
                        placeholder="Enter Amount"
                        defaultValue={newSpending.amount}
                        decimalsLimit={2}
                        onValueChange={(value) => {
                          processSpendAmount(Number(value));
                        }}
                      />
                    </label>
                  </div>
                </div>
              </StaleHolder>
            </div>
          </>
        ) : null}

        {toWords(newSpending.amount).length > 0 && (
          <>
            <div className="my-3 border-bgray-200 dark:border-darkblack-400 py-3 px-6 border rounded-lg bg-white border-bgray-500 text-lg font-semibold dark:bg-darkblack-600">
              <span className="text-bgray-600 dark:tw-text-white">
                {toWords(newSpending.amount)}
              </span>
            </div>
          </>
        )}
        <button
          ref={spendButtonRef}
          className="bg-success-300 hover:bg-success-400 transition-all text-white py-4 w-full font-bold rounded-lg text-xl mt-5"
          onClick={handleStartSpend}
        >
          Spend From Budget
        </button>
        <div className="flex justify-center mt-8">
          <BudgetAiScore score={0} size={20} />
        </div>
        <div className="flex justify-center mt-8">
          <div className="flex gap-4">
            <button className="w-10 h-10 group rounded-full bg-transparent hover:bg-success-300 hover:border-transparent inline-flex items-center justify-center border border-gray-500">
              <svg
                className="stroke-bgray-500 group-hover:stroke-white"
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 21.5659L12 16.5659L5 21.5659V5.56592C5 5.03548 5.21071 4.52678 5.58579 4.1517C5.96086 3.77663 6.46957 3.56592 7 3.56592H17C17.5304 3.56592 18.0391 3.77663 18.4142 4.1517C18.7893 4.52678 19 5.03548 19 5.56592V21.5659Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="w-10 h-10 rounded-full group bg-transparent hover:bg-success-300 hover:border-transparent inline-flex items-center justify-center border border-gray-500">
              <svg
                className="stroke-bgray-500 group-hover:stroke-white"
                width={20}
                height={21}
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 13.5659C5.65685 13.5659 7 12.2228 7 10.5659C7 8.90906 5.65685 7.56592 4 7.56592C2.34315 7.56592 1 8.90906 1 10.5659C1 12.2228 2.34315 13.5659 4 13.5659Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 7.56592C17.6569 7.56592 19 6.22277 19 4.56592C19 2.90906 17.6569 1.56592 16 1.56592C14.3431 1.56592 13 2.90906 13 4.56592C13 6.22277 14.3431 7.56592 16 7.56592Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 19.5659C17.6569 19.5659 19 18.2228 19 16.5659C19 14.9091 17.6569 13.5659 16 13.5659C14.3431 13.5659 13 14.9091 13 16.5659C13 18.2228 14.3431 19.5659 16 19.5659Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.69995 9.26572L13.3 5.86572"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.69995 11.8657L13.3 15.2657"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BudgetBox;
