import React, {FC} from 'react';
import {
  CardContainer,
  CarouselButtonsContainer,
  CarouselButtonsWrap,
  NavButtonContainer,
  NavButtonSpan,
  ProgressNumber,
  TermOrDefData,
  TermOrDefDataContent,
  TermOrDefinition,
  TextFormater
} from "./card-side.styles";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import setDataInterface from "../../../../interfaces/set-data.interface";
import termInterface from "../../../../interfaces/term-interface";

interface Props {
  progressNumber: number,
  setProgressNumber: (num: number) => void,
  isTerm: boolean,
  value: string,
  length: number,
  studySet: setDataInterface,
  setActiveCard: (card: termInterface) => void,
  toggleTermSide: () => void,
  setAnimation: (anim: "prev" | "next" | "flip") => void,
  toggleKey: () => void
}

const CardSide: FC<Props> = (props) => {
  const {
    progressNumber,
    setProgressNumber,
    isTerm,
    value,
    length,
    studySet,
    setActiveCard,
    toggleTermSide,
    setAnimation,
    toggleKey
  } = props

  const handleLeftButton = () => {
    setAnimation("prev")
    toggleKey()
    const nextNum = progressNumber === 1 ? length : progressNumber - 1
    setProgressNumber(nextNum)
    setActiveCard(studySet.terms[nextNum - 1])
  }
  const handleRightButton = () => {
    setAnimation("next")
    toggleKey()
    const nextNum = progressNumber === length ? 1 : progressNumber + 1
    setProgressNumber(nextNum)
    setActiveCard(studySet.terms[nextNum - 1])
  }

  return (
      <CardContainer>
        <TermOrDefinition>{isTerm ? "Term" : "Definition"}</TermOrDefinition>
        <ProgressNumber>{`${progressNumber} / ${length}`}</ProgressNumber>
        <TermOrDefData onClick={toggleTermSide}>
          <TermOrDefDataContent>
            <div>
              <TextFormater>
                <div style={{display: "block"}}>{value}</div>
              </TextFormater>
            </div>
          </TermOrDefDataContent>
        </TermOrDefData>
        <CarouselButtonsWrap>
          <CarouselButtonsContainer>
            <NavButtonContainer onClick={handleLeftButton}>
              <NavButtonSpan>
                <FaChevronLeft/>
              </NavButtonSpan>
            </NavButtonContainer>
            <NavButtonContainer onClick={handleRightButton}>
              <NavButtonSpan>
                <FaChevronRight/>
              </NavButtonSpan>
            </NavButtonContainer>
          </CarouselButtonsContainer>
        </CarouselButtonsWrap>
      </CardContainer>
  );
};

export default CardSide;