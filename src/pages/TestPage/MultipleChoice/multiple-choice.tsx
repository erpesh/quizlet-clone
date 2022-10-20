import React, {FC, useState} from 'react';
import termInterface from '../../../interfaces/term-interface';
import { testType } from '../interfaces';
import { 
  AnswerItem,
  NumberContainer, 
  NumberContent,
  TitleCenter,
  TitleEnd,
  TitleWrap,
  WordTitle,
  WordTitleContainer,
  WordTitleWrap,
} from '../test-page.styles';
import {
  AnswersPart,
  Container,
  DefinitionContainer,
  DefinitionPart,
  DefinitionWrap,
  TextFormater,
  AsnwerTitleContainer,
  AnswerContainer
} from './multiple-choice.styles';

interface Props {
  orderNumber: number,
  totalNumber: number,
  index: number,
  testSet: testType,
  setTestSet: (testSet: testType) => void
}

const MultipleChoice: FC<Props> = ({testSet, orderNumber, totalNumber, index, setTestSet}) => {

  const [focusValue, setFocusValue] = useState<string | null>(null);

  const toggleFocus = (value: string) => {
    let localFocusValue = focusValue === value ? null : value;
    setFocusValue(localFocusValue);

    let multipleChoiceItems = [...testSet.multipleChoice];
    let testItem = {...testSet.multipleChoice[index]};;
    if (localFocusValue){
      testItem.isCorrect = testItem.term === localFocusValue;
    }else {
      testItem.isCorrect = false;
    }
    multipleChoiceItems[index] = testItem;
    setTestSet({...testSet, multipleChoice: multipleChoiceItems});
  }
  
  return (
    <div style={{ marginTop: "2rem" }}>
      <div tabIndex={-1}>
        <Container>
          <DefinitionPart>
            <WordTitleWrap>
              <WordTitleContainer>
                <TitleWrap>
                  <WordTitle>Definition</WordTitle>
                </TitleWrap>
                <TitleCenter />
                <TitleEnd />
              </WordTitleContainer>
            </WordTitleWrap>
            <DefinitionWrap>
              <DefinitionContainer>
                <TextFormater>
                  <div>{testSet.multipleChoice[index].definition}</div>
                </TextFormater>
              </DefinitionContainer>
            </DefinitionWrap>
          </DefinitionPart>
          <AnswersPart>
            <AsnwerTitleContainer>
              <div>Select the correct term</div>
            </AsnwerTitleContainer>
            <AnswerContainer>
              {testSet.multipleChoice[index].possibleAnswers.map((item: termInterface) => (
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
          </AnswersPart>
          <NumberContainer>
            <NumberContent>{orderNumber + " of " + totalNumber}</NumberContent>
          </NumberContainer>
        </Container>
      </div>
    </div>
  );
};

export default MultipleChoice;