import React from 'react';
import { testType } from '../interfaces';
import {
  NumberContainer,
  NumberContent
} from '../test-page.styles';
import {
  Container,
  ComponentHeader,
  ComponentTitle,
} from './matching.styles';

interface Props {
  testSet: testType,
  setTestSet: (testSet: testType) => void
}

const Matching: React.FC<Props> = ({ testSet, setTestSet }) => {

  const calculateOrderNumber = (testData: testType) => {
    const firstMatchingNumber = testSet.lengths.slice(0, 2).reduce((partialSum, a) => partialSum + a, 0);
    const lastMatchingNumber = firstMatchingNumber + testSet.lengths[2];
    const totalNumber = testSet.lengths.reduce((partialSum, a) => partialSum + a, 0);
    return firstMatchingNumber + 1 + "-" + lastMatchingNumber + " of " + totalNumber;
  }

  return (
    <Container>
      <ComponentTitle>Match term to definition</ComponentTitle>
      <ComponentHeader>Select a term to match it with its definition</ComponentHeader>
      <NumberContainer>
        <NumberContent>{calculateOrderNumber(testSet)}</NumberContent>
      </NumberContainer>
    </Container>
  );
};

export default Matching;