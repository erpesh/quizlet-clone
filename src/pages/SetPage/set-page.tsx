import {useNavigate, useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import {useEffect, useState, KeyboardEvent, useReducer} from "react";
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
  PreviewSection,
} from "./set-page.styles";
import ModulesList from "./ModulesList/modules-list";
import CardsCarousel from "./CardsCarousel/cards-carousel";
import CardsFooter from "./CardsFooter/cards-footer";
import {cardsLogicReducer, initialState} from "../../reducers/cards-logic";


const SetPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const studySetsCollectionRef = collection(db, "studySets");

  const [studySet, setStudySet] = useState<any>(null);
  const [progressNumber, setProgressNumber] = useState(0);

  const [state, dispatch] = useReducer(cardsLogicReducer, initialState);

  const toggleTermSide = () => dispatch({type: "TOGGLE_SIDE"});

  const flipWithNoAnimation = () => dispatch({type: "FLIP_SIDE"});

  const handleLeftButton = () => {
    dispatch({type: "PREV_CARD"});
    setProgressNumber(prevState => prevState === 0 ? studySet.terms.length - 1 : prevState - 1);
  }
  const handleRightButton = () => {
    dispatch({type: "NEXT_CARD"});
    setProgressNumber(prevState => prevState === studySet.terms.length - 1 ? 0 : prevState + 1);
  }

  const handleArrowKeys = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") handleRightButton()
    else if (e.key === "ArrowLeft") handleLeftButton()
    else if (e.key === " ") toggleTermSide()
  }

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
      <SetPageWrapper tabIndex={0} onKeyDown={handleArrowKeys}>
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
                            <ProgressBar style={{width: `${progressNumber * 100 / studySet.terms.length}%`}}/>
                          </ProgressBarContainer>
                        </MarginBottom>
                        <div style={{height: "100%"}}>
                          <PreviewSection>
                            <CardsCarousel
                                activeCard={studySet.terms[progressNumber]}
                                studySet={studySet}
                                setStudySet={setStudySet}
                                progressNumber={progressNumber}
                                isTermSide={state.isTermSide}
                                animation={state.animation}
                                animate={state.animate}
                                toggleTermSide={toggleTermSide}
                                keyChange={state.keyChange}
                                handleLeftButton={handleLeftButton}
                                handleRightButton={handleRightButton}
                            />
                            <CardsFooter
                                studySet={studySet}
                                setStudySet={setStudySet}
                                setProgressNumber={setProgressNumber}
                                toggleTermSide={toggleTermSide}
                                handleRightButton={handleRightButton}
                                flipWithNoAnimation={flipWithNoAnimation}
                            />
                          </PreviewSection>
                        </div>
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