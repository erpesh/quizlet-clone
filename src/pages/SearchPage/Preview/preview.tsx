import React from 'react';
import {DisplayFlex} from "../search-page.styles";
import {
  PreviewCardShadows,
  PreviewHeader,
  PreviewMainContainer,
  PreviewPaddings,
  PreviewSetLink,
  PreviewWrapper,
  ButtonContainer,
  OverflowContainer,
  ItemContainer,
  ItemText
} from "./preview.styles";
import H3 from "../../../layouts/headers.styles";
import setDataInterface from "../../../types/set-data.types";
import BlueButton from '../../../layouts/blue-button.styles';
import {useNavigate} from "react-router-dom";
import termType from "../../../types/termType";

interface Props {
  studySet: setDataInterface
}

const Preview: React.FC<Props> = ({studySet}) => {

  const navigate = useNavigate();

  return (
      <PreviewWrapper>
        <DisplayFlex><H3>Preview</H3></DisplayFlex>
        <PreviewMainContainer>
          <PreviewCardShadows>
            <PreviewPaddings>
              <div>
                <PreviewHeader>
                  <PreviewSetLink to={`/${studySet.id}`}>{studySet.title}</PreviewSetLink>
                  <ButtonContainer>
                    <BlueButton
                        padding={".625rem 1rem"}
                        radius={".5rem"}
                        fontSize={".875rem"}
                        onClick={() => navigate(`/${studySet.id}`)}
                    >
                      Study
                    </BlueButton>
                  </ButtonContainer>
                </PreviewHeader>
              </div>
              <OverflowContainer>
                {studySet.terms.map((item: termType) =>
                    <ItemContainer key={item.id}>
                      <div>
                        <ItemText fontWeight={600}>{item.term}</ItemText>
                        <ItemText fontWeight={400}>{item.definition}</ItemText>
                      </div>
                    </ItemContainer>
                )}
              </OverflowContainer>
            </PreviewPaddings>
          </PreviewCardShadows>
        </PreviewMainContainer>
      </PreviewWrapper>
  );
};

export default Preview;