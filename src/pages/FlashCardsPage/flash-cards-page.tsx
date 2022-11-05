import React, {useContext, useEffect, useState} from 'react';
import FlashCards from "../../components/FlashCards/flash-cards";
import {Centring, Container} from './flash-cards-page.styles';
import useGetStudySets from "../../hooks/useGetStudySets";
import AuthContext from "../../context/auth-context";

const FlashCardsPage = () => {

  const {setProgressBarWidth} = useContext(AuthContext);
  const [studySet, setStudySet] = useGetStudySets();
  const [progressNumber, setProgressNumber] = useState(0);

  useEffect(() => {
    if (studySet) setProgressBarWidth((progressNumber + 1) * 100 / studySet.terms.length);
  }, [progressNumber])

  return (
    <Container>
      <Centring>
        {studySet &&
          <FlashCards studySet={studySet}
                      setStudySet={setStudySet}
                      progressNumber={progressNumber}
                      setProgressNumber={setProgressNumber}
                      height={"37.875rem"}
          />}
      </Centring>
    </Container>
  );
};

export default FlashCardsPage;