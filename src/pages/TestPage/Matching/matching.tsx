import React, { useState } from 'react';
import { matchingTest, testType } from '../interfaces';
import {
  NumberContainer,
  NumberContent
} from '../test-page.styles';
import DefinitionsItem from './DefinitionsItem/definitions-item';
import {
  Container,
  ComponentHeader,
  ComponentTitle,
  DefinitionsPart,
  AnswersPart,
  AnswerItemContainer,
  AnswerItemWrap,
  AnswerItemContent,
  TextFormater,
} from './matching.styles';

interface Props {
  testSet: testType,
  setTestSet: (testSet: testType) => void
}

const Matching: React.FC<Props> = ({ testSet, setTestSet }) => {

  const [focusedItem, setFocusedItem] = useState(0);

  const calculateOrderNumber = () => {
    const firstMatchingNumber = testSet.lengths.slice(0, 2).reduce((partialSum, a) => partialSum + a, 0);
    const lastMatchingNumber = firstMatchingNumber + testSet.lengths[2];
    const totalNumber = testSet.totalLength;
    return firstMatchingNumber + 1 + "-" + lastMatchingNumber + " of " + totalNumber;
  }

  const checkIfAnswerTaken = (index: number) => {
    const item = { ...testSet.matching[index] };
    const answers = testSet.matching.map(item => item.answer);
    return answers.includes(item.term);
  }

  const answerItemOnClickHandler = (item: matchingTest) => {
    let matchingItems = [...testSet.matching];
    matchingItems[focusedItem].answer = item.term;
    matchingItems[focusedItem].isCorrect = item.term === matchingItems[focusedItem].term;
    setTestSet({...testSet, matching: matchingItems});
    setFocusedItem(focusedItem + 1);
  }

  return (
    <Container>
      <ComponentTitle onClick={() => console.log(testSet)}>Match term to definition</ComponentTitle>
      <ComponentHeader>Select a term to match it with its definition</ComponentHeader>
      <div>
        <DefinitionsPart>
          {testSet.matching.map((item, index) => {
            return <DefinitionsItem
              key={item.id}
              testItem={item}
              index={index}
              focusedItem={focusedItem}
              setFocusedItem={setFocusedItem}
              isNoAnswers={testSet.matching.filter(item => item.answer !== null).length === 0}
              testSet={testSet}
              setTestSet={setTestSet}
            />
          })}
        </DefinitionsPart>
        <AnswersPart>
          {testSet.matching.map((item, index) => {
            return <AnswerItemContainer
              key={item.id}
              isTaken={checkIfAnswerTaken(index)}
              onClick={() => answerItemOnClickHandler(item)}
            >
              <AnswerItemWrap>
                <AnswerItemContent>
                  <TextFormater>{item.term}</TextFormater>
                </AnswerItemContent>
              </AnswerItemWrap>
            </AnswerItemContainer>
          })}
        </AnswersPart>
      </div>
      <NumberContainer>
        <NumberContent>{calculateOrderNumber()}</NumberContent>
      </NumberContainer>
    </Container>
  );
};

export default Matching;