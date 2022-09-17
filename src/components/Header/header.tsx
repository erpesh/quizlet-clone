import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../../firebase-config";
import {signOut} from "firebase/auth";
import {
  Container,
  LogoContainer,
  NavPart,
  NavItem,
  DefaultContainer,
  AuthButton
} from "./header.styles";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import {ReactComponent as ChevronIcon} from "../../assets/images/chevron-down.svg";
import colors from "../../assets/colors";
import {BlueButton} from "../BlueButton/blue-button.styles";
import Search from "../Search/search";
import AuthContext from "../../context/auth-context";


const Header = () => {

  const {signInWithGoogle, isAuth, setIsAuth} = useContext(AuthContext);
  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth)
        .then(() => {
          localStorage.clear();
          setIsAuth(false);
        })
  };

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
            <Link to="/">
              Your library&nbsp;<ChevronIcon/>
            </Link>
          </NavItem>
          <DefaultContainer>
            <BlueButton
                onClick={() => navigate("/create")}
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
        </NavPart>
      </Container>
  );
};

export default Header;