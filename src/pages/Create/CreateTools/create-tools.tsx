import React, {FC} from 'react';
import {
  UIContainer,
  LinkButton,
  RightSide,
  Container,
} from "./create-tools.styles";
import setDataInterface from "../../../interfaces/set-data.interface";

interface Props {
  data: setDataInterface,
  setData: (data: setDataInterface) => void
}

const CreateTools: FC<Props> = ({data, setData}) => {

  return (
      <UIContainer>
        <Container>
          <LinkButton>
            <span>+ Import from Word, Excel, Google Docs, etc.</span>
          </LinkButton>
          <RightSide>
          </RightSide>
        </Container>
      </UIContainer>
  );
};

export default CreateTools;