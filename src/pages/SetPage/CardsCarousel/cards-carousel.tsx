import React from 'react';
import {
  CardsCarouselWrap,
  CardsCarouselContainer,
  GridContainer
} from "./cards-carousel.styles";
import CardSide from "./card-side";

const CardsCarousel = () => {
  return (
      <CardsCarouselWrap>
        <CardsCarouselContainer>
          <GridContainer style={{zIndex: 101}}>
            <CardSide/>
          </GridContainer>
          <GridContainer style={{zIndex: 1}}>
            <CardSide/>
          </GridContainer>
        </CardsCarouselContainer>
      </CardsCarouselWrap>
  );
};

export default CardsCarousel;