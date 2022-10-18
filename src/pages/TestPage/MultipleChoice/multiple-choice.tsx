import React, {FC, useState} from 'react';
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
  data: string[]
}

const MultipleChoice: FC<Props> = ({data}) => {

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
                  <div>definition hallo</div>
                </TextFormater>
              </DefinitionContainer>
            </DefinitionWrap>
          </DefinitionPart>
          <AnswersPart>
            <AsnwerTitleContainer>
              <div>Select the correct term</div>
            </AsnwerTitleContainer>
            <AnswerContainer>
              {data.map(item => (
                <AnswerItem
                  tabIndex={0}
                  isFocus={focusValue === item}
                  onClick={() => toggleFocus(item)}
                >
                  {item}
                </AnswerItem>
              ))}
            </AnswerContainer>
          </AnswersPart>
          <NumberContainer>
            <NumberContent>1 of 20</NumberContent>
          </NumberContainer>
        </Container>
      </div>
    </div>
  );
};

export default MultipleChoice;