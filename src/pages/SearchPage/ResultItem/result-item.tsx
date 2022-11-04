import React from 'react';
import {H5} from '../../../layouts/headers.styles';
import {
  Container,
  AssemblyCard,
  PaddingContainer,
  SecondaryData,
  SecondaryItem,
  CreatorContainer,
  AuthorPhoto,
  AuthorName,
  BottomPart
} from "./result-item.styles";
import setDataInterface from "../../../types/set-data.types";
import {Button} from '../search-page.styles';
import {useNavigate} from "react-router-dom";

interface Props {
  studySet: setDataInterface,
  activeSet: setDataInterface,
  setActiveSet: (dataSet: setDataInterface) => void,
}

const ResultItem: React.FC<Props> = ({studySet, activeSet, setActiveSet}) => {

  const navigate = useNavigate();

  const handlePreviewClick = () => {
    setActiveSet(studySet);
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