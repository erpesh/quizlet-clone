import {useNavigate, useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import {useContext, useEffect, useState} from "react";
import termInterface from "../../interfaces/term-interface";
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
    PreviewSection
} from "./set-page.styles";
import ModulesList from "./ModulesList/modules-list";
import CardsCarousel from "./CardsCarousel/cards-carousel";
import AuthContext from "../../context/auth-context";

const SetPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const studySetsCollectionRef = collection(db, "studySets");
  const {isAuth} = useContext(AuthContext);
  const [studySet, setStudySet] = useState<any>(null);
  const [activeCard, setActiveCard] = useState<termInterface | null>(null);
  const [progressNumber, setProgressNumber] = useState(1);

  const getStudySets = async () => {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map(doc => doc.data());
    const [filteredSet] = sets.filter(item => item.id.toString() === id)
    if (auth.currentUser?.uid === filteredSet.author.id) {
      setStudySet(filteredSet)
      setActiveCard(filteredSet.terms[0]);
    }
    else navigate(-1);
  }

  useEffect(() => {
    getStudySets()
  }, [])

  return (
      <SetPageWrapper>
        {studySet ? (
            <SetPageContainer>
              <SetTitle onClick={() => console.log(activeCard)}>{studySet.title}</SetTitle>
              <SetModelSection>
                <HideBelow>
                  <ModulesList/>
                </HideBelow>
                <MainSectionWrapper>
                  <MainSectionContainer>
                    <MainSectionContainer2>
                      <HeightRegulator>
                        <MarginBottom>
                          <ProgressBarContainer>
                            <ProgressBar style={{width: `${progressNumber * 100 / studySet.terms.length}%`}}/>
                          </ProgressBarContainer>
                        </MarginBottom>
                        <div style={{height: "100%"}}>
                          <PreviewSection>
                            <CardsCarousel
                              activeCard={activeCard}
                              setActiveCard={setActiveCard}
                              studySet={studySet}
                              progressNumber={progressNumber}
                              setProgressNumber={setProgressNumber}
                            />
                          </PreviewSection>
                        </div>
                      </HeightRegulator>
                    </MainSectionContainer2>
                  </MainSectionContainer>
                </MainSectionWrapper>
                <HideAbove>
                  <ModulesList/>
                </HideAbove>
              </SetModelSection>
            </SetPageContainer>) : <div/>}
      </SetPageWrapper>
  );
};

export default SetPage;