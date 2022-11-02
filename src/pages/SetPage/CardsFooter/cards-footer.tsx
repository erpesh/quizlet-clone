import React, {FC, useState} from 'react';
import {
  CardsFooterBase,
  CardsFooterSide,
  CardsFooterButton
} from "./cards-footer.styles";
import {FiShuffle} from 'react-icons/fi';
import {BsPlayFill, BsFillPauseFill} from "react-icons/bs";
import setDataInterface from "../../../types/set-data.types";

interface Props {
  studySet: setDataInterface,
  setStudySet: (data: setDataInterface) => void,
  setProgressNumber: (num: number) => void,
  toggleTermSide: () => void,
  handleRightButton: () => void,
  flipWithNoAnimation: () => void,
}

const CardsFooter: FC<Props> = (props) => {

  const {
    studySet,
    setStudySet,
    setProgressNumber,
    handleRightButton,
    toggleTermSide,
    flipWithNoAnimation
  } = props;

  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);

  const shuffleCards = () => {
    let terms = studySet.terms.sort(() => Math.random() - 0.5);
    setStudySet({...studySet, terms: terms});
    setProgressNumber(0);
  }

  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      return;
    }

    const newIntervalId = setInterval(() => {
      toggleTermSide();
      setTimeout(() => {
        handleRightButton();
        flipWithNoAnimation();
      }, 3000)
    }, 6000);
    setIntervalId(newIntervalId);
  };

  return (
      <CardsFooterBase>
        <CardsFooterSide onClick={shuffleCards}>
          <CardsFooterButton name={"Shuffle"}>
            <FiShuffle size={28}/>
          </CardsFooterButton>
        </CardsFooterSide>
        <CardsFooterSide onClick={handleClick}>
          <CardsFooterButton name={"Play cards"}>
            {intervalId ? <BsFillPauseFill size={28}/> : <BsPlayFill size={28}/>}
          </CardsFooterButton>
        </CardsFooterSide>
      </CardsFooterBase>
  );
};

export default CardsFooter;