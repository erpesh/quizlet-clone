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

  const modules = [
    {name: "Flashcards", link: "/"},
    {name: "Learn", link: "/"},
    {name: "Test", link: "/"},
    {name: "Match", link: "/"}]

  return (
      <StudyModulesWrapper>
        <StudyModulesContainer>
          <UnorderedList>
            {modules.map(item => <ListItem key={item.name}>
              <div>
                <ItemHeader>
                  <ItemH2>
                    <ItemLink to={item.link}>{item.name}</ItemLink>
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