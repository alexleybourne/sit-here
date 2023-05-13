'use client';

import React, { useState } from 'react';

// export const DEPARTMENT_OPTIONS = [
//   'Human Resources',
//   'Software Development',
//   'Sales',
//   'Finance',
//   'Marketing',
//   'Internship',
// ];
export const CONDITIONS = ['Sits with', 'Sits away from'];

const ConditionalRuleBuilder = (props: any) => {
  const [firstCondition, setFirstCondition] = useState(props.leftCondition);
  const [secondCondition, setSecondCondition] = useState(props.operation);
  const [thirdCondition, setThirdCondition] = useState(props.rightCondition);

  return (
    <div>
      <div className='flex flex-row gap-1 items-center mt-1'>
        <div>
          <select
            value={firstCondition}
            onChange={(e) => setFirstCondition(e.target.value)}
          >
            <option value=''>Select a department</option>
            {[...props.employeeDepartments].map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={secondCondition}
            onChange={(e) => setSecondCondition(e.target.value)}
          >
            <option value=''>Select a seating arrangement</option>
            {CONDITIONS.map((seating) => (
              <option key={seating} value={seating}>
                {seating}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={thirdCondition}
            onChange={(e) => setThirdCondition(e.target.value)}
          >
            <option value=''>Select a department</option>
            {[...props.employeeDepartments].map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </div>
        <div onClick={props.handleRemoveRule} className='cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='currentColor'
            className='w-6 h-6 hover:fill-red-500'
          >
            <path
              fillRule='evenodd'
              d='M2.515 10.674a1.875 1.875 0 000 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 003-3V6.75a3 3 0 00-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374zM12.53 9.22a.75.75 0 10-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 101.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 101.06-1.06L15.31 12l1.72-1.72a.75.75 0 10-1.06-1.06l-1.72 1.72-1.72-1.72z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
      {/* <div>
        <p>Rule summary:</p>
        <p>
          {firstCondition} {secondCondition} {thirdCondition}
        </p>
      </div> */}
    </div>
  );
};

export default ConditionalRuleBuilder;
