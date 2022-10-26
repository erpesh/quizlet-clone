import React, { FC, useState } from 'react'
import colors from '../../../assets/colors'
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
import CheckedPart from './checked-part'
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
  setTestSet: (testSet: testType) => void,
  reference: React.RefObject<HTMLDivElement>,
  handleRefScroll: (id: number) => void,
  isTestChecked: boolean
}

const TrueOrFalse: FC<Props> = ({ testSet, index, setTestSet, reference, handleRefScroll, isTestChecked }) => {

  const [focusValue, setFocusValue] = useState<string | null>(null);

  const handleOnClick = (value: string) => {
    let localFocusValue = focusValue === value ? null : value;
    setFocusValue(localFocusValue);

    let trueFalseItems = [...testSet.trueFalse];
    let testItem = { ...testSet.trueFalse[index] };;
    if (localFocusValue) {
      testItem.isCorrect = testItem.isTrue.toString() === localFocusValue;
      testItem.isAnswered = true;
      handleRefScroll(index);
    } else {
      testItem.isCorrect = false;
      testItem.isAnswered = false;
    }
    trueFalseItems[index] = testItem;
    setTestSet({ ...testSet, trueFalse: trueFalseItems });
  }

  return (
    <Container ref={reference} tabIndex={-1}>
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
      {!isTestChecked ? <>
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
      </> : <CheckedPart testItem={testSet.trueFalse[index]} />}
      <NumberContainer>
        <NumberContent>{(index + 1) + " of " + testSet.totalLength}</NumberContent>
      </NumberContainer>
    </Container>
  )
}

export default TrueOrFalse;