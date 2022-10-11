import React, {FC} from 'react';
import {
  CardsFooterBase,
  CardsFooterSide
} from "./cards-footer.styles";
import setDataInterface from "../../../interfaces/set-data.interface";
import termInterface from "../../../interfaces/term-interface";

interface Props {
  studySet: setDataInterface,
  setStudySet: (data: setDataInterface) => void,
  setActiveCard: (card: termInterface | null) => void,
  setProgressNumber: (num: number) => void,
  toggleTermSide: () => void,
  handleRightButton: () => void,
}

const CardsFooter: FC<Props> = (props) => {

  const {
    studySet,
    setStudySet,
    setActiveCard,
    setProgressNumber,
    toggleTermSide,
    handleRightButton,
  } = props;

  const shuffleCards = () => {
    let terms = studySet.terms.sort(() => Math.random() - 0.5);
    setStudySet({...studySet, terms: terms});
    setActiveCard(terms[0]);
    setProgressNumber(1);
  }

  return (
      <CardsFooterBase>
        <CardsFooterSide onClick={shuffleCards}>staff1
        </CardsFooterSide>
        <CardsFooterSide>
          staff2
        </CardsFooterSide>
      </CardsFooterBase>
  );
};

export default CardsFooter;