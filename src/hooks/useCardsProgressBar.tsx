import {useContext, useEffect} from "react";
import AuthContext from "../context/auth-context";
import {IStudySet} from "../types";

function useCardsProgressBar(studySet: IStudySet, progressNumber: number){

  const {setProgressBarWidth} = useContext(AuthContext);

  useEffect(() => {
    if (studySet) setProgressBarWidth((progressNumber + 1) * 100 / studySet.terms.length);
  }, [progressNumber])
}
export default useCardsProgressBar;