import React from 'react'
import {AnswerTitle, AnswerTitleSection} from './written.styles';
import colors from '../../../assets/colors';
import AnswerItem from "../../../layouts/answer-item.styles";
import {AiOutlineCheck} from 'react-icons/ai';
import {FiX} from 'react-icons/fi';
import {IWritten} from "../../../types";

interface Props {
  testItem: IWritten
}

const CheckedPart: React.FC<Props> = ({testItem}) => {
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
      <FiX style={{color: colors.UIColorGray60, marginRight: ".625rem"}}/>
      Skipped
    </AnswerItem>
    <AnswerTitle style={{marginTop: "2rem"}}>
      <AnswerTitleSection>Correct answer</AnswerTitleSection>
    </AnswerTitle>
    <AnswerItem
      tabIndex={0}
      color={colors.green400}
      bgColor={colors.green100}
      removeHover
    >
      <AiOutlineCheck style={{color: colors.green400, marginRight: ".625rem"}}/>
      {term}
    </AnswerItem>
  </>
  // When the asnwer is incorrect
  if (!isCorrect) return <>
    <AnswerTitle>
      <AnswerTitleSection style={{color: colors.coral300}}>Not quite. You're still learning!</AnswerTitleSection>
    </AnswerTitle>
    <AnswerItem
      tabIndex={0}
      color={colors.coral300}
      removeHover
    >
      <FiX style={{color: colors.coral300, marginRight: ".625rem"}}/>
      {answer}
    </AnswerItem>
    <AnswerTitle style={{marginTop: "2rem"}}>
      <AnswerTitleSection>Correct answer</AnswerTitleSection>
    </AnswerTitle>
    <AnswerItem
      tabIndex={0}
      color={colors.green400}
      bgColor={colors.green100}
      removeHover
    >
      <AiOutlineCheck style={{color: colors.green400, marginRight: ".625rem"}}/>
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
        <AiOutlineCheck style={{color: colors.green400, marginRight: ".625rem"}}/>
        {answer}
      </AnswerItem>
    </>
  )
}

export default CheckedPart