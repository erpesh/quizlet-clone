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
  PreviewContainer,
  PreviewHeading,
  PreviewNumTerms,
  PreviewRows
} from "./import-terms.styles";
import setDataInterface from "../../interfaces/set-data.interface";
import textareaTabHandler from "./textarea-tab-handler";
import RadioSeparators from "./RadioSeparators/radio-separators";

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

  const placeHolderHandler = () => {
    const examples = [
      ["Word 1", "Definition 1"],
      ["Word 2", "Definition 2"],
      ["Word 3", "Definition 3"],
    ]
    const _firstSeparator = firstSeparator.replace(/\\t/g, "\t").replace(/\\n/g, "\n");
    const _secondSeparator = secondSeparator.replace(/\\t/g, "\t").replace(/\\n/g, "\n")
    return examples.map(item => item.join(_firstSeparator)).join(_secondSeparator);
  }

  const parseInput = (text: string) => {
    const splitBySecond = text.split(secondSeparator);
    let splitByFirst = [];
    for (let i = 0; i < splitBySecond.length; i++) {
      splitByFirst.push(splitBySecond[i].split(firstSeparator))
    }
    return splitByFirst;
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
            <ImportTermsInstruction onClick={() => {
              console.log(firstSeparator, secondSeparator)
            }}>
              Copy and Paste your data here (from Word, Excel, Google Docs, etc.)
            </ImportTermsInstruction>
            <ImportTermsForm>
              <TextArea
                  placeholder={placeHolderHandler()}
                  ref={textareaRef}
                  onChange={(e) => setTextInput(e.target.value)}
                  onKeyDown={(e) => textareaTabHandler(e, textareaRef)}
              />
              <ImportButtonWrap>
                <ImportButton disabled={!textInput}>
                  <ButtonTextWrap>Import</ButtonTextWrap>
                </ImportButton>
              </ImportButtonWrap>
              <RadioSeparators
                  firstSeparator={firstSeparator}
                  setFirstSeparator={setFirstSeparator}
                  secondSeparator={secondSeparator}
                  setSecondSeparator={setSecondSeparator}
              />
            </ImportTermsForm>
          </UIContainer>
        </ContainerWrap>
        <PreviewContainer>
          <UIContainer>
            <PreviewHeading>
              <span>Preview</span>
              <PreviewNumTerms>
                <span>2 cards</span>
              </PreviewNumTerms>
            </PreviewHeading>
            <PreviewRows>
              <div style={{pointerEvents: "none"}}>

              </div>
            </PreviewRows>
          </UIContainer>
        </PreviewContainer>
      </div>
  );
};

export default ImportTerms;