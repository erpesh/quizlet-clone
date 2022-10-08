import React from 'react';
import {
  CardContainer,
  CarouselButtonsContainer,
  CarouselButtonsWrap, NavButtonContainer, NavButtonSpan,
  ProgressNumber,
  TermOrDefData,
  TermOrDefDataContent,
  TermOrDefinition,
  TextFormater
} from "./cards-carousel.styles";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";

const CardSide = () => {
  return (
      <CardContainer>
        <TermOrDefinition>Term</TermOrDefinition>
        <ProgressNumber>21/25</ProgressNumber>
        <TermOrDefData>
          <TermOrDefDataContent>
            <div>
              <TextFormater>
                <div style={{display: "block"}}>Item</div>
              </TextFormater>
            </div>
          </TermOrDefDataContent>
        </TermOrDefData>
        <CarouselButtonsWrap>
          <CarouselButtonsContainer>
            <NavButtonContainer onClick={() => {}}>
              <NavButtonSpan>
                <FaChevronLeft/>
              </NavButtonSpan>
            </NavButtonContainer>
            <NavButtonContainer onClick={() => {}}>
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