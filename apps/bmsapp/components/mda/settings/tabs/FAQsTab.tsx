import React from 'react';
import { Faqs } from 'constants/faqs';

const FAQsTab = () => {
  return (
    <>
      <h3 className="text-2xl font-bold text-bgray-900 dark:text-white">
        Training and FAQs
      </h3>
      <div>
        {Faqs.map((faq, index) => (
          <>
            <div className="transition" key={index}>
              <div className="accordion-header border-b border-bgray-300 dark:border-darkblack-400 cursor-pointer transition flex space-x-5 items-center h-16">
                <i className="fas fa-minus text-success-300 text-xl" />
                <h2 className="title transition-all text-bgray-900 dark:text-white md:text-lg text-sm font-bold ">
                  {faq.question}
                </h2>
              </div>
              <div
                style={{ maxHeight: '164px' }}
                className="accordion-content lg:pl-8 pl-4 pt-0 overflow-hidden max-h-0 space-y-4"
              >
                <div className="flex flex-row py-6">
                  <div className="flex h-[93] w-1 bg-success-300 rounded-lg" />
                  <div className="flex-1">
                    <p className="text-[#9AA2B1] pl-4 lg:text-base text-xs lg:leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default FAQsTab;
