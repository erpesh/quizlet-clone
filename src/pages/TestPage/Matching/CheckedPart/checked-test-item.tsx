import React from 'react'
import colors from '../../../../assets/colors';
import AnswerItem from "../../../../layouts/answer-item.styles";
import {
    AnswerContainer,
    TestItemContainer,
    TestItemHeaderContainer,
    TestItemHeaderWrap,
    TestItemMessage,
    TextFormater
} from './checked-part.styles';
import { AiOutlineCheck } from 'react-icons/ai';
import { matchingTestItem } from '../../../../types/test-page.types';
import { FiX } from 'react-icons/fi';

interface Props {
    testItem: matchingTestItem
}

const CheckedTestItem: React.FC<Props> = ({ testItem }) => {
    const {
        isCorrect,
        term,
        answer,
        definition
    } = testItem;

    // when answer is skipped
    if (!answer) return <>
        <TestItemContainer>
            <TestItemHeaderContainer>
                <TestItemHeaderWrap>
                    <TextFormater>{definition}</TextFormater>
                </TestItemHeaderWrap>
            </TestItemHeaderContainer>
            <TestItemMessage textColor={colors.UIColorGray60}>Give this one a go later!</TestItemMessage>
            <AnswerContainer>
                <AnswerItem
                    tabIndex={0}
                    color={colors.UIColorGray60}
                    removeHover
                >
                    <AiOutlineCheck style={{ color: colors.UIColorGray60, marginRight: ".625rem" }} />
                    {term}
                </AnswerItem>
            </AnswerContainer>
        </TestItemContainer>
    </>

    // When asnwer is correct
    if (isCorrect) return <>
        <TestItemContainer>
            <TestItemHeaderContainer>
                <TestItemHeaderWrap>
                    <TextFormater>{definition}</TextFormater>
                </TestItemHeaderWrap>
            </TestItemHeaderContainer>
            <TestItemMessage textColor={colors.green400}>Awesome!</TestItemMessage>
            <AnswerContainer>
                <AnswerItem
                    tabIndex={0}
                    color={colors.green400}
                    bgColor={colors.green100}
                    removeHover
                >
                    <AiOutlineCheck style={{ color: colors.green400, marginRight: ".625rem" }} />
                    {term}
                </AnswerItem>
            </AnswerContainer>
        </TestItemContainer>
    </>

    return (
        <TestItemContainer>
            <TestItemHeaderContainer>
                <TestItemHeaderWrap>
                    <TextFormater>{definition}</TextFormater>
                </TestItemHeaderWrap>
            </TestItemHeaderContainer>
            <TestItemMessage textColor={colors.coral300}>Not quite. You're still learning!</TestItemMessage>
            <AnswerContainer>
                <AnswerItem
                    tabIndex={0}
                    color={colors.coral300}
                    removeHover
                >
                    <FiX style={{ color: colors.coral300, marginRight: ".625rem" }} />
                    {answer}
                </AnswerItem>
                <AnswerItem
                    tabIndex={0}
                    color={colors.green400}
                    bgColor={colors.green100}
                    removeHover
                >
                    <AiOutlineCheck style={{ color: colors.green400, marginRight: ".625rem" }} />
                    {term}
                </AnswerItem>
            </AnswerContainer>
        </TestItemContainer>
    )
}

export default CheckedTestItem