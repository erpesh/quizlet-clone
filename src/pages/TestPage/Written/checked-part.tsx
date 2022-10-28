import React from 'react'
import { writtenTest } from '../interfaces'
import { AssemblyInput } from '../../../components/AssemblyInput/assembly-input';
import { BlueButton } from '../../../components/BlueButton/blue-button.styles';
import { AnswerTitle, AnswerTitleSection, AnswerForm, ButtonContainer, InputContainer } from './written.styles';
import colors from '../../../assets/colors';
import { AnswerItem } from '../test-page.styles';
import { AiOutlineCheck } from 'react-icons/ai';
import { FiX } from 'react-icons/fi';

interface Props {
    testItem: writtenTest
}

const CheckedPart: React.FC<Props> = ({ testItem }) => {
    const {
        isCorrect,
        term,
        answer
    } = testItem;

    // When the question is skipped
    if (!answer) return <>
        <AnswerTitle>
            <AnswerTitleSection>Give this one a go later!</AnswerTitleSection>
        </AnswerTitle>
        <AnswerItem
            tabIndex={0}
            color={colors.UIColorGray60}
            removeHover
        >
            <FiX style={{ color: colors.UIColorGray60, marginRight: ".625rem" }} />
            Skipped
        </AnswerItem>
        <AnswerTitle style={{ marginTop: "2rem" }}>
            <AnswerTitleSection>Correct answer</AnswerTitleSection>
        </AnswerTitle>
        <AnswerItem
            tabIndex={0}
            color={colors.green400}
            bgColor={colors.green100}
            removeHover
        >
            <AiOutlineCheck style={{ color: colors.green400, marginRight: ".625rem" }} />
            {term}
        </AnswerItem>
    </>
    // When the asnwer is incorrect
    if (!isCorrect) return <>
        <AnswerTitle>
            <AnswerTitleSection style={{ color: colors.coral300 }}>Not quite. You're still learning!</AnswerTitleSection>
        </AnswerTitle>
        <AnswerItem
            tabIndex={0}
            color={colors.coral300}
            removeHover
        >
            <FiX style={{ color: colors.coral300, marginRight: ".625rem" }} />
            {answer}
        </AnswerItem>
        <AnswerTitle style={{ marginTop: "2rem" }}>
            <AnswerTitleSection>Correct answer</AnswerTitleSection>
        </AnswerTitle>
        <AnswerItem
            tabIndex={0}
            color={colors.green400}
            bgColor={colors.green100}
            removeHover
        >
            <AiOutlineCheck style={{ color: colors.green400, marginRight: ".625rem" }} />
            {term}
        </AnswerItem>
    </>

    // When the question is correct
    return (
        <>
            <AnswerTitle>
                <AnswerTitleSection>Awesome!</AnswerTitleSection>
            </AnswerTitle>
            <AnswerItem
                tabIndex={0}
                color={colors.green400}
                bgColor={colors.green100}
                style={{padding: "1.5rem 1rem"}}
                removeHover
            >
                <AiOutlineCheck style={{ color: colors.green400, marginRight: ".625rem" }} />
                {answer}
            </AnswerItem>
        </>
    )
}

export default CheckedPart