import React from 'react';
import {
  StudyModulesContainer,
  StudyModulesWrapper,
  ListItem,
  UnorderedList,
  ItemHeader,
  ItemH2,
  ItemLink
} from "./modules-list.styles";

const ModulesList = () => {

  const modules = ["Flashcards", "Learn", "Test", "Match"]

  return (
      <StudyModulesWrapper>
        <StudyModulesContainer>
          <UnorderedList>
            {modules.map(item => <ListItem>
              <div>
                <ItemHeader>
                  <ItemH2>
                    <ItemLink to={"/"}>{item}</ItemLink>
                  </ItemH2>
                </ItemHeader>
              </div>
            </ListItem>)}
          </UnorderedList>
        </StudyModulesContainer>
      </StudyModulesWrapper>
  );
};

export default ModulesList;