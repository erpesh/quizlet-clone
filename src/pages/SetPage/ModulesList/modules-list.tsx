import React from 'react';
import {
  ItemH2,
  ItemHeader,
  ListItem,
  StudyModulesContainer,
  StudyModulesWrapper,
  UnorderedList,
} from "./modules-list.styles";
import {useNavigate} from "react-router-dom";
import learnIcon from "../../../assets/images/learn-icon.png";
import flashCardsIcon from "../../../assets/images/flash-cards-icon.png";
import testIcon from "../../../assets/images/test-icon.png";
import matchingIcon from "../../../assets/images/matching-icon.png";

interface Props {
  id: string | undefined
}

const ModulesList: React.FC<Props> = ({id}) => {

  const navigate = useNavigate();

  const modules = [
    {name: "Flashcards", link: `/set/${id}/flashcards`, image: flashCardsIcon},
    {name: "Learn", link: `/set/${id}/learn`, image: learnIcon},
    {name: "Test", link: `/set/${id}/test`, image: testIcon},
    {name: "Match", link: `/set/${id}/match`, image: matchingIcon}
  ]

  return (
    <StudyModulesWrapper>
      <StudyModulesContainer>
        <UnorderedList>
          {modules.map(item => <ListItem onClick={() => navigate(item.link)} key={item.name}>
            <div>
              <ItemHeader>
                <img
                  src={item.image}
                  alt={item.name}
                  width={28}
                  height={28}
                  style={{marginRight: ".675rem"}}
                />
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