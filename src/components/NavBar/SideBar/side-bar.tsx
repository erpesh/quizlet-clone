import React, {FC, useContext, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {
  CloseIcon,
  Container,
  Icon,
  SidebarLink,
  SidebarMenu,
  SidebarSignButton,
  SidebarWrapper,
  SideLogo,
  SideBarDropDownButton,
  LibraryContainer,
  Item,
  ItemAuthorName,
  ItemContainer,
  ItemTitle
} from "./side-bar.styles";
import {ReactComponent as SideBarIcon} from "../../../assets/images/side-bar-icon.svg";
import AuthContext from "../../../context/auth-context";
import {ReactComponent as ChevronIcon} from "../../../assets/images/chevron-down.svg";
import useGetStudySets from "../../../hooks/useGetStudySets";
import {IStudySet} from "../../../types";
import {auth} from "../../../firebase-config";


interface Props {
  isOpen: boolean,
  toggle: () => void
}

const SideBar: FC<Props> = ({isOpen, toggle}) => {

  const navigate = useNavigate();
  const [studySets, setStudySets] = useGetStudySets(true, true);
  const {signInWithGoogle, isAuth, signUserOut} = useContext(AuthContext);
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isLibraryDropDown, setIsLibraryDropDown] = useState(false);

  const toggleLibrary = () => {
    if (studySets.length > 0)
      setIsLibraryDropDown(!isLibraryDropDown)
  };

  const logoOnClick = () => {
    navigate("/");
    toggle();
  }

  return (
    <Container isOpen={isOpen}>
      <SideLogo onClick={logoOnClick}>
        <SideBarIcon/>
      </SideLogo>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/search/search?value=" onClick={toggle}>
            Search
          </SidebarLink>
          {isAuth && <SideBarDropDownButton
            onClick={toggleLibrary}
            ref={buttonRef}
          >
            Your library&nbsp;<ChevronIcon/>
          </SideBarDropDownButton>}
          {isAuth && isLibraryDropDown && <LibraryContainer>
            {studySets.map((studySet: IStudySet) => (
              <React.Fragment key={studySet.id}>
                {(!studySet.isPrivate || studySet.author.id === auth.currentUser?.uid) &&
                  <Item
                    to={`/set/${studySet.id}`}
                    onClick={toggle}
                  >
                    <ItemContainer>
                      <ItemTitle>{studySet.title}</ItemTitle>
                      <ItemAuthorName>{studySet.author.name}</ItemAuthorName>
                    </ItemContainer>
                  </Item>
                }
              </React.Fragment>))}
          </LibraryContainer>}
          <SidebarLink to="/create" onClick={toggle}>
            Create
          </SidebarLink>
          {!isAuth ?
            <>
              <SidebarSignButton onClick={(e) => {
                signInWithGoogle()
                toggle()
              }}>
                Log in
              </SidebarSignButton>
            </> :
            <>
              <SidebarSignButton onClick={(e) => {
                signUserOut()
                toggle()
              }}>
                Logout
              </SidebarSignButton>
            </>
          }
        </SidebarMenu>
      </SidebarWrapper>
    </Container>
  );
};

export default SideBar;