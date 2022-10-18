import React, { FC, useRef, useState } from 'react'
import termInterface from '../../../interfaces/term-interface'
import { 
  NumberContainer, 
  NumberContent,
  TitleCenter,
  TitleEnd,
  TitleWrap,
  WordTitle,
  WordTitleContainer,
  WordTitleWrap,
  AnswerItem,
} from '../test-page.styles'
import {
  AnswerContainer,
  Container,
  DefinitionPart,
  MainSection,
  SecondTitle,
  TermPart,
  PartContainer,
  Word,
  WordContainer,
  WordHandler
} from './true-or-false.styles'

interface Props {
  termData?: termInterface,
  isTrue?: boolean,
  setAnswer?: () => void
}

const TrueOrFalse: FC<Props> = ({ termData, isTrue }) => {

  const [focusValue, setFocusValue] = useState<string | null>(null);

  const toggleFocus = (value: string) => setFocusValue(focusValue === value ? null : value)

  return (
    // <div role="listitem">
    <Container tabIndex={-1}>
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
          True
        </AnswerItem>
        <AnswerItem
          isFocus={focusValue === "false"}
          onClick={() => toggleFocus("false")}
          tabIndex={0}
        >
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