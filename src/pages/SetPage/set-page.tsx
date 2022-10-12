import {useNavigate, useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import {useEffect, useState} from "react";
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
  PreviewSection,
} from "./set-page.styles";
import ModulesList from "./ModulesList/modules-list";
import CardsCarousel from "./CardsCarousel/cards-carousel";
import CardsFooter from "./CardsFooter/cards-footer";

const SetPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const studySetsCollectionRef = collection(db, "studySets");
  const [studySet, setStudySet] = useState<any>(null);
  const [activeCard, setActiveCard] = useState<termInterface | null>(null);
  const [progressNumber, setProgressNumber] = useState(1);
  const [isTermSide, setIsTermSide] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [animation, setAnimation] = useState<"prev" | "next" | "flip">("flip");
  const [keyChange, setKeyChange] = useState(false);

  const toggleKey = () => setKeyChange(!keyChange);

  const toggleTermSide = () => {
    setAnimation("flip");
    setAnimate(true);
    setIsTermSide(!isTermSide)
    toggleKey();
  };

  const handleLeftButton = () => {
    setAnimation("prev");
    setAnimate(true);
    toggleKey();
    const nextNum = progressNumber === 1 ? studySet.terms.length : progressNumber - 1
    setProgressNumber(nextNum);
    setActiveCard(studySet.terms[nextNum - 1]);
  }
  const handleRightButton = () => {
    setAnimation("next");
    setAnimate(true);
    toggleKey();
    const nextNum = progressNumber === studySet.terms.length ? 1 : progressNumber + 1
    setProgressNumber(nextNum);
    setActiveCard(studySet.terms[nextNum - 1]);
  }

  const handleArrowKeys = (e: React.KeyboardEvent<HTMLDivElement>) => {
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
      setActiveCard(filteredSet.terms[0]);
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
                                studySet={studySet}
                                progressNumber={progressNumber}
                                isTermSide={isTermSide}
                                animation={animation}
                                animate={animate}
                                toggleTermSide={toggleTermSide}
                                keyChange={keyChange}
                                handleLeftButton={handleLeftButton}
                                handleRightButton={handleRightButton}
                            />
                            <CardsFooter
                                studySet={studySet}
                                setStudySet={setStudySet}
                                setActiveCard={setActiveCard}
                                setProgressNumber={setProgressNumber}
                                toggleTermSide={toggleTermSide}
                                handleRightButton={handleRightButton}
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