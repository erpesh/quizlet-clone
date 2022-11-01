import React from 'react';
import {
  Wrapper,
  BorderBottom,
  Container,
  MainContentContainer,
  ProgressBarContainer,
  ProgressBar,
  ChooseModuleContainer,
  MainContentSeparator,
  CloseButtonContainer,
  CloseButton,
  ModulesDropDownButton
} from './modules-header.styles';
import {FiX} from "react-icons/fi";
import learnIcon from "../../../assets/images/learn-icon.png";
import flashCardsIcon from "../../../assets/images/flash-cards-icon.png";
import testIcon from "../../../assets/images/test-icon.png";
import matchingIcon from "../../../assets/images/matching-icon.png";
import {FaChevronDown} from "react-icons/fa";

interface Props {
  activePage: string,
  toggleModulesDropDown: () => void,
  buttonRef: React.Ref<HTMLButtonElement>
}

const ModulesHeader: React.FC<Props> = ({activePage, toggleModulesDropDown, buttonRef}) => {

  const chooseIcon = () => {
    if (activePage === "flashcards")
      return flashCardsIcon
    if (activePage === "learn")
      return learnIcon
    if (activePage === "test")
      return testIcon
    return matchingIcon;
  }

  return (
      <Wrapper>
        <BorderBottom>
          <Container>
            <MainContentContainer>
              <ChooseModuleContainer>
                <img width={24} height={24} src={chooseIcon()} alt={"2"}/>
                <ModulesDropDownButton
                    onClick={toggleModulesDropDown}
                    ref={buttonRef}
                >
                  <span style={{paddingLeft: ".5rem"}}>{activePage[0].toUpperCase() + activePage.substring(1)}</span>
                  <FaChevronDown style={{marginLeft: ".5rem"}}/>
                </ModulesDropDownButton>
              </ChooseModuleContainer>
              <MainContentSeparator/>
              <CloseButtonContainer>
                <CloseButton><FiX/></CloseButton>
              </CloseButtonContainer>
            </MainContentContainer>
            <ProgressBarContainer>
              <ProgressBar width={15}/>
            </ProgressBarContainer>
          </Container>
        </BorderBottom>
      </Wrapper>
  );
};

export default ModulesHeader;