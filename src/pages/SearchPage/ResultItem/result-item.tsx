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

interface Props {
  studySet: setDataInterface
}

const ResultItem: React.FC<Props> = ({studySet}) => {
  return (
      <Container>
        <a href={`/${studySet.id}`} style={{display: "block", width: "100%"}}>
          <AssemblyCard>
            <PaddingContainer>
              <div style={{wordBreak: "break-all"}}>
                <H5>{studySet.title}</H5>
                <SecondaryData>
                  <SecondaryItem>{studySet.terms.length + " terms"}</SecondaryItem>
                </SecondaryData>
              </div>
              <BottomPart>
                <CreatorContainer>
                  {studySet.author.photoURL && <AuthorPhoto photoURL={studySet.author.photoURL}/>}
                  <AuthorName>{studySet.author.name}</AuthorName>
                </CreatorContainer>
                <Button
                    radius={".25rem"}
                    padding={".375rem .75rem"}
                >Preview</Button>
              </BottomPart>
            </PaddingContainer>
          </AssemblyCard>
        </a>
      </Container>
  );
};

export default ResultItem;