'use client'

import { useState } from "react";
import ConditionalRuleBuilder from "./ConditionalRuleBuilder";
import _ from "lodash"

const DEFAULT_RULE = { id: 1, leftCondition: 'Human Resources', operation: 'Sits with', rightCondition: 'Software Development' }

const Conditions = (props: any) => {
  const [conditions, setConditions] = useState([
    DEFAULT_RULE
  ])

  const employeeNames = (props.selectedFile?.data || [])
    .map((employee: any) => employee[0])
    .filter((name: string) => name !== 'Name')

  const employeeDepartments = (props.selectedFile?.data || [])
    .map((employee: any) => employee[1])
    .filter((name: string) => name !== 'Department')

  const handleAddRule = () => setConditions([...conditions, {
    ...DEFAULT_RULE,
    id: conditions.length + 1
  }])
  const handleRemoveRule = (id: number) => {
    setConditions(conditions.filter((condition) => condition.id !== id))
  }

  return (
    <div>
      <div className='py-1 px-3 rounded-md bg-gray-300 w-fit my-1 cursor-pointer active:scale-95' onClick={handleAddRule}>
        Add Rule
      </div>
      {conditions.map((rule: any) => (
        <ConditionalRuleBuilder
          employeeNames={employeeNames}
          employeeDepartments={_.uniq(employeeDepartments)}
          {...rule}
          handleRemoveRule={() => handleRemoveRule(rule.id)}
        />
      ))}
    </div>
  )
}

export default Conditions;