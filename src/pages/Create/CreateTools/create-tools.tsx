import React, {FC} from 'react';
import {
  UIContainer,
  LinkButton,
  RightSide,
  Container,
  SwitchButton
} from "./create-tools.styles";
import setDataInterface from "../../../interfaces/set-data.interface";
import {ReactComponent as SwitchIcon} from "../../../assets/images/switch-icon.svg";

interface Props {
  data: setDataInterface,
  setData: (data: setDataInterface) => void,
  setIsModalImportActive: (isModalImportActive: boolean) => void
}

const CreateTools: FC<Props> = ({data, setData, setIsModalImportActive}) => {

  const swapTermsAndDefinitions = () => {
    let terms = data.terms;
    for (let i = 0; i < terms.length; i++) {
      let term = terms[i].term;
      terms[i].term = terms[i].definition;
      terms[i].definition = term;
    }
    setData({...data, terms: terms})
  }

  return (
      <UIContainer>
        <Container>
          <LinkButton onClick={() => setIsModalImportActive(true)}>
            <span>+ Import from Word, Excel, Google Docs, etc.</span>
          </LinkButton>
          <RightSide>
            <SwitchButton
                onClick={swapTermsAndDefinitions}
                title={"Flip terms and definitions"}
            >
              <SwitchIcon fill={"white"}/>
            </SwitchButton>
          </RightSide>
        </Container>
      </UIContainer>
  );
};

export default CreateTools;