import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {
  Container,
  ContentContainer,
  ContentDivision,
  ContentItemContainer,
  ContentItemHeader,
  ContentWrap,
  IconContainer,
  IconContent,
  NumberOfAnswers,
  ReferenceItemContainer,
  RefMainContent,
  RefMainHeader,
  RefMainText,
  ResultContainer,
  ResultLefItem,
  ResultRightItem,
  SecondPartContent,
  TopItemContentWrap
} from './test-result-component.styles'
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  IMatchingItem,
  IMultipleChoice,
  ITestSet,
  ITrueFalse,
  IWritten
} from '../../../types';
import colors from '../../../assets/colors';
import testModeIcon from "../../../assets/images/test-mode-icon.svg";
import learnModeIcon from "../../../assets/images/learn-mode-icon.svg";
import generateTest from "../test-generator";

interface Props {
  testSet: ITestSet,
  setTestSet: (set: ITestSet) => void,
  setIsTestChecked: (isChecked: boolean) => void
}

const TestResultComponent: React.FC<Props> = ({testSet, setTestSet, setIsTestChecked}) => {

  const {id} = useParams();
  const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState(0);

  const countCorrectAnswers = () => {
    let numberOfCorrectAnswers = 0;
    testSet.trueFalse.forEach(item => item.isCorrect ? numberOfCorrectAnswers++ : numberOfCorrectAnswers += 0)
    testSet.multipleChoice.forEach(item => item.isCorrect ? numberOfCorrectAnswers++ : numberOfCorrectAnswers += 0)
    testSet.matching.items.forEach(item => item.isCorrect ? numberOfCorrectAnswers++ : numberOfCorrectAnswers += 0)
    testSet.written.forEach(item => item.isCorrect ? numberOfCorrectAnswers++ : numberOfCorrectAnswers += 0)
    return numberOfCorrectAnswers;
  }
  const narrowToTermObject = (item: ITrueFalse | IMultipleChoice | IMatchingItem | IWritten) => {
    return {
      id: item.id,
      term: item.term,
      definition: item.definition,
      isMarked: item.isMarked
    }
  }
  const handleNewTestClick = () => {
    const testSetIncorrectAnswers = {
      trueFalse: [...testSet.trueFalse.filter(item => !item.isCorrect)],
      multipleChoice: [...testSet.multipleChoice.filter(item => !item.isCorrect)],
      matching: [...testSet.matching.items.filter(item => !item.isCorrect)],
      written: [...testSet.written.filter(item => !item.isCorrect)]
    }
    let terms = [
      ...testSetIncorrectAnswers.trueFalse.map(item => narrowToTermObject(item)),
      ...testSetIncorrectAnswers.multipleChoice.map(item => narrowToTermObject(item)),
      ...testSetIncorrectAnswers.matching.map(item => narrowToTermObject(item)),
      ...testSetIncorrectAnswers.written.map(item => narrowToTermObject(item))
    ]
    setTestSet(generateTest(terms));
    setIsTestChecked(false);
  }

  useEffect(() => {
    setNumberOfCorrectAnswers(countCorrectAnswers());
  }, [])


  return (
    <Container>
      <ContentWrap>
        <ContentDivision>
          <ContentContainer>
            <ContentItemContainer>
              <ContentItemHeader>Your time: 1 min.</ContentItemHeader>
              <TopItemContentWrap>
                <div style={{width: "6.25rem"}}>
                  <CircularProgressbar
                    value={numberOfCorrectAnswers}
                    maxValue={testSet.totalLength}
                    text={`${Math.round(numberOfCorrectAnswers * 100 / testSet.totalLength)}%`}
                    strokeWidth={12}
                    styles={buildStyles({
                      pathColor: "#59e8b5",
                      textColor: colors.UIColorGray60,
                      trailColor: '#FF983A',
                      backgroundColor: '#3e98c7',
                    })}
                  />
                </div>
                <ResultContainer>
                  <ResultLefItem>
                    <div style={{color: colors.mint500}}>Correct</div>
                    <div style={{color: colors.sherbert500}}>Incorrect</div>
                  </ResultLefItem>
                  <ResultRightItem>
                    <NumberOfAnswers isCorrect>{numberOfCorrectAnswers}</NumberOfAnswers>
                    <NumberOfAnswers>{testSet.totalLength - numberOfCorrectAnswers}</NumberOfAnswers>
                  </ResultRightItem>
                </ResultContainer>
              </TopItemContentWrap>
            </ContentItemContainer>
            <ContentItemContainer>
              <ContentItemHeader>Next steps</ContentItemHeader>
              <SecondPartContent>
                <Link to={`/${id}/learn`} style={{textDecoration: "none"}}>
                  <ReferenceItemContainer>
                    <IconContainer>
                      <IconContent img={learnModeIcon}/>
                    </IconContainer>
                    <RefMainContent>
                      <RefMainHeader>Practise terms in Learn</RefMainHeader>
                      <RefMainText>Learn these terms in a different way to build knowledge.</RefMainText>
                    </RefMainContent>
                  </ReferenceItemContainer>
                </Link>
                {testSet.totalLength - numberOfCorrectAnswers >= 5 &&
                  <ReferenceItemContainer onClick={handleNewTestClick}>
                    <IconContainer>
                      <IconContent img={testModeIcon}/>
                    </IconContainer>
                    <RefMainContent>
                      <RefMainHeader>Retest using missed terms</RefMainHeader>
                      <RefMainText>Test yourself again on the terms you got wrong.</RefMainText>
                    </RefMainContent>
                  </ReferenceItemContainer>}
              </SecondPartContent>
            </ContentItemContainer>
          </ContentContainer>
        </ContentDivision>
      </ContentWrap>
    </Container>
  )
}

export default TestResultComponent