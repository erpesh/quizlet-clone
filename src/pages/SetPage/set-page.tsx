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
    HideBelowNav,
    HideBelowNavWrap
} from "./set-page.styles";

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
                  <HideBelowNavWrap>
                    <HideBelowNav>
                      
                    </HideBelowNav>
                  </HideBelowNavWrap>
                </HideBelow>
              </SetModelSection>
            </SetPageContainer>) : <div/>}
      </SetPageWrapper>
  );
};

export default SetPage;