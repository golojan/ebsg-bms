import React from 'react';

type AIProps = {
  score: number;
  color?: string;
  size?: number;
};
const BudgetAiScore = (props: AIProps) => {
  const { score, color, size } = props;
  return (
    <div className="progess-bar flex justify-center mb-[13px]">
      <div className="bonus-per relative">
        <div className="bonus-outer">
          <div className="bonus-inner">
            <div className="number">
              <span className="text-lg font-medium text-bgray-900">
                {score}%
              </span>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px">
          <circle
            style={{
              strokeDashoffset: `calc(215 - 215 * (${score} / 100))`,
            }}
            strokeWidth={10}
            cx={40}
            cy={40}
            r={35}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default BudgetAiScore;
