import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import FlashCards from "../../components/FlashCards/flash-cards";
import {
  Container,
  Centring
} from './flash-cards-page.styles';
import useGetStudySet from "../../hooks/useGetStudySet";

const FlashCardsPage = () => {

  const [studySet, setStudySet] = useGetStudySet();
  const [progressNumber, setProgressNumber] = useState(0);

  return (
      <Container>
        <Centring>
          {studySet && <FlashCards studySet={studySet}
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