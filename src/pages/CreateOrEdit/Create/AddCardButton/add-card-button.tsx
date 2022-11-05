import React, {FC} from 'react';
import {Button, ButtonWrap, Container} from "./add-card-button.styles";
import {IStudySet} from "../../../../types";

interface Props {
  data: IStudySet,
  setData: (data: IStudySet) => void
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