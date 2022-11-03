import {useNavigate, useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import {useEffect, useState} from "react";
import {
  SetPageWrapper,
  SetPageContainer,
  SetTitle,
  SetModelSection,
  HideBelow,
  HideAbove,
  MainSectionContainer,
  MainSectionContainer2,
  MainSectionWrapper,
  MarginBottom,
  HeightRegulator,
  ProgressBarContainer,
  ProgressBar,
} from "./set-page.styles";
import ModulesList from "./ModulesList/modules-list";
import FlashCards from "../../components/FlashCards/flash-cards";


const SetPage = () => {

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
      <SetPageWrapper tabIndex={0}>
        {studySet ? (
            <SetPageContainer>
              <SetTitle>{studySet.title}</SetTitle>
              <SetModelSection>
                <HideBelow>
                  <ModulesList id={id}/>
                </HideBelow>
                <MainSectionWrapper>
                  <MainSectionContainer>
                    <MainSectionContainer2>
                      <HeightRegulator>
                        <MarginBottom>
                          <ProgressBarContainer>
                            <ProgressBar style={{width: `${(progressNumber + 1) * 100 / studySet.terms.length}%`}}/>
                          </ProgressBarContainer>
                        </MarginBottom>
                        <FlashCards studySet={studySet}
                                    setStudySet={setStudySet}
                                    progressNumber={progressNumber}
                                    setProgressNumber={setProgressNumber}
                        />
                      </HeightRegulator>
                    </MainSectionContainer2>
                  </MainSectionContainer>
                </MainSectionWrapper>
                <HideAbove>
                  <ModulesList id={id}/>
                </HideAbove>
              </SetModelSection>
            </SetPageContainer>) : <div/>}
      </SetPageWrapper>
  );
};

export default SetPage;