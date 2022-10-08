import React, {FC, useState} from 'react';
import {
  CardsCarouselWrap,
  CardsCarouselContainer,
  GridContainer
} from "./cards-carousel.styles";
import CardSide from "./card-side";
import termInterface from "../../../interfaces/term-interface";
import setDataInterface from "../../../interfaces/set-data.interface";

interface Props {
  activeCard: termInterface | null,
  setActiveCard: (activeCard: termInterface) => void,
  studySet: setDataInterface,
  progressNumber: number,
  setProgressNumber: (num: number) => void
}

const CardsCarousel: FC<Props> = (props) => {
  const {
    activeCard,
    studySet,
    setActiveCard,
    setProgressNumber,
    progressNumber
  } = props;

  const [isTermSide, setIsTermSide] = useState(true);
  const [animate, setAnimate] = useState(false);

  const toggleTermSide = () => {
    setAnimate(true);
    setIsTermSide(!isTermSide)
  };

  return (
      <CardsCarouselWrap>
        <CardsCarouselContainer>
          <GridContainer
              animate={animate}
              style={{zIndex: isTermSide ? 101 : 1}}
              key={isTermSide ? 1 : 2}
          >
            <CardSide
                progressNumber={progressNumber}
                setProgressNumber={setProgressNumber}
                isTerm={true}
                value={activeCard ? activeCard.term : ""}
                length={studySet.terms.length}
                studySet={studySet}
                setActiveCard={setActiveCard}
                toggleTermSide={toggleTermSide}
            />
          </GridContainer>
          <GridContainer
              animate={animate}
              style={{zIndex: isTermSide ? 1 : 101}}
              key={isTermSide? 3 : 4}
          >
            <CardSide
                progressNumber={progressNumber}
                setProgressNumber={setProgressNumber}
                isTerm={false}
                value={activeCard ? activeCard.definition : ""}
                length={studySet.terms.length}
                studySet={studySet}
                setActiveCard={setActiveCard}
                toggleTermSide={toggleTermSide}
            />
          </GridContainer>
        </CardsCarouselContainer>
      </CardsCarouselWrap>
  );
};

export default CardsCarousel;