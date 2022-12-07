import {useContext, useEffect, useState} from "react";
import AuthContext from "../context/auth-context";
import useGetStudySets from "./useGetStudySets";
import {ILearnTerm} from "../types";
import generateQuestions from "../pages/LearnPage/generate-questions";

function useLearnPage(){
  const {setProgressBarWidth} = useContext(AuthContext);
  const [studySet, setStudySet] = useGetStudySets();

  const [questions, setQuestions] = useState<ILearnTerm[]>([]);

  useEffect(() => {
    if (studySet) setQuestions(generateQuestions([...studySet.terms]));
    setProgressBarWidth(0);
  }, [studySet])

  return questions;
}
export default useLearnPage;