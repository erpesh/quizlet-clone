import React, {FC, useContext} from 'react';
import {
  Container,
    SidebarLink,
    SidebarSignButton,
    SidebarMenu,
    SidebarWrapper,
    SideLogo,
    SideTitle,
    CloseIcon,
    Icon
} from "./side-bar.styles";
import {ReactComponent as SideBarIcon} from "../../assets/images/side-bar-icon.svg";
import AuthContext from "../../context/auth-context";

interface Props {
  isOpen: boolean,
  toggle: () => void
}

const SideBar: FC<Props> = ({isOpen, toggle}) => {

  const {signInWithGoogle, isAuth, signUserOut} = useContext(AuthContext);

  return (
      <Container isOpen={isOpen}>
        <SideLogo>
          <SideBarIcon/>
        </SideLogo>
        <Icon onClick={toggle}>
          <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/search/anime?q=&order_by=members" onClick={toggle}>
              Anime
            </SidebarLink>
            {!isAuth ?
                <>
                  <SidebarSignButton onClick={(e) => {
                    signInWithGoogle(e)
                    toggle()
                  }}>
                    Log in
                  </SidebarSignButton>
                </> :
                <>
                  <SidebarLink to="/profile" onClick={toggle}>
                    Profile
                  </SidebarLink>
                  <SidebarSignButton onClick={(e) => {
                    signUserOut(e)
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