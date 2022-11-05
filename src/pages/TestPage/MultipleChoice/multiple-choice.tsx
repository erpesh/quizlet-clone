import React, {FC, useState} from 'react';
import {ITerm, ITestSet} from '../../../types';
import {
  Container,
  NumberContainer,
  NumberContent,
  TitleCenter,
  TitleEnd,
  TitleWrap,
  TopPart,
  Word,
  WordContainer,
  WordHandler,
  WordTitle,
  WordTitleContainer,
  WordTitleWrap
} from '../test-page.styles';
import CheckedPart from './checked-part';
import {AnswerContainer, AnswersPart, AsnwerTitleContainer} from './multiple-choice.styles';
import AnswerItem from '../../../layouts/answer-item.styles';

interface Props {
  index: number,
  testSet: ITestSet,
  setTestSet: (testSet: ITestSet) => void,
  reference: React.RefObject<HTMLDivElement>,
  handleRefScroll: (id: number) => void,
  isTestChecked: boolean
}

const MultipleChoice: FC<Props> = ({testSet, index, setTestSet, reference, handleRefScroll, isTestChecked}) => {

  const [focusValue, setFocusValue] = useState<string | null>(null);

  const toggleFocus = (value: string) => {
    let localFocusValue = focusValue === value ? null : value;
    setFocusValue(localFocusValue);

    let multipleChoiceItems = [...testSet.multipleChoice];
    let testItem = {...testSet.multipleChoice[index]};
    if (localFocusValue) {
      testItem.isCorrect = testItem.term === localFocusValue;
      testItem.answer = localFocusValue;
      handleRefScroll(testSet.lengths[0] + index);
    } else {
      testItem.isCorrect = false;
      testItem.answer = null;
    }
    multipleChoiceItems[index] = testItem;
    setTestSet({...testSet, multipleChoice: multipleChoiceItems});
  }

  return (
    <Container ref={reference} style={{marginTop: "2rem"}} tabIndex={-1}>
      <TopPart>
        <WordTitleWrap>
          <WordTitleContainer>
            <TitleWrap>
              <WordTitle>Definition</WordTitle>
            </TitleWrap>
            <TitleCenter/>
            <TitleEnd/>
          </WordTitleContainer>
        </WordTitleWrap>
        <WordContainer>
          <WordHandler>
            <Word>
              <div>{testSet.multipleChoice[index].definition}</div>
            </Word>
          </WordHandler>
        </WordContainer>
      </TopPart>
      <AnswersPart>
        {isTestChecked ? <CheckedPart testItem={testSet.multipleChoice[index]}/> : <>
          <AsnwerTitleContainer>
            <div>Select the correct term</div>
          </AsnwerTitleContainer>
          <AnswerContainer>
            {testSet.multipleChoice[index].possibleAnswers.map((item: ITerm) => (
              <AnswerItem
                key={item.term}
                tabIndex={0}
                isFocus={focusValue === item.term}
                onClick={() => toggleFocus(item.term)}
              >
                {item.term}
              </AnswerItem>
            ))}
          </AnswerContainer>
        </>}
      </AnswersPart>
      <NumberContainer>
        <NumberContent>{(testSet.lengths[0] + index + 1) + " of " + testSet.totalLength}</NumberContent>
      </NumberContainer>
    </Container>
  );
};

export default MultipleChoice;