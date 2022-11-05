import React from 'react'
import {IMatchingItem, ITestSet} from '../../../../types';
import {
  ActiveAnswerBox,
  ActiveAnswerBoxWithMessage,
  ActiveBoxMessage,
  AnsweredBoxContent,
  DefaultAnswerBox,
  InactiveAnswerBox,
  RemoveIconContainer,
  TextContainer,
  TextFormater,
  TextWrap
} from './definitions-item.styles'
import {FiX} from 'react-icons/fi';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

interface Props {
  testItem: IMatchingItem,
  index: number,
  focusedItem: number,
  setFocusedItem: (item: number) => void,
  isNoAnswers: boolean,
  testSet: ITestSet,
  setTestSet: (testSet: ITestSet) => void
}

const answerBox = (
  testItem: IMatchingItem,
  focusedItem: number,
  isNoAnswers: boolean,
  setFocusedItem: (item: number) => void,
  index: number,
  testSet: ITestSet,
  setTestSet: (testSet: ITestSet) => void
) => {

  const onClickHandler = () => {
    if (focusedItem !== index) {
      setFocusedItem(index);
    }
  }
  const removeClickHandler = () => {
    let matchingItems = [...testSet.matching.items];
    matchingItems[index].answer = null;
    matchingItems[index].isCorrect = false;
    setTestSet({...testSet, matching: {...testSet.matching, items: matchingItems}});
  }

  if (testItem.answer) {
    if (focusedItem === index) {
      return (
        <ActiveAnswerBox onClick={onClickHandler} tabIndex={-1}>
          <div style={{cursor: "pointer"}}>
            <AnsweredBoxContent>
              <TextFormater>
                {testItem.answer}
              </TextFormater>
            </AnsweredBoxContent>
          </div>
          <RemoveIconContainer onClick={removeClickHandler} tabIndex={0}>
            <FiX/>
          </RemoveIconContainer>
        </ActiveAnswerBox>
      )
    }
    return (
      <DefaultAnswerBox onClick={onClickHandler} tabIndex={-1}>
        <div style={{cursor: "pointer"}}>
          <AnsweredBoxContent>
            <TextFormater>
              {testItem.answer}
            </TextFormater>
          </AnsweredBoxContent>
        </div>
        <RemoveIconContainer onClick={removeClickHandler} tabIndex={0}>
          <FiX/>
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
    return <ActiveAnswerBox onClick={onClickHandler} tabIndex={-1}/>
  }
  return <InactiveAnswerBox onClick={onClickHandler} tabIndex={-1}/>
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

  const {height, width} = useWindowDimensions();

  return (
    <>
      {
        width > 620 ? <>
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
          :
          <>
            <TextContainer>
              <TextWrap>
                <TextFormater>
                  {testItem.definition}
                </TextFormater>
              </TextWrap>
            </TextContainer>
            {answerBox(
              testItem,
              focusedItem,
              isNoAnswers,
              setFocusedItem,
              index,
              testSet,
              setTestSet)}
          </>
      }
    </>
  )
}

export default DefinitionsItem