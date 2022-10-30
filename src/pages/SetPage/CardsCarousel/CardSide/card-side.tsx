import React, {FC} from 'react';
import {
  CardContainer,
  CarouselButtonsContainer,
  CarouselButtonsWrap,
  NavButtonContainer,
  SavedIconButton,
  NavButtonSpan,
  TermOrDefData,
  TermOrDefDataContent,
  TextFormater
} from "./card-side.styles";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {AiFillStar} from "react-icons/ai";

interface Props {
  progressNumber: number,
  isTerm: boolean,
  value: string,
  length: number,
  toggleTermSide: () => void,
  handleLeftButton: () => void,
  handleRightButton: () => void,
  toggleCardMark: (index: number) => void,
  isMarked: boolean | undefined
}

const CardSide: FC<Props> = (props) => {
  const {
    progressNumber,
    isTerm,
    value,
    length,
    isMarked,
    toggleTermSide,
    handleLeftButton,
    handleRightButton,
    toggleCardMark
  } = props

  return (
      <CardContainer>
        <div style={{
          gridColumn: 1,
          gridRow: 1,
          display: "flex",
          alignItems: "center"
        }}>{isTerm ? "Term" : "Definition"}</div>
        <div style={{gridColumn: 2, gridRow: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
          {`${progressNumber} / ${length}`}
        </div>
        <div style={{gridColumn: 3, gridRow: 1, display: "flex", justifyContent: "flex-end"}}>
          <SavedIconButton
              isActive={!!isMarked}
              onClick={() => toggleCardMark(progressNumber - 1)}
          >
            <AiFillStar style={{width: "100%", height: "100%"}}/>
          </SavedIconButton>
        </div>
        <TermOrDefData onClick={toggleTermSide}>
          <TermOrDefDataContent>
            <div>
              <TextFormater>
                <div style={{color: "black"}}>{value}</div>
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