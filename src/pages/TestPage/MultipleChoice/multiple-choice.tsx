import React, {FC, useState} from 'react';
import termInterface from '../../../interfaces/term-interface';
import { multipleChoiseTest } from '../interfaces';
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
  testItem: multipleChoiseTest,
  orderNumber: number,
  totalNumber: number
}

const MultipleChoice: FC<Props> = ({testItem, orderNumber, totalNumber}) => {

  const [focusValue, setFocusValue] = useState<string | null>(null);

  const toggleFocus = (value: string) => setFocusValue(focusValue === value ? null : value)

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
                  <div>{testItem.definition}</div>
                </TextFormater>
              </DefinitionContainer>
            </DefinitionWrap>
          </DefinitionPart>
          <AnswersPart>
            <AsnwerTitleContainer>
              <div>Select the correct term</div>
            </AsnwerTitleContainer>
            <AnswerContainer>
              {testItem.possibleAnswers.map(item => (
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