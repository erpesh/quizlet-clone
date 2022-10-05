import React, {FC} from 'react';
import {
  CardContainer,
  CardContent,
  CardNumber,
  CardInner,
  ContentSideWrap,
  SideWordContainer,
  UITextArea,
  UITextAreaContent,
  TextAreaContainer,
  TextAreaSizer,
  TextAreaWrapper,
  TextArea,
  UITextAreaBorder,
  UITextAreaLabel,
  SideDefinitionContainer
} from "./import-term-card.styles";

interface Props {
  term: string,
  definition: string
}

const ImportTermCard: FC<Props> = ({term, definition}) => {
  return (
      <CardContainer>
        <CardContent>
          <CardNumber/>
          <CardInner>
            <div>
              <ContentSideWrap>
                <SideWordContainer>
                  <UITextArea>
                    <UITextAreaContent>
                      <TextAreaContainer>
                        <TextAreaSizer>{term}</TextAreaSizer>
                        <TextAreaWrapper>
                          <TextArea readOnly value={term}/>
                        </TextAreaWrapper>
                      </TextAreaContainer>
                      <UITextAreaBorder/>
                    </UITextAreaContent>
                    <UITextAreaLabel>Word</UITextAreaLabel>
                  </UITextArea>
                </SideWordContainer>
                <SideDefinitionContainer>
                  <UITextArea>
                    <UITextAreaContent>
                      <TextAreaContainer>
                        <TextAreaSizer>{definition}</TextAreaSizer>
                        <TextAreaWrapper>
                          <TextArea readOnly value={definition}/>
                        </TextAreaWrapper>
                      </TextAreaContainer>
                      <UITextAreaBorder/>
                    </UITextAreaContent>
                    <UITextAreaLabel>Definition</UITextAreaLabel>
                  </UITextArea>
                </SideDefinitionContainer>
              </ContentSideWrap>
            </div>
          </CardInner>
        </CardContent>
      </CardContainer>
  );
};

export default ImportTermCard;