import React, {FC, useState} from 'react';
import {
  CardsFooterBase,
  CardsFooterSide,
  CardsFooterButton
} from "./cards-footer.styles";
import {FiShuffle} from 'react-icons/fi';
import {BsPlayFill, BsFillPauseFill} from "react-icons/bs";
import setDataInterface from "../../../types/set-data.types";
import colors from "../../../assets/colors";

interface Props {
  studySet: setDataInterface,
  setStudySet: (data: setDataInterface) => void,
  setProgressNumber: (num: number) => void,
  toggleTermSide: () => void,
  handleRightButton: () => void,
  flipWithNoAnimation: () => void,
}

const CardsFooter: FC<Props> = (props) => {

  const FLIP_TIME = 3000;
  const TOTAL_TIME = 6000;

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
      }, FLIP_TIME)
    }, TOTAL_TIME);
    setIntervalId(newIntervalId);
  };

  return (
      <CardsFooterBase>
        <CardsFooterSide onClick={shuffleCards}>
          <CardsFooterButton name={"Shuffle"}>
            <FiShuffle size={20}/>
          </CardsFooterButton>
        </CardsFooterSide>
        <CardsFooterSide onClick={handleClick}>
          <CardsFooterButton
              style={intervalId ? {backgroundColor: "white", border: "1px solid " + colors.colorDisabled} : undefined}
              name={"Play cards"}
          >
            {intervalId ? <BsFillPauseFill size={20}/> : <BsPlayFill size={20}/>}
          </CardsFooterButton>
        </CardsFooterSide>
      </CardsFooterBase>
  );
};

export default CardsFooter;