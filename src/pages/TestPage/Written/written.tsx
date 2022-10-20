import React from 'react';
import { testType } from '../interfaces';
import { 
  NumberContainer, 
  NumberContent, 
  TopPart,
  TitleCenter,
  TitleEnd,
  TitleWrap,
  WordTitle,
  WordTitleContainer,
  WordTitleWrap, 
  Word,
  WordContainer,
  WordHandler
} from '../test-page.styles';
import { Container } from './written.styles';

interface Props {
  orderNumber: number,
  totalNumber: number,
  index: number,
  testSet: testType,
  setTestSet: (testSet: testType) => void
}

const Written: React.FC<Props> = ({ orderNumber, totalNumber, index, testSet, setTestSet }) => {
  return (
    <Container tabIndex={-1}>
      <div>
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
                <div>{testSet.multipleChoice[index].definition}</div>
              </Word>
            </WordHandler>
          </WordContainer>
        </TopPart>
      </div>
      <NumberContainer>
        <NumberContent>{orderNumber + " of " + totalNumber}</NumberContent>
      </NumberContainer>
    </Container>
  );
};

export default Written;