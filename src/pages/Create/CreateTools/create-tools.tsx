import React from 'react';
import {
  UIContainer,
  LinkButton,
    RightSide,
    SwitchButton
} from "./create-tools.styles";
import {ReactComponent as SwitchIcon} from "../../../assets/images/switch-icon.svg";

const CreateTools = () => {
  return (
      <UIContainer>
        <div style={{marginTop: "1.25rem"}}>
          <LinkButton>
            <span>+ Import from Word, Excel, Google Docs, etc.</span>
          </LinkButton>
          <RightSide>
            <SwitchButton>
              <SwitchIcon fill={"white"}/>
            </SwitchButton>
          </RightSide>
        </div>
      </UIContainer>
  );
};

export default CreateTools;