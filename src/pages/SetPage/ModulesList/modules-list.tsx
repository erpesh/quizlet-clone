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
import {useNavigate} from "react-router-dom";

interface Props {
  id: string | undefined
}

const ModulesList: React.FC<Props> = ({id}) => {

  const navigate = useNavigate();

  const modules = [
    {name: "Flashcards", link: "/"},
    {name: "Learn", link: `/${id}/learn`},
    {name: "Test", link: `/${id}/test`},
    {name: "Match", link: "/"}]

  return (
      <StudyModulesWrapper>
        <StudyModulesContainer>
          <UnorderedList>
            {modules.map(item => <ListItem onClick={() => navigate(item.link)} key={item.name}>
              <div>
                <ItemHeader>
                  <ItemH2>
                    {item.name}
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