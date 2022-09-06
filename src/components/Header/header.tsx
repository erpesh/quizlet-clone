import React, {FC, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import { Container } from "./header.styles";

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
        <div>Logo</div>
        <div>Home</div>
        <div onClick={() => navigate("/create")}>Create</div>
        {!isAuth ? <div onClick={signInWithGoogle}>Log in</div> : <div onClick={signUserOut}>Log out</div>}
      </Container>
  );
};

export default Header;