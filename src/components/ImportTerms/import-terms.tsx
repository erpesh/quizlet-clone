import React, {FC, useRef, useState} from 'react';
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
} from "./import-terms.styles";
import setDataInterface from "../../interfaces/set-data.interface";
import textareaTabHandler from "./textarea-tab-handler";

interface Props {
  data: setDataInterface,
  setData: (data: setDataInterface) => void,
  isImportModalActive: boolean,
  setIsImportModalActive: (isImportModalActive: boolean) => void
}

const ImportTerms: FC<Props> = ({data, setData, isImportModalActive, setIsImportModalActive}) => {

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textInput, setTextInput] = useState("");
  const [firstSeparator, setFirstSeparator] = useState("\t");
  const [secondSeparator, setSecondSeparator] = useState('\n');

  const placeHolderHandler = (examples: string[][]) => {
    return examples.map(item => item.join(firstSeparator)).join(secondSeparator);
  }

  const parseInput = (text: string) => {
    const splitBySecond = text.split(secondSeparator);
    let splitByFirst = [];
    for (let i = 0; i < splitBySecond.length; i++) {
      splitByFirst.push(splitBySecond[i].split(firstSeparator))
    }
    return splitByFirst;
  }

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
            <ImportTermsInstruction onClick={() => parseInput(textInput)}>
              Copy and Paste your data here (from Word, Excel, Google Docs, etc.)
            </ImportTermsInstruction>
            <ImportTermsForm>
              <TextArea
                  placeholder={placeHolderHandler([
                    ["Word1", "Definition1"],
                    ["Word2", "Definition2"],
                    ["Word3", "Definition3"],
                  ])}
                  ref={textareaRef}
                  onChange={(e) => setTextInput(e.target.value)}
                  onKeyDown={(e) => textareaTabHandler(e, textareaRef)}
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