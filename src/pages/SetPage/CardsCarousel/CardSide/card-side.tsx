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

interface Props {
  progressNumber: number,
  isTerm: boolean,
  value: string,
  length: number,
  toggleTermSide: () => void,
  handleLeftButton: () => void,
  handleRightButton: () => void,
}

const CardSide: FC<Props> = (props) => {
  const {
    progressNumber,
    isTerm,
    value,
    length,
    toggleTermSide,
    handleLeftButton,
    handleRightButton
  } = props

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