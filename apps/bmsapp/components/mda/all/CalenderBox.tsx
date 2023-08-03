import React, { useState, FC } from 'react';
import Flatpickr from 'react-flatpickr';

export const CalenderBox: FC = () => {
  const [calender, setCalender] = useState({ date: new Date() });
  return (
    <>
      <div className="2xl:w-full lg:w-1/2 w-full rounded-lg bg-white dark:bg-darkblack-600 p-5">
        <div className="w-full">
          <p className="text-lg font-semibold text-bgray-900 dark:text-white mb-5">
            Select Date
          </p>

          <div className="mini-calender-wrapper w-full">
            <Flatpickr
              options={{
                allowInput: false,
                showMonths: 1,
                animate: true,
                inline: true,
                dateFormat: 'Y-m-d',
                enableTime: false,
                onChange: function (selectedDates, dateStr, instance) {
                  setCalender({ ...calender, date: new Date(dateStr) });
                },
                monthSelectorType: 'dropdown',
                minDate: '2020-01',
                maxDate: '2024-07-24',
                altInput: true,
                altInputClass: 'hidden',
              }}
              value={calender.date}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalenderBox;
