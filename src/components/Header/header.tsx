import React, {FC, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {auth, provider} from "../../firebase-config";
import {signInWithPopup} from "firebase/auth";
import {signOut} from "firebase/auth";
import {
  Container,
  LogoContainer,
  NavPart,
  NavItem,
  ButtonContainer
} from "./header.styles";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import {ReactComponent as ChevronIcon} from "../../assets/images/chevron-down.svg";
import colors from "../../assets/colors";
import {CreateButton} from "../CreateButton/create-button.styles";

// interface HeaderProps {
//   setIsAuth: (isAuth: boolean) => void
// }

const Header = () => {

  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then(result => {
          localStorage.setItem("isAuth", "true");
          setIsAuth(true);
        })
  }

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
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/">Your library&nbsp;<ChevronIcon/></Link></NavItem>
          <ButtonContainer>
            <CreateButton
                onClick={() => navigate("/create")}
                padding="0.45rem 0.85rem"
                radius="0.25rem"
            >
              Create
            </CreateButton>
          </ButtonContainer>
        </NavPart>
        <NavPart>
          {!isAuth ? <div onClick={signInWithGoogle}>Log in</div> : <div onClick={signUserOut}>Log out</div>}
        </NavPart>
      </Container>
  );
};

export default Header;