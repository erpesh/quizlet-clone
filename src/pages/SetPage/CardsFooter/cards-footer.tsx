import React, {FC} from 'react';
import {
  CardsFooterBase,
  CardsFooterItem,
  CardsFooterSide
} from "./cards-footer.styles";
import setDataInterface from "../../../interfaces/set-data.interface";

interface Props {
  studySet: setDataInterface,
  setStudySet: (data: setDataInterface) => void
}

const CardsFooter: FC<Props> = ({studySet, setStudySet}) => {
  return (
      <CardsFooterBase>
        <CardsFooterSide>
          <CardsFooterItem>

          </CardsFooterItem>
          <CardsFooterItem>

          </CardsFooterItem>
        </CardsFooterSide>
        <CardsFooterSide>
          <CardsFooterItem>

          </CardsFooterItem>
          <CardsFooterItem>

          </CardsFooterItem>
        </CardsFooterSide>
      </CardsFooterBase>
  );
};

export default CardsFooter;