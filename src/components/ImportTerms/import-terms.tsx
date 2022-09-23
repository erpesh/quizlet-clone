import React, {FC} from 'react';
import "./styles.css";
import {
  ContainerWrap,
  UIContainer,
  UILinkButton,
  ImportTermsHeading,
  ImportTermsInstruction,
  ImportTermsForm,
  TextArea,
  ImportButton,
  ImportButtonWrap,
  ButtonTextWrap,
  FormGroup,
  FormGroupWrap,
  GroupLabel,
  UIRadio,
  UIRadioInput
} from "./import-terms.styles";
import setDataInterface from "../../interfaces/set-data.interface";

interface Props {
  data: setDataInterface,
  setData: (data: setDataInterface) => void,
  isImportModalActive: boolean,
  setIsImportModalActive: (isImportModalActive: boolean) => void
}

const ImportTerms: FC<Props> = ({data, setData, isImportModalActive, setIsImportModalActive}) => {

  const handleTextAreaInput = (e: HTMLInputElement) => {

  }

  return (
      <div className={isImportModalActive ? "import__terms is__showing" : "import__terms"}>
        <ContainerWrap>
          <UIContainer>
            <div style={{marginBottom: "2rem"}}>
              <UILinkButton onClick={() => setIsImportModalActive(false)}>
                <span>Cancel Import</span>
              </UILinkButton>
            </div>
            <ImportTermsHeading>
              Import your data&nbsp;
            </ImportTermsHeading>
            <ImportTermsInstruction>
              Copy and Paste your data here (from Word, Excel, Google Docs, etc.)
            </ImportTermsInstruction>
            <ImportTermsForm>
              <TextArea
                  placeholder="Word 1	Definition 1
Word 2	Definition 2
Word 3	Definition 3"
              />
              <ImportButtonWrap>
                <ImportButton disabled>
                  <ButtonTextWrap>Import</ButtonTextWrap>
                </ImportButton>
              </ImportButtonWrap>
              <FormGroupWrap>
                <FormGroup>
                  <GroupLabel>Between Term and Definition</GroupLabel>
                  <div>
                    <label className={"UIRadio"}>
                      <input
                        className={"UIRadio-input"}
                        type={"radio"}
                        value={"Delimeter.TAB"}
                      />
                      <span className={"UIRadio-fauxInput"}/>
                      <span className={"UIRadio-input"}>
                        <span>Tab</span>
                      </span>
                    </label>
                  </div>
                </FormGroup>
                <FormGroup>
                  <GroupLabel>Between cards</GroupLabel>
                  <div>

                  </div>
                </FormGroup>
              </FormGroupWrap>
            </ImportTermsForm>
          </UIContainer>
        </ContainerWrap>
      </div>
  );
};

export default ImportTerms;