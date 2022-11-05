import React, {useEffect, useState} from 'react';
import {ITestSet} from '../../../types';
import {NumberContainer, NumberContent} from '../test-page.styles';
import CheckedPart from './CheckedPart/checked-part';
import DefinitionsItem from './DefinitionsItem/definitions-item';
import {
  AnswerItemContainer,
  AnswerItemContent,
  AnswerItemWrap,
  AnswersPart,
  ComponentHeader,
  ComponentTitle,
  Container,
  DefinitionsPart,
  TextFormater,
} from './matching.styles';

interface Props {
  testSet: ITestSet,
  setTestSet: (testSet: ITestSet) => void,
  reference: React.RefObject<HTMLDivElement>,
  handleRefScroll: (id: number) => void,
  isTestChecked: boolean
}

const Matching: React.FC<Props> = ({testSet, setTestSet, reference, handleRefScroll, isTestChecked}) => {

  const [focusedItem, setFocusedItem] = useState(0);

  const calculateOrderNumber = () => {
    const firstMatchingNumber = testSet.lengths.slice(0, 2).reduce((partialSum, a) => partialSum + a, 0);
    const lastMatchingNumber = firstMatchingNumber + testSet.lengths[2];
    const totalNumber = testSet.totalLength;
    return firstMatchingNumber + 1 + "-" + lastMatchingNumber + " of " + totalNumber;
  }

  const checkIfAnswerTaken = (index: number) => {
    const item = {...testSet.matching.items[index]};
    const answers = testSet.matching.items.map(item => item.answer);
    return answers.includes(item.term);
  }

  const answerItemOnClickHandler = (item: string) => {
    let matchingItems = {...testSet.matching};
    matchingItems.items[focusedItem].answer = item;
    matchingItems.items[focusedItem].isCorrect = item === matchingItems.items[focusedItem].term;
    setTestSet({...testSet, matching: matchingItems});
    setFocusedItem(focusedItem + 1);

    const areAllAnswered = matchingItems.items.map(item => item.answer !== null);
    if (areAllAnswered.every(item => item))
      handleRefScroll(testSet.lengths[0] + testSet.lengths[1]);
  }

  useEffect(() => {
    setFocusedItem(0);
  }, [isTestChecked])

  return (
    <Container ref={reference}>
      <ComponentTitle>Match term to definition</ComponentTitle>
      <ComponentHeader>Select a term to match it with its definition</ComponentHeader>
      <div>{isTestChecked ? <CheckedPart matchingTest={testSet.matching}/> : <>
        <DefinitionsPart>
          {testSet.matching.items.map((item, index) => {
            return <DefinitionsItem
              key={item.id}
              testItem={item}
              index={index}
              focusedItem={focusedItem}
              setFocusedItem={setFocusedItem}
              isNoAnswers={testSet.matching.items.filter(item => item.answer !== null).length === 0}
              testSet={testSet}
              setTestSet={setTestSet}
            />
          })}
        </DefinitionsPart>
        <AnswersPart>
          {testSet.matching.answers
            .map(item => {
              return <AnswerItemContainer
                key={item.answer}
                isTaken={checkIfAnswerTaken(item.index)}
                onClick={() => answerItemOnClickHandler(item.answer)}
              >
                <AnswerItemWrap>
                  <AnswerItemContent>
                    <TextFormater>{item.answer}</TextFormater>
                  </AnswerItemContent>
                </AnswerItemWrap>
              </AnswerItemContainer>
            })}
        </AnswersPart>
      </>}
      </div>
      <NumberContainer>
        <NumberContent>{calculateOrderNumber()}</NumberContent>
      </NumberContainer>
    </Container>
  );
};

export default Matching;