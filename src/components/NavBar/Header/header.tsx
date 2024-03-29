import React, {FC, useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {
  AuthButton,
  Container,
  DefaultContainer,
  LogoContainer,
  NavItem,
  NavPart,
  SideBarIconWrap
} from "./header.styles";
import {ReactComponent as Logo} from "../../../assets/images/logo.svg";
import {ReactComponent as ChevronIcon} from "../../../assets/images/chevron-down.svg";
import {ReactComponent as SideBarIcon} from "../../../assets/images/side-bar-icon.svg";
import colors from "../../../assets/colors";
import BlueButton from "../../../layouts/blue-button.styles";
import Search from "../../Search/search";
import AuthContext from "../../../context/auth-context";

interface Props {
  toggle: () => void,
  toggleLibrary: () => void,
  buttonRef: React.Ref<HTMLDivElement>
}

const Header: FC<Props> = ({toggle, toggleLibrary, buttonRef}) => {

  const {signInWithGoogle, isAuth, signUserOut} = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Container>
      <NavPart>
        <LogoContainer onClick={() => navigate("/")}>
          <Logo color={colors.mainBlueColor}/>
        </LogoContainer>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/search/search?value=">Search</Link>
        </NavItem>
        {isAuth && <NavItem
          ref={buttonRef}
          onClick={toggleLibrary}
          style={{cursor: "pointer"}}
        >
          <div>
            Your library&nbsp;<ChevronIcon/>
          </div>
        </NavItem>}
        <DefaultContainer>
          <BlueButton
            onClick={
              isAuth ?
                () => navigate("/create")
                : signInWithGoogle
            }
            padding="0.45rem 0.85rem"
            radius="0.25rem"
            fontSize=".875rem"
          >
            Create
          </BlueButton>
        </DefaultContainer>
      </NavPart>
      <NavPart>
        <DefaultContainer>
          <Search/>
        </DefaultContainer>
        <DefaultContainer>
          {!isAuth ?
            <AuthButton onClick={signInWithGoogle}>Sign in</AuthButton> :
            <AuthButton onClick={signUserOut}>Log out</AuthButton>}
        </DefaultContainer>
        <SideBarIconWrap onClick={toggle}>
          <SideBarIcon/>
        </SideBarIconWrap>
      </NavPart>
    </Container>
  );
};

export default Header;