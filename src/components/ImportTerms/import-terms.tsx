import React, {FC, useRef} from 'react';
import {
  ImportContainer,
  ButtonTextWrap,
  ContainerWrap,
  ImportButton,
  ImportButtonWrap,
  ImportTermsForm,
  ImportTermsHeading,
  ImportTermsInstruction,
  PreviewContainer,
  PreviewHeading,
  PreviewNumTerms,
  PreviewRows,
  TextArea,
  UIContainer,
  UILinkButton
} from "./import-terms.styles";
import {IStudySet} from "../../types";
import textareaTabHandler from "./textarea-tab-handler";
import RadioSeparators from "./RadioSeparators/radio-separators";
import ImportTermCard from "./ImportTermCard/import-term-card";
import {placeHolderHandler} from "./text-parsers";
import useImportTerms from "../../hooks/useImportTerms";

interface Props {
  data: IStudySet,
  setData: (data: IStudySet) => void,
  isImportModalActive: boolean,
  setIsImportModalActive: (isImportModalActive: boolean) => void
}

const ImportTerms: FC<Props> = ({data, setData, isImportModalActive, setIsImportModalActive}) => {

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const {state, dispatch, handleImportButtonBase} = useImportTerms(data, setData);

  const handleImportButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleImportButtonBase(e);
    setIsImportModalActive(false);
    if (textareaRef.current) {
      textareaRef.current.value = "";
    }
  }

  return (
    <ImportContainer isShowing={isImportModalActive}>
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
              placeholder={placeHolderHandler(state.firstSeparator, state.secondSeparator)}
              ref={textareaRef}
              onChange={(e) => dispatch({ type:"SET_TEXT", payload: e.target.value })}
              onKeyDown={(e) => textareaTabHandler(e, textareaRef)}
            />
            <ImportButtonWrap>
              <ImportButton
                disabled={!state.textInput}
                onClick={handleImportButton}
              >
                <ButtonTextWrap>Import</ButtonTextWrap>
              </ImportButton>
            </ImportButtonWrap>
            <RadioSeparators
              firstSeparator={state.firstSeparator}
              secondSeparator={state.secondSeparator}
              dispatch={dispatch}
            />
          </ImportTermsForm>
        </UIContainer>
      </ContainerWrap>
      <PreviewContainer>
        <UIContainer>
          <PreviewHeading>
            <span>Preview</span>
            <PreviewNumTerms>
              <span>{state.termsArray.length > 0 ? state.termsArray.length : ""}</span>
            </PreviewNumTerms>
          </PreviewHeading>
          <PreviewRows>
            <div style={{pointerEvents: "none"}}>
              {state.termsArray.length > 0 ? state.termsArray.map(item => {
                return <ImportTermCard
                  term={item.term}
                  definition={item.definition}
                  key={item.id}
                />
              }) : "Nothing to preview yet"}
            </div>
          </PreviewRows>
        </UIContainer>
      </PreviewContainer>
    </ImportContainer>
  );
};

export default ImportTerms;