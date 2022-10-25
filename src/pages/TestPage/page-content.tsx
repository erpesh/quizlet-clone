import React from 'react'
import { testType } from './interfaces'
import Matching from './Matching/matching'
import MultipleChoice from './MultipleChoice/multiple-choice'
import SubmitSection from './SubmitSection/sumbit-section'
import { OtherSection, TrueFalseSection } from './test-page.styles'
import TrueOrFalse from './TrueOrFalse/true-or-false'
import Written from './Written/written'

interface Props {
    testSet: testType,
    setTestSet: (testSet: testType) => void,
    refsLength: number
}

const PageContent: React.FC<Props> = ({ testSet, setTestSet, refsLength }) => {

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
            <TrueFalseSection>
                {testSet.trueFalse.map((item, index) => {
                    return <TrueOrFalse
                        key={item.id}
                        testSet={testSet}
                        index={index}
                        setTestSet={setTestSet}
                        reference={refs[index]}
                        handleRefScroll={handleRefScroll}
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
                    />
                })}
            </OtherSection>
            <OtherSection>
                <Matching
                    testSet={testSet}
                    setTestSet={setTestSet}
                    reference={refs[testSet.lengths[0] + testSet.lengths[1]]}
                    handleRefScroll={handleRefScroll}
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
                    />
                })}
            </OtherSection>
            <SubmitSection/>
        </>
    )
}

export default PageContent