import {createContext, Dispatch, FC, SetStateAction, useEffect, useState} from "react";
import {signInWithPopup, signOut} from "firebase/auth";
import {auth, provider} from "../firebase-config";
import {useAuthState} from "react-firebase-hooks/auth";

const INITIAL_STATE = {
  isAuth: false,
  progressBarWidth: 0,
  setIsAuth: (() => undefined) as Dispatch<SetStateAction<boolean>>,
  signInWithGoogle: function(){},
  signUserOut: function(){},
  setProgressBarWidth: (() => undefined) as Dispatch<SetStateAction<number>>,
}

const AuthContext = createContext(INITIAL_STATE);

export default AuthContext;

export const AuthProvider: FC<{ children: React.ReactNode }> = ({children}) => {

  const [isAuth, setIsAuth] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    setIsAuth(!!auth.currentUser?.uid)
  }, [user, loading])

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
    progressBarWidth: progressBarWidth,

    setIsAuth: setIsAuth,
    signInWithGoogle: signInWithGoogle,
    signUserOut: signUserOut,
    setProgressBarWidth: setProgressBarWidth,
  }

  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}