import React, {useContext, useEffect, useState} from 'react';
import {
  Container,
  NestedContainer,
  MediaStyling,
} from './learn-page.styles';
import QuestionBox from "./QuestionBox/question-box";
import {useNavigate, useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import {learnTerm} from "../../types/term.types";
import generateQuestions from "./generate-questions";
import AuthContext from "../../context/auth-context";
import useGetStudySet from "../../hooks/useGetStudySet";


const LearnPage = () => {

  const {setProgressBarWidth} = useContext(AuthContext);
  const [studySet, setStudySet] = useGetStudySet();

  const [questions, setQuestions] = useState<learnTerm[]>([]);

  useEffect(() => {
    if (studySet){
      setQuestions(generateQuestions([...studySet.terms]));
    }
  }, [studySet])

  useEffect(() => {
    setProgressBarWidth(0);
  }, [])

  return (
        <Container>
          {questions.length > 0 && <NestedContainer>
              <MediaStyling>
                  <QuestionBox questions={questions}/>
              </MediaStyling>
          </NestedContainer>}
        </Container>
  );
};

export default LearnPage;