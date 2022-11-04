import React from 'react';
import {H5} from '../../../layouts/headers.styles';
import {
  Container,
  AssemblyCard,
  PaddingContainer,
  SecondaryData,
  SecondaryItem,
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
        <AssemblyCard>
          <PaddingContainer>
            <div style={{wordBreak: "break-all"}}>
              <H5>{studySet.title}</H5>
              <SecondaryData>
                <SecondaryItem>{studySet.terms.length + " terms"}</SecondaryItem>
              </SecondaryData>
            </div>
            <BottomPart>
              <AuthorName>{studySet.author.name}</AuthorName>
              <Button
                  radius={".25rem"}
                  padding={".375rem .75rem"}
              >Preview</Button>
            </BottomPart>
          </PaddingContainer>
        </AssemblyCard>
      </Container>
  );
};

export default ResultItem;