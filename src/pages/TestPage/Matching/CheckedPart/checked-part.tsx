import React from 'react'
import {IMatching} from "../../../../types";
import CheckedTestItem from './checked-test-item'

interface Props {
  matchingTest: IMatching
}

const CheckedPart: React.FC<Props> = ({matchingTest}) => {
  return (
    <>
      {matchingTest.items.map(item => <CheckedTestItem key={item.id} testItem={item}/>)}
    </>
  )
}

export default CheckedPart