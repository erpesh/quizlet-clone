import React from 'react'
import { matchingTest } from '../../../../types/test-page.types'
import CheckedTestItem from './checked-test-item'

interface Props {
    matchingTest: matchingTest
}

const CheckedPart: React.FC<Props> = ({matchingTest}) => {
    return (
        <>
            {matchingTest.items.map(item => <CheckedTestItem key={item.id} testItem={item}/>)}
        </>
    )
}

export default CheckedPart