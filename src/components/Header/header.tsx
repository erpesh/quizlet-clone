import React, {FC, useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";

// interface HeaderProps {
//   setIsAuth: (isAuth: boolean) => void
// }

const Header = () => {

  const [isAuth, setIsAuth] = useState(false);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then(result => {
          localStorage.setItem("isAuth", "true");
          setIsAuth(true);
          console.log(result)
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
      <header>
        <div>Logo</div>
        <div>Home</div>
        <div>Create</div>
        {!isAuth ? <div onClick={signInWithGoogle}>Log in</div> : <div onClick={signUserOut}>Log out</div>}
      </header>
  );
};

export default Header;