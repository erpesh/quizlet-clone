import React, {useState} from 'react'
import {ITestSet} from "../../types";
import Matching from './Matching/matching'
import MultipleChoice from './MultipleChoice/multiple-choice'
import SubmitSection from './SubmitSection/sumbit-section'
import {AnswersTitle, OtherSection, TrueFalseSection} from './test-page.styles'
import TestResultComponent from './TestResultComponent/test-result-component'
import TrueOrFalse from './TrueOrFalse/true-or-false'
import Written from './Written/written'

interface Props {
  testSet: ITestSet,
  setTestSet: (testSet: ITestSet) => void,
  refsLength: number
}

const PageContent: React.FC<Props> = ({testSet, setTestSet, refsLength}) => {

  const [isTestChecked, setIsTestChecked] = useState(false);

  const refs = Array(refsLength).fill(0)
    .map(item => React.createRef<HTMLDivElement>())

  const handleRefScroll = (id: number) => {
    //@ts-ignore
    refs[id + 1].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <>
      {isTestChecked &&
        <TestResultComponent
          testSet={testSet}
          setTestSet={setTestSet}
          setIsTestChecked={setIsTestChecked}
        />}
      <TrueFalseSection>
        {isTestChecked && <AnswersTitle>Your answers</AnswersTitle>}
        {testSet.trueFalse.map((item, index) => {
          return <TrueOrFalse
            key={item.id}
            testSet={testSet}
            index={index}
            setTestSet={setTestSet}
            reference={refs[index]}
            handleRefScroll={handleRefScroll}
            isTestChecked={isTestChecked}
          />
        })}
      </TrueFalseSection>
      <OtherSection>
        {testSet.multipleChoice.map((item, index) => {
          return <MultipleChoice
            key={item.id}
            testSet={testSet}
            index={index}
            setTestSet={setTestSet}
            reference={refs[testSet.lengths[0] + index]}
            handleRefScroll={handleRefScroll}
            isTestChecked={isTestChecked}
          />
        })}
      </OtherSection>
      <OtherSection>
        <Matching
          testSet={testSet}
          setTestSet={setTestSet}
          reference={refs[testSet.lengths[0] + testSet.lengths[1]]}
          handleRefScroll={handleRefScroll}
          isTestChecked={isTestChecked}
        />
      </OtherSection>
      <OtherSection>
        {testSet.written.map((item, index) => {
          return <Written
            key={item.id}
            testSet={testSet}
            index={index}
            setTestSet={setTestSet}
            reference={refs[testSet.lengths[0] + testSet.lengths[1] + 1 + index]}
            handleRefScroll={handleRefScroll}
            isTestChecked={isTestChecked}
          />
        })}
      </OtherSection>
      {!isTestChecked && <SubmitSection setIsTestChecked={setIsTestChecked}/>}
    </>
  )
}

export default PageContent