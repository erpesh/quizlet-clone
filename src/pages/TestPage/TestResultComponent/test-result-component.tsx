import React from 'react'
import {
  Container,
  ContentContainer,
  ContentDivision,
  ContentItemContainer,
  ContentItemHeader,
  ContentWrap,
  NumberOfAnswers,
  ResultContainer,
  ResultLefItem,
  ResultRightItem,
  TopItemContentWrap
} from './test-result-component.styles'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { testType } from '../interfaces';
import colors from '../../../assets/colors';

interface Props {
  testSet: testType
}

const TestResultComponent: React.FC<Props> = ({ testSet }) => {
  return (
    <Container>
      <ContentWrap>
        <ContentDivision>
          <ContentContainer>
            <ContentItemContainer>
              <ContentItemHeader>Your time: 1 min.</ContentItemHeader>
              <TopItemContentWrap>
                <CircularProgressbar
                  value={12}
                  text={`12%`}
                  styles={buildStyles({
                    pathColor: `rgba(62, 152, 199, .12)`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}
                />
                <ResultContainer>
                  <ResultLefItem>
                    <div style={{color: colors.mint500}}>Correct</div>
                    <div style={{color: colors.sherbert500}}>Incorrect</div>
                  </ResultLefItem>
                  <ResultRightItem>
                    <NumberOfAnswers isCorrect>12</NumberOfAnswers>
                    <NumberOfAnswers>100</NumberOfAnswers>
                  </ResultRightItem>
                </ResultContainer>
              </TopItemContentWrap>
            </ContentItemContainer>
            <ContentItemContainer>
              <ContentItemHeader>Next steps</ContentItemHeader>
            </ContentItemContainer>
          </ContentContainer>
        </ContentDivision>
      </ContentWrap>
    </Container>
  )
}

export default TestResultComponent