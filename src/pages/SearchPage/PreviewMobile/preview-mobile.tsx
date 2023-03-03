import React from 'react';
import {CloseButtonWrap, Container, ContainerZIndex, Wrap, Wrapper} from "./preview-mobile.styles";
import {IStudySet, ITerm} from "../../../types";
import {ItemContainer, ItemText, OverflowContainer, PreviewSetLink} from "../Preview/preview.styles";
import {FiX} from "react-icons/fi";

interface Props {
  studySet: IStudySet,
  setIsMobilePreview: (value: boolean) => void
}

const PreviewMobile: React.FC<Props> = ({studySet, setIsMobilePreview}) => {

  return (
    <ContainerZIndex>
      <Wrapper>
        <CloseButtonWrap onClick={() => setIsMobilePreview(false)}>
          <FiX/>
        </CloseButtonWrap>
        <div style={{overflowY: "auto"}}>
          <Wrap>
            <Container>
              <div>
                <PreviewSetLink to={`/set/${studySet.id}`}>{studySet.title}</PreviewSetLink>
              </div>
              <OverflowContainer>
                {studySet.terms.map((item: ITerm) =>
                  <ItemContainer key={item.id}>
                    <div>
                      <ItemText fontWeight={600}>{item.term}</ItemText>
                      <ItemText fontWeight={400}>{item.definition}</ItemText>
                    </div>
                  </ItemContainer>
                )}
              </OverflowContainer>
            </Container>
          </Wrap>
        </div>
      </Wrapper>
    </ContainerZIndex>
  );
};

export default PreviewMobile;