import React, {useContext} from 'react';
import {
  BorderBottom,
  ChooseModuleContainer,
  CloseButton,
  CloseButtonContainer,
  Container,
  MainContentContainer,
  MainContentSeparator,
  ModulesDropDownButton,
  ProgressBar,
  ProgressBarContainer,
  Wrapper
} from './modules-header.styles';
import {FiX} from "react-icons/fi";
import learnIcon from "../../../assets/images/learn-icon.png";
import flashCardsIcon from "../../../assets/images/flash-cards-icon.png";
import testIcon from "../../../assets/images/test-icon.png";
import matchingIcon from "../../../assets/images/matching-icon.png";
import {FaChevronDown} from "react-icons/fa";
import AuthContext from "../../../context/auth-context";
import {useNavigate} from "react-router-dom";

interface Props {
  activePage: string,
  id: string,
  toggleModulesDropDown: () => void,
  buttonRef: React.Ref<HTMLButtonElement>
}

const ModulesHeader: React.FC<Props> = ({activePage, id, toggleModulesDropDown, buttonRef}) => {

  const {progressBarWidth} = useContext(AuthContext);
  const navigate = useNavigate();

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
              <CloseButton onClick={() => navigate("/set/" + id)}><FiX/></CloseButton>
            </CloseButtonContainer>
          </MainContentContainer>
          <ProgressBarContainer>
            <ProgressBar width={progressBarWidth}/>
          </ProgressBarContainer>
        </Container>
      </BorderBottom>
    </Wrapper>
  );
};

export default ModulesHeader;