import React from 'react';
import {H5} from '../../../layouts/headers.styles';
import {
  AssemblyCard,
  AuthorName,
  AuthorPhoto,
  BottomPart,
  Container,
  CreatorContainer,
  PaddingContainer,
  SecondaryData,
  SecondaryItem
} from "./result-item.styles";
import {IStudySet} from "../../../types";
import {Button} from '../search-page.styles';
import {useNavigate} from "react-router-dom";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

interface Props {
  studySet: IStudySet,
  activeSet: IStudySet,
  setActiveSet: (dataSet: IStudySet) => void,
  setIsMobilePreview: (value: boolean) => void
}

const ResultItem: React.FC<Props> = ({studySet, activeSet, setActiveSet, setIsMobilePreview}) => {

  const navigate = useNavigate();
  const {width, height} = useWindowDimensions();

  const handlePreviewClick = () => {
    setActiveSet(studySet);
    if (width <= 768)
      setIsMobilePreview(true);
  }
  const navigateToStudySet = () => navigate(`/${studySet.id}`);

  return (
    <Container>
      <AssemblyCard isFocused={activeSet.id === studySet.id}>
        <PaddingContainer>
          <div style={{wordBreak: "break-all"}} onClick={navigateToStudySet}>
            <H5>{studySet.title}</H5>
            <SecondaryData>
              <SecondaryItem>{studySet.terms.length + " terms"}</SecondaryItem>
            </SecondaryData>
          </div>
          <BottomPart>
            <CreatorContainer onClick={navigateToStudySet}>
              {studySet.author.photoURL && <AuthorPhoto photoURL={studySet.author.photoURL}/>}
              <AuthorName>{studySet.author.name}</AuthorName>
            </CreatorContainer>
            <Button
              radius={".25rem"}
              padding={".375rem .75rem"}
              onClick={handlePreviewClick}
            >Preview</Button>
          </BottomPart>
        </PaddingContainer>
      </AssemblyCard>
    </Container>
  );
};

export default ResultItem;