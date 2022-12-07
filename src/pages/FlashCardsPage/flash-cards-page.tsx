import React, {useState} from 'react';
import FlashCards from "../../components/FlashCards/flash-cards";
import {Centring, Container} from './flash-cards-page.styles';
import useGetStudySets from "../../hooks/useGetStudySets";
import useCardsProgressBar from "../../hooks/useCardsProgressBar";

const FlashCardsPage = () => {

  const [studySet, setStudySet] = useGetStudySets();
  const [progressNumber, setProgressNumber] = useState(0);

  useCardsProgressBar(studySet, progressNumber);

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