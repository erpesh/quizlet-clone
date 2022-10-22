import React, { FC, useState } from 'react'
import { testType } from '../interfaces'
import { 
  Container,
  NumberContainer, 
  NumberContent,
  TitleCenter,
  TitleEnd,
  TitleWrap,
  WordTitle,
  WordTitleContainer,
  WordTitleWrap,
  AnswerItem,
  TopPart,
  Word,
  WordContainer,
  WordHandler
} from '../test-page.styles'
import {
  AnswerContainer,
  DefinitionPart,
  MainSection,
  SecondTitle,
  TermPart,
} from './true-or-false.styles'

interface Props {
  index: number,
  testSet: testType,
  setTestSet: (testSet: testType) => void
}

const TrueOrFalse: FC<Props> = ({ testSet, index, setTestSet }) => {

  const [focusValue, setFocusValue] = useState<string | null>(null);

  const handleOnClick = (value: string) => {
    let localFocusValue = focusValue === value ? null : value;
    setFocusValue(localFocusValue);

    let trueFalseItems = [...testSet.trueFalse];
    let testItem = {...testSet.trueFalse[index]};;
    if (localFocusValue){
      testItem.isCorrect = testItem.isTrue.toString() === localFocusValue;
    }else {
      testItem.isCorrect = false;
    }
    trueFalseItems[index] = testItem;
    setTestSet({...testSet, trueFalse: trueFalseItems});
  }

  return (
    <Container tabIndex={-1}>
      <MainSection>
        <TermPart>
          <TopPart>
            <WordTitleWrap>
              <WordTitleContainer>
                <TitleWrap>
                  <WordTitle>Term</WordTitle>
                </TitleWrap>
                <TitleCenter />
                <TitleEnd />
              </WordTitleContainer>
            </WordTitleWrap>
            <WordContainer>
              <WordHandler>
                <Word>
                  <div>{testSet.trueFalse[index].term}</div>
                </Word>
              </WordHandler>
            </WordContainer>
          </TopPart>
        </TermPart>
        <DefinitionPart>
          <TopPart>
            <WordTitleWrap>
              <WordTitleContainer>
                <TitleWrap>
                  <WordTitle>Definition</WordTitle>
                </TitleWrap>
                <TitleCenter />
                <TitleEnd />
              </WordTitleContainer>
            </WordTitleWrap>
            <WordContainer>
              <WordHandler>
                <Word>
                  <div>{testSet.trueFalse[index].incorrectAnswer ? 
                  testSet.trueFalse[index].incorrectAnswer?.definition :
                  testSet.trueFalse[index].definition}</div>
                </Word>
              </WordHandler>
            </WordContainer>
          </TopPart>
        </DefinitionPart>
      </MainSection>
      <SecondTitle>Choose the answer</SecondTitle>
      <AnswerContainer>
        <AnswerItem
          isFocus={focusValue === "true"}
          onClick={() => handleOnClick("true")}
          tabIndex={0}
        >
          True
        </AnswerItem>
        <AnswerItem
          isFocus={focusValue === "false"}
          onClick={() => handleOnClick("false")}
          tabIndex={0}
        >
          False
        </AnswerItem>
      </AnswerContainer>
      <NumberContainer>
        <NumberContent>{(index + 1) + " of " + testSet.totalLength}</NumberContent>
      </NumberContainer>
    </Container>
  )
}

export default TrueOrFalse;