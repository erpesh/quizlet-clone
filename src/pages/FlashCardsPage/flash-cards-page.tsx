import React, {useEffect, useState} from 'react';
import {
  HeightRegulator,
  MainSectionContainer,
  MainSectionContainer2, MainSectionWrapper,
} from "../SetPage/set-page.styles";
import {useNavigate, useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import colors from "../../assets/colors";
import FlashCards from "../../components/FlashCards/flash-cards";

const FlashCardsPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const studySetsCollectionRef = collection(db, "studySets");

  const [studySet, setStudySet] = useState<any>(null);
  const [progressNumber, setProgressNumber] = useState(0);

  const getStudySets = async () => {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map(doc => doc.data());
    const [filteredSet] = sets.filter(item => item.id.toString() === id)
    if (!filteredSet.isPrivate || auth.currentUser?.uid === filteredSet.author.id) {
      setStudySet(filteredSet)
    } else navigate('/');
  }

  useEffect(() => {
    getStudySets()
  }, [])

  return (
        <MainSectionWrapper tabIndex={0} style={{backgroundColor: colors.pageBackgroundColor}}>
          {studySet && <MainSectionContainer style={{
            margin: "0 auto",
            padding: "2rem",
            width: "70%",
            minHeight: 'calc(100vh - 66px)',
            boxSizing: 'border-box'
          }}>
              <MainSectionContainer2>
                  <HeightRegulator>
                      <FlashCards studySet={studySet}
                                  setStudySet={setStudySet}
                                  progressNumber={progressNumber}
                                  setProgressNumber={setProgressNumber}
                      />
                  </HeightRegulator>
              </MainSectionContainer2>
          </MainSectionContainer>}
        </MainSectionWrapper>
  );
};

export default FlashCardsPage;