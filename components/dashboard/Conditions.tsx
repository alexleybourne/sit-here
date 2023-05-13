'use client';

import ConditionalRuleBuilder from './ConditionalRuleBuilder';
import _ from 'lodash';
import { useState } from 'react';

const DEFAULT_RULE = {
  id: 1,
  leftCondition: 'Human Resources',
  operation: 'Sits with',
  rightCondition: 'Software Development',
};

const Conditions = (props: any) => {
  const [conditions, setConditions] = useState([DEFAULT_RULE]);

  const employeeNames = (props.selectedFile?.data || [])
    .map((employee: any) => employee[0])
    .filter((name: string) => name !== 'Name');

  const employeeDepartments = (props.selectedFile?.data || [])
    .map((employee: any) => employee[1])
    .filter((name: string) => name !== 'Department');

  const handleAddRule = () =>
    setConditions([
      ...conditions,
      {
        ...DEFAULT_RULE,
        id: conditions.length + 1,
      },
    ]);
  const handleRemoveRule = (id: number) => {
    setConditions(conditions.filter((condition) => condition.id !== id));
  };

  return (
    <div>
      {conditions.map((rule: any) => (
        <ConditionalRuleBuilder
          employeeDepartments={_.uniq(employeeDepartments)}
          {...rule}
          handleRemoveRule={() => handleRemoveRule(rule.id)}
        />
      ))}
      <div
        className='flex py-1 px-3 rounded-md bg-gray-300 w-fit my-1 cursor-pointer active:scale-95'
        onClick={handleAddRule}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='w-6 h-6 mr-2'
        >
          <path d='M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z' />
        </svg>
        Add Rule
      </div>
    </div>
  );
};

export default Conditions;
