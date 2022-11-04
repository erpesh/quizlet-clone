import React, {useContext, useState} from 'react';
import {
  ShadowTransitions,
  TopPartContainer,
  BottomPartContainer,
  TopPartHeader,
  TopPartWrap,
  HeaderTitle,
  QuestionWrap,
  QuestionContainer,
  TextFormatter,
  BottomPartHeader,
  AnswersGrid,
  IncorrectAnswerSlideUp,
  SlideUpContainer,
  SlideUpMessage
} from "./question-box.styles";
import {learnTerm} from "../../../types/termType";
import AnswerItem from "../../../layouts/answer-item.styles";
import {AiOutlineCheck} from "react-icons/ai";
import colors from "../../../assets/colors";
import {FiX} from "react-icons/fi";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import BlueButton from '../../../layouts/blue-button.styles';
import AuthContext from "../../../context/auth-context";

interface Props {
  questions: learnTerm[]
}

const QuestionBox: React.FC<Props> = ({questions}) => {

  const {setProgressBarWidth} = useContext(AuthContext);
  const [activeIndex, setActiveIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<string>("");
  const {width, height} = useWindowDimensions();

  const moveToNextQuestion = (delay: number) => {
    setTimeout(() => {
      setUserAnswer("");
      setActiveIndex(prevState => prevState + 1);
      setProgressBarWidth((activeIndex + 1) * 100 / questions.length);
    }, delay);
  }

  const handleClick = (item: string) => {
    if (!userAnswer) {
      setUserAnswer(item);
      if (item === questions[activeIndex].term)
        moveToNextQuestion(1500);
    }
  }

  return (
      <>
        <ShadowTransitions onKeyDown={() => moveToNextQuestion(300)}>
          <TopPartContainer>
            <TopPartHeader>
              <TopPartWrap>
                <HeaderTitle>Definition</HeaderTitle>
              </TopPartWrap>
            </TopPartHeader>
            <QuestionWrap>
              <QuestionContainer>
                <TextFormatter>{questions[activeIndex].definition}</TextFormatter>
              </QuestionContainer>
            </QuestionWrap>
          </TopPartContainer>
          <BottomPartContainer>
            {!userAnswer && <BottomPartHeader>Select the correct term</BottomPartHeader>}
            {!!userAnswer ? userAnswer === questions[activeIndex].term ?
                    <BottomPartHeader style={{color: colors.green400}}>Awesome!</BottomPartHeader> :
                    <BottomPartHeader style={{color: colors.coral300}}>Not quite. You're still learning!</BottomPartHeader>
                : undefined}
            <AnswersGrid>
              {questions[activeIndex].questions.map((item: string) => (
                  <AnswerItem
                      key={item}
                      tabIndex={0}
                      color={!!userAnswer ?
                          item === questions[activeIndex].term ?
                              colors.green400 :
                              item === userAnswer ? colors.coral300 : undefined : undefined}
                      bgColor={!!userAnswer && item === questions[activeIndex].term ? colors.green100 : undefined}
                      removeHover={!!userAnswer}
                      style={!!userAnswer ? {
                        transition: "all 0.8s ease",
                        WebkitTransition: "all 0.8s ease",
                        MozTransition: "all 0.8s ease"
                      } : {}}
                      onClick={() => handleClick(item)}
                  >
                    {(!!userAnswer && item === questions[activeIndex].term) &&
                        <AiOutlineCheck style={{color: colors.green400, marginRight: ".625rem"}}/>}
                    {(userAnswer === item && userAnswer !== questions[activeIndex].term) &&
                        <FiX style={{color: colors.coral300, marginRight: ".625rem"}}/>}
                    {item}
                  </AnswerItem>
              ))}
            </AnswersGrid>
          </BottomPartContainer>
        </ShadowTransitions>
        {(!!userAnswer && userAnswer !== questions[activeIndex].term) && <>
            <IncorrectAnswerSlideUp>
                <SlideUpContainer>
                  {width > 1032 && <SlideUpMessage>Press any key</SlideUpMessage>}
                    <BlueButton
                        padding={".75rem 1.5rem"}
                        radius={".5rem"}
                        fontSize={"1rem"}
                        onClick={() => moveToNextQuestion(300)}
                    >
                        Continue
                    </BlueButton>
                </SlideUpContainer>
            </IncorrectAnswerSlideUp>
        </>}
      </>
  );
};

export default QuestionBox;