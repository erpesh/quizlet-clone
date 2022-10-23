import React from 'react'
import { matchingTest, testType } from '../../interfaces'
import {
    InactiveAnswerBox,
    ActiveAnswerBox,
    ActiveAnswerBoxWithMessage,
    ActiveBoxMessage,
    TextContainer,
    TextFormater,
    TextWrap,
    DefaultAnswerBox,
    RemoveIconContainer,
    AnsweredBoxContent
} from './definitions-item.styles'
import { FiX } from 'react-icons/fi';

interface Props {
    testItem: matchingTest,
    index: number,
    focusedItem: number,
    setFocusedItem: (item: number) => void,
    isNoAnswers: boolean,
    testSet: testType,
    setTestSet: (testSet: testType) => void
}

const answerBox = (
    testItem: matchingTest,
    focusedItem: number,
    isNoAnswers: boolean,
    setFocusedItem: (item: number) => void,
    index: number,
    testSet: testType,
    setTestSet: (testSet: testType) => void
) => {

    const onClickHandler = () => {
        if (focusedItem !== index) {
            setFocusedItem(index);
        }
    }
    const removeClickHandler = () => {
        let matchingItems = [...testSet.matching];
        matchingItems[index].answer = null;
        matchingItems[index].isCorrect = false;
        setTestSet({...testSet, matching: matchingItems});
    }

    if (testItem.answer) {
        if (focusedItem === index) {
            return (
                <ActiveAnswerBox onClick={onClickHandler} tabIndex={-1}>
                    <div style={{ cursor: "pointer" }}>
                        <AnsweredBoxContent>
                            <TextFormater>
                                {testItem.answer}
                            </TextFormater>
                        </AnsweredBoxContent>
                    </div>
                    <RemoveIconContainer onClick={removeClickHandler} tabIndex={0}>
                        <FiX />
                    </RemoveIconContainer>
                </ActiveAnswerBox>
            )
        }
        return (
            <DefaultAnswerBox onClick={onClickHandler} tabIndex={-1}>
                <div style={{ cursor: "pointer" }}>
                    <AnsweredBoxContent>
                        <TextFormater>
                            {testItem.answer}
                        </TextFormater>
                    </AnsweredBoxContent>
                </div>
                <RemoveIconContainer onClick={removeClickHandler} tabIndex={0}>
                    <FiX />
                </RemoveIconContainer>
            </DefaultAnswerBox>
        )
    }
    if (isNoAnswers && focusedItem === index) {
        return (
            <ActiveAnswerBoxWithMessage onClick={onClickHandler} tabIndex={-1}>
                <ActiveBoxMessage>Select from the list below</ActiveBoxMessage>
            </ActiveAnswerBoxWithMessage>
        )
    }
    if (focusedItem === index) {
        return <ActiveAnswerBox onClick={onClickHandler} tabIndex={-1} />
    }
    return <InactiveAnswerBox onClick={onClickHandler} tabIndex={-1} />
}

const DefinitionsItem: React.FC<Props> = (props) => {

    const {
        testItem,
        index,
        focusedItem,
        setFocusedItem,
        isNoAnswers,
        testSet,
        setTestSet
    } = props;

    return (
        <>
            {answerBox(
                testItem,
                focusedItem,
                isNoAnswers,
                setFocusedItem,
                index,
                testSet,
                setTestSet)}
            <TextContainer>
                <TextWrap>
                    <TextFormater>
                        {testItem.definition}
                    </TextFormater>
                </TextWrap>
            </TextContainer>
        </>
    )
}

export default DefinitionsItem