import {createContext, Dispatch, FC, useState} from "react";
import {signInWithPopup, signOut} from "firebase/auth";
import {auth, provider} from "../firebase-config";

const INITIAL_STATE = {
  isAuth: false,
  setIsAuth: (() => undefined) as Dispatch<any>,
  signInWithGoogle: (() => undefined) as Dispatch<any>,
  signUserOut: (() => undefined) as Dispatch<any>
}

const AuthContext = createContext(INITIAL_STATE);

export default AuthContext;

export const AuthProvider: FC<{children: any}> = ({children}) => {

  const [isAuth, setIsAuth] = useState(false);

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

  const contextData = {
    isAuth: isAuth,

    setIsAuth: setIsAuth,
    signInWithGoogle: signInWithGoogle,
    signUserOut: signUserOut
  }

  return (
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
  )
}