import React, {FC} from 'react';
import {CardsCarouselContainer, CardsCarouselWrap, GridContainer} from "./cards-carousel.styles";
import CardSide from "./CardSide/card-side";
import {IStudySet, ITerm} from "../../../types";
import {updateDoc} from "firebase/firestore";
import firebase from "firebase/compat";

interface Props {
  activeCard: ITerm | null,
  studySet: IStudySet,
  progressNumber: number,
  isTermSide: boolean,
  animate: boolean,
  animation: "prev" | "next" | "flip",
  keyChange: boolean,
  toggleTermSide: () => void,
  handleLeftButton: () => void,
  handleRightButton: () => void,
}

const CardsCarousel: FC<Props> = (props) => {
  const {
    activeCard,
    studySet,
    progressNumber,
    isTermSide,
    animate,
    animation,
    keyChange,
    toggleTermSide,
    handleLeftButton,
    handleRightButton
  } = props;

  return (
    <CardsCarouselWrap>
      <CardsCarouselContainer>
        <GridContainer
          animate={animate}
          animation={animation}
          style={{zIndex: isTermSide ? 101 : 1}}
          key={keyChange ? 1 : 2}
        >
          <CardSide
            progressNumber={progressNumber}
            isTerm={true}
            value={activeCard ? activeCard.term : ""}
            length={studySet.terms.length}
            toggleTermSide={toggleTermSide}
            handleLeftButton={handleLeftButton}
            handleRightButton={handleRightButton}
          />
        </GridContainer>
        <GridContainer
          animate={animate}
          animation={animation}
          style={{zIndex: isTermSide ? 1 : 101}}
          key={keyChange ? 3 : 4}
        >
          <CardSide
            progressNumber={progressNumber}
            isTerm={false}
            value={activeCard ? activeCard.definition : ""}
            length={studySet.terms.length}
            toggleTermSide={toggleTermSide}
            handleLeftButton={handleLeftButton}
            handleRightButton={handleRightButton}
          />
        </GridContainer>
      </CardsCarouselContainer>
    </CardsCarouselWrap>
  );
};

export default CardsCarousel;