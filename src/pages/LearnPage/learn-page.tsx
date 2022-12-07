import React from 'react';
import {Container, MediaStyling, NestedContainer,} from './learn-page.styles';
import QuestionBox from "./QuestionBox/question-box";
import useLearnPage from "../../hooks/useLearnPage";


const LearnPage = () => {

  const questions = useLearnPage();

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