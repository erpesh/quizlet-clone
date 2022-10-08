import {useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";
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
    PreviewSection
} from "./set-page.styles";
import ModulesList from "./ModulesList/modules-list";
import CardsCarousel from "./CardsCarousel/cards-carousel";

const SetPage = () => {

  const {id} = useParams();
  const studySetsCollectionRef = collection(db, "studySets");
  const [studySet, setStudySet] = useState<any>(null);

  const getStudySets = async () => {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map(doc => doc.data());
    const [filteredSet] = sets.filter(item => item.id.toString() === id)
    setStudySet(filteredSet)
  }

  useEffect(() => {
    getStudySets()
  }, [])

  return (
      <SetPageWrapper>
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
                            <ProgressBar style={{width: "12%"}}/>
                          </ProgressBarContainer>
                        </MarginBottom>
                        <div style={{height: "100%"}}>
                          <PreviewSection>
                            <CardsCarousel/>
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