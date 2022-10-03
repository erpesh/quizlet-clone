import React, {FC} from 'react';
import {
  Container,
  ButtonWrap,
  Button
} from "./add-card-button.styles";

interface Props {

}

const AddCardButton: FC<Props> = () => {
  return (
      <Container>
        <ButtonWrap>
          <Button>
            <span>+ Add card</span>
          </Button>
        </ButtonWrap>
      </Container>
  );
};

export default AddCardButton;