import React from 'react'
import { FiX } from 'react-icons/fi';
import colors from '../../../assets/colors';
import AnswerItem from "../../../layouts/answer-item.styles";
import { AnswerContainer, SecondTitle } from './true-or-false.styles';
import { AiOutlineCheck } from "react-icons/ai";
import { trueFalseTest } from '../../../types/test-page.types';

interface Props {
  testItem: trueFalseTest
}

const CheckedPart: React.FC<Props> = ({ testItem }) => {

  const {
    isAnswered,
    isTrue,
    isCorrect,
    definition
  } = testItem;

  // When question is skipped and answer is true
  if (!isAnswered && isTrue) return <>
    <SecondTitle color={colors.UIColorGray}>Give this one a go later!</SecondTitle>
    <AnswerContainer>
      <AnswerItem
        tabIndex={0}
        color={colors.UIColorGray60}
        removeHover
      >
        <AiOutlineCheck style={{ color: colors.UIColorGray60, marginRight: ".625rem" }} />
        True
      </AnswerItem>
      <AnswerItem
        tabIndex={0}
        color={colors.colorDisabled}
        removeHover
        style={{color: colors.UIColorGray60}}
      >
        False
      </AnswerItem>
    </AnswerContainer>
  </> 

  // When question is skipped and answer is false
  if (!isAnswered && !isTrue) return <>
    <SecondTitle>Give this one a go later!</SecondTitle>
    <AnswerContainer>
      <AnswerItem
        tabIndex={0}
        color={colors.colorDisabled}
        removeHover
        style={{color: colors.UIColorGray60}}
      >
        True
      </AnswerItem>
      <AnswerItem
        tabIndex={0}
        color={colors.UIColorGray60}
        removeHover
      >
        <AiOutlineCheck style={{ color: colors.UIColorGray60, marginRight: ".625rem" }} />
        False
      </AnswerItem>
    </AnswerContainer>
    <SecondTitle>Correct definition</SecondTitle>
    <AnswerItem
      tabIndex={0}
      color={colors.green400}
      bgColor={colors.green100}
    >
      <AiOutlineCheck style={{ color: colors.green400, marginRight: ".625rem" }} />
      {definition}
    </AnswerItem>
  </>

  // When asnwer is true ans user answered correctly
  if (isTrue && isCorrect) return <>
    <SecondTitle style={{ color: colors.green400 }}>Awesome!</SecondTitle>
    <AnswerContainer>
      <AnswerItem
        tabIndex={0}
        color={colors.green400}
        bgColor={colors.green100}
        removeHover
      >
        <AiOutlineCheck style={{ color: colors.green400, marginRight: ".625rem" }} />
        True
      </AnswerItem>
      <AnswerItem
        tabIndex={0}
        color={colors.colorDisabled}
        removeHover
      >
        False
      </AnswerItem>
    </AnswerContainer>
  </>

  // When asnwer is true and user answered incorrectly
  if (isTrue && !isCorrect) return <>
    <SecondTitle style={{ color: colors.coral300 }}>Not quite. You're still learning!</SecondTitle>
    <AnswerContainer>
      <AnswerItem
        tabIndex={0}
        color={colors.colorDisabled}
        removeHover
      >
        True
      </AnswerItem>
      <AnswerItem
        tabIndex={0}
        color={colors.coral300}
        removeHover
      >
        <FiX style={{ color: colors.coral300, marginRight: ".625rem" }} />
        False
      </AnswerItem>
    </AnswerContainer>
  </>

  // When answer is false and user answered correctly
  if (!isTrue && isCorrect) return <>
    <SecondTitle style={{ color: colors.green400 }}>Awesome!</SecondTitle>
    <AnswerContainer>
      <AnswerItem
        tabIndex={0}
        color={colors.colorDisabled}
        removeHover
      >
        True
      </AnswerItem>
      <AnswerItem
        tabIndex={0}
        color={colors.green400}
        bgColor={colors.green100}
        removeHover
      >
        <AiOutlineCheck style={{ color: colors.green400, marginRight: ".625rem" }} />
        False
      </AnswerItem>
    </AnswerContainer>
    <SecondTitle>Correct definition</SecondTitle>
    <AnswerItem
      tabIndex={0}
      color={colors.green400}
      bgColor={colors.green100}
    >
      <AiOutlineCheck style={{ color: colors.green400, marginRight: ".625rem" }} />
      {definition}
    </AnswerItem>
  </>
  
  // When answer is false and user answered incorrectly
  return <>
    <SecondTitle style={{ color: colors.coral300 }}>Not quite. You're still learning!</SecondTitle>
    <AnswerContainer>
      <AnswerItem
        tabIndex={0}
        color={colors.coral300}
        removeHover
      >
        <FiX style={{ color: colors.coral300, marginRight: ".625rem" }} />
        True
      </AnswerItem>
      <AnswerItem
        tabIndex={0}
        color={colors.colorDisabled}
        removeHover
      >
        False
      </AnswerItem>
    </AnswerContainer>
    <SecondTitle>Correct definition</SecondTitle>
    <AnswerItem
      tabIndex={0}
      color={colors.green400}
      bgColor={colors.green100}
    >
      <AiOutlineCheck style={{ color: colors.green400, marginRight: ".625rem" }} />
      {definition}
    </AnswerItem>
  </>
}

export default CheckedPart