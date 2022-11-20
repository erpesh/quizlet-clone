import React, {KeyboardEvent, useReducer} from 'react';
import {IStudySet} from "../../types";
import CardsCarousel from "./CardsCarousel/cards-carousel";
import CardsFooter from "./CardsFooter/cards-footer";
import {cardsLogicReducer, initialState} from "../../reducers/cards-logic";
import {
  Container,
  HeightRegulator,
  MainSectionContainer,
  MainSectionContainer2,
  MainSectionWrapper,
  Wrap,
} from "./flash-cards.styles";

interface Props extends React.PropsWithChildren {
  studySet: IStudySet,
  setStudySet: (studySet: IStudySet) => void,
  progressNumber: number,
  setProgressNumber: (num: number | ((num: number) => number)) => void,
  height: string
}

const FlashCards: React.FC<Props> = (props) => {

  const {
    studySet,
    setStudySet,
    progressNumber,
    setProgressNumber,
    height,
    children
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
    <MainSectionWrapper>
      <MainSectionContainer>
        <MainSectionContainer2>
          <HeightRegulator>
            {children}
            <Wrap
              height={height}
              tabIndex={0}
              onKeyDown={handleArrowKeys}>
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
          </HeightRegulator>
        </MainSectionContainer2>
      </MainSectionContainer>
    </MainSectionWrapper>
  );
};

export default FlashCards;