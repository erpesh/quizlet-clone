import React from 'react'
import { multipleChoiseTest } from '../interfaces'
import termInterface from '../../../interfaces/term-interface';
import { AnswerItem } from '../test-page.styles';
import { AsnwerTitleContainer, AnswerContainer } from './multiple-choice.styles';
import { AiOutlineCheck } from "react-icons/ai";
import colors from "../../../assets/colors";
import { FiX } from 'react-icons/fi';

interface Props {
    testItem: multipleChoiseTest
}

const CheckedPart: React.FC<Props> = ({ testItem }) => {

    const {
        term,
        isCorrect,
        answer,
        possibleAnswers,
    } = testItem;

    if (isCorrect) return <>
        <AsnwerTitleContainer style={{color: colors.green400}}>
            <div>Awesome!</div>
        </AsnwerTitleContainer>
        <AnswerContainer>
            {testItem.possibleAnswers.map((item: termInterface) => (
                <AnswerItem
                    key={item.term}
                    tabIndex={0}
                    color={item.term === term ? colors.green400 : undefined}
                    bgColor={item.term === term ? colors.green100 : undefined}
                    removeHover
                >
                    {item.term === term && <AiOutlineCheck style={{ color: colors.green400, marginRight: ".625rem" }} />}
                    {item.term}
                </AnswerItem>
            ))}
        </AnswerContainer>
    </>

    if (!isCorrect && answer) return <>
        <AsnwerTitleContainer style={{color: colors.coral300}}>
            <div>Not quite. You're still learning!</div>
        </AsnwerTitleContainer>
        <AnswerContainer>
            {testItem.possibleAnswers.map((item: termInterface) => (
                <AnswerItem
                    key={item.term}
                    tabIndex={0}
                    color={item.term === term ?
                        colors.green400 :
                        item.term === answer ?
                        colors.coral300 : undefined
                    }
                    bgColor={item.term === term ? colors.green100 : undefined}
                    removeHover
                >
                    {item.term === term && <AiOutlineCheck style={{ color: colors.green400, marginRight: ".625rem" }} />}
                    {item.term === answer && <FiX style={{ color: colors.coral300, marginRight: ".625rem" }} />}
                    {item.term}
                </AnswerItem>
            ))}
        </AnswerContainer>
    </>


    return (
        <>
            <AsnwerTitleContainer>
                <div>Select the correct term</div>
            </AsnwerTitleContainer>
            <AnswerContainer>
                {testItem.possibleAnswers.map((item: termInterface) => (
                    <AnswerItem
                        key={item.term}
                        tabIndex={0}
                        color={item.term === term ? colors.UIColorGray60 : undefined}
                        removeHover
                    >
                        {item.term === term && <AiOutlineCheck style={{ color: colors.UIColorGray60, marginRight: ".625rem" }} />}
                        {item.term}
                    </AnswerItem>
                ))}
            </AnswerContainer>
        </>
    )
}

export default CheckedPart