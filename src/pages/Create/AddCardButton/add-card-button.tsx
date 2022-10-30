import React, {FC} from 'react';
import {
  Container,
  ButtonWrap,
  Button
} from "./add-card-button.styles";
import setDataInterface from "../../../types/set-data.types";

interface Props {
  data: setDataInterface,
  setData: (data: setDataInterface) => void
}

const AddCardButton: FC<Props> = ({data, setData}) => {

  const addCard = () => {
    let items = data.terms;
    items.push({
      term: "",
      definition: "",
      id: Math.random(),
      isMarked: false
    })
    setData({...data, terms: items})
  }

  return (
      <Container onClick={addCard}>
        <ButtonWrap>
          <Button>
            <span>+ Add card</span>
          </Button>
        </ButtonWrap>
      </Container>
  );
};

export default AddCardButton;