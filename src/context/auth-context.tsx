import {createContext, Dispatch, FC, useState} from "react";
import {signInWithPopup} from "firebase/auth";
import {auth, db, provider} from "../firebase-config";
import {collection, getDocs} from "firebase/firestore";

const INITIAL_STATE = {
  isAuth: false,
  setIsAuth: (() => undefined) as Dispatch<any>,
  signInWithGoogle: (() => undefined) as Dispatch<any>
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

  const contextData = {
    isAuth: isAuth,

    setIsAuth: setIsAuth,
    signInWithGoogle: signInWithGoogle
  }

  return (
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
  )
}