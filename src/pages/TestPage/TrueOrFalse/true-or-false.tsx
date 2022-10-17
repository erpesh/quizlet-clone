import React, { FC, useRef, useState } from 'react'
import termInterface from '../../../interfaces/term-interface'
import {
  AnswerContainer,
  AnswerItem,
  Container,
  DefinitionPart,
  MainSection,
  SecondTitle,
  TermPart,
  TitleCenter,
  TitleEnd,
  TitleWrap,
  PartContainer,
  Word,
  WordTitle,
  WordTitleContainer,
  WordTitleWrap,
  WordContainer,
  WordHandler,
  NumberContainer,
  NumberContent
} from './true-or-false.styles'

interface Props {
  termData?: termInterface,
  isTrue?: boolean
}

const TrueOrFalse: FC<Props> = ({ termData, isTrue }) => {

  const [focusValue, setFocusValue] = useState<"true" | "false" | "null">("null");

  const toggleFocus = (value: "true" | "false") => setFocusValue(focusValue === value ? "null" : value)

  return (
    // <div role="listitem">
    <Container>
      <MainSection>
        <TermPart>
          <PartContainer>
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
                  <div>Term itself</div>
                </Word>
              </WordHandler>
            </WordContainer>
          </PartContainer>
        </TermPart>
        <DefinitionPart>
          <PartContainer>
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
                  <div>Definition itself</div>
                </Word>
              </WordHandler>
            </WordContainer>
          </PartContainer>
        </DefinitionPart>
      </MainSection>
      <SecondTitle>Choose the answer</SecondTitle>
      <AnswerContainer>
        <AnswerItem
          isFocus={focusValue === "true"}
          onClick={() => toggleFocus("true")}
          tabIndex={0}
        >
          <div />
          True
        </AnswerItem>
        <AnswerItem
          isFocus={focusValue === "false"}
          onClick={() => toggleFocus("false")}
          tabIndex={0}
        >
          <div />
          False
        </AnswerItem>
      </AnswerContainer>
      <NumberContainer>
        <NumberContent>1 of 20</NumberContent>
      </NumberContainer>
    </Container>
    // </div>
  )
}

export default TrueOrFalse;