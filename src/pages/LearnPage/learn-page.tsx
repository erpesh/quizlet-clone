import React, {useContext, useEffect, useState} from 'react';
import {
  Container,
  NestedContainer,
  MediaStyling,
} from './learn-page.styles';
import QuestionBox from "./QuestionBox/question-box";
import {learnTerm} from "../../types/termType";
import generateQuestions from "./generate-questions";
import AuthContext from "../../context/auth-context";
import useGetStudySets from "../../hooks/useGetStudySets";


const LearnPage = () => {

  const {setProgressBarWidth} = useContext(AuthContext);
  const [studySet, setStudySet] = useGetStudySets();

  const [questions, setQuestions] = useState<learnTerm[]>([]);

  useEffect(() => {
    if (studySet) setQuestions(generateQuestions([...studySet.terms]));
    setProgressBarWidth(0);
  }, [studySet])

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