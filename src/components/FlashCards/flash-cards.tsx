import React, {KeyboardEvent, useReducer} from 'react';
import setDataInterface from "../../types/set-data.types";
import CardsCarousel from "./CardsCarousel/cards-carousel";
import CardsFooter from "./CardsFooter/cards-footer";
import styled from "styled-components";
import {cardsLogicReducer, initialState} from "../../reducers/cards-logic";

interface Props {
  studySet: setDataInterface,
  setStudySet: (studySet: setDataInterface) => void,
  progressNumber: number,
  setProgressNumber: (num: any) => void,
}

const Wrap = styled.div`
  height: 100%;
  &:focus-visible{
    outline: none;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  height: calc(100% - 1rem);
  @media (max-width: 38.75rem) {
    height: calc(100% - .5rem);
  }
  &:focus-visible{
    outline: none;
  }
`

const FlashCards: React.FC<Props> = (props) => {

  const {
    studySet,
    setStudySet,
    progressNumber,
    setProgressNumber,
  } = props;

  const [state, dispatch] = useReducer(cardsLogicReducer, initialState);

  const toggleTermSide = () => dispatch({type: "TOGGLE_SIDE"});

  const flipWithNoAnimation = () => dispatch({type: "FLIP_SIDE"});

  const handleLeftButton = () => {
    dispatch({type: "PREV_CARD"});
    setProgressNumber((prevState: number) => prevState === 0 ? studySet.terms.length - 1 : prevState - 1);
  }
  const handleRightButton = () => {
    dispatch({type: "NEXT_CARD"});
    setProgressNumber((prevState: number) => prevState === studySet.terms.length - 1 ? 0 : prevState + 1);
  }

  const handleArrowKeys = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") handleRightButton()
    else if (e.key === "ArrowLeft") handleLeftButton()
    else if (e.key === " ") toggleTermSide()
  }

  return (
      <Wrap tabIndex={0} onKeyDown={handleArrowKeys}>
        <Container>
          <CardsCarousel
              activeCard={studySet.terms[progressNumber]}
              studySet={studySet}
              setStudySet={setStudySet}
              progressNumber={progressNumber}
              isTermSide={state.isTermSide}
              animation={state.animation}
              animate={state.animate}
              toggleTermSide={toggleTermSide}
              keyChange={state.keyChange}
              handleLeftButton={handleLeftButton}
              handleRightButton={handleRightButton}
          />
          <CardsFooter
              studySet={studySet}
              setStudySet={setStudySet}
              setProgressNumber={setProgressNumber}
              toggleTermSide={toggleTermSide}
              handleRightButton={handleRightButton}
              flipWithNoAnimation={flipWithNoAnimation}
          />
        </Container>
      </Wrap>
  );
};

export default FlashCards;