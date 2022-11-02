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


const LearnPage = () => {

  const {setProgressBarWidth} = useContext(AuthContext);
  const {id} = useParams();
  const navigate = useNavigate();
  const studySetsCollectionRef = collection(db, "studySets");

  const [questions, setQuestions] = useState<learnTerm[]>([]);

  const getStudySets = async () => {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map(doc => doc.data());
    const [filteredSet] = sets.filter(item => item.id.toString() === id)
    if (!!filteredSet &&
        (!filteredSet.isPrivate || auth.currentUser?.uid === filteredSet.author.id)) {
      setQuestions(generateQuestions(filteredSet.terms));
    } else navigate('/');
  }

  useEffect(() => {
    setProgressBarWidth(0);
    getStudySets();
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