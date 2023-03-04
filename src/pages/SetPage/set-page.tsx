import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {
  HideAbove,
  HideBelow,
  MarginBottom,
  ProgressBar,
  ProgressBarContainer,
  SetModelSection,
  SetPageContainer,
  SetPageWrapper,
  SetTitle,
} from "./set-page.styles";
import ModulesList from "./ModulesList/modules-list";
import FlashCards from "../../components/FlashCards/flash-cards";
import SetDetails from "./SetDetails/set-details";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import {IStudySet} from "../../types";

const SetPage = () => {

  const studySetsCollectionRef = collection(db, "studySets");
  const {id} = useParams();
  const [studySet, setStudySet] = useState<IStudySet | null>(null);
  const [progressNumber, setProgressNumber] = useState(0);

  async function getStudySet() {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map((doc): any => ({...doc.data(), ref: doc.ref}));
    const [filteredSet] = sets.filter(item => item.id.toString() === id)
    if (!filteredSet.isPrivate || auth.currentUser?.uid === filteredSet.author.id) {
      setStudySet(filteredSet)
    }

  }

  useEffect(() => {
    getStudySet();
  }, [id])

  return (
    <SetPageWrapper tabIndex={0}>
      {studySet && <>
        <SetPageContainer>
          <SetTitle>{studySet.title}</SetTitle>
          <SetModelSection>
            <HideBelow>
              <ModulesList id={id}/>
            </HideBelow>
            <FlashCards studySet={studySet}
                        setStudySet={setStudySet}
                        progressNumber={progressNumber}
                        setProgressNumber={setProgressNumber}
                        height={"100%"}
            >
              <MarginBottom>
                <ProgressBarContainer>
                  <ProgressBar style={{width: `${(progressNumber + 1) * 100 / studySet.terms.length}%`}}/>
                </ProgressBarContainer>
              </MarginBottom>
            </FlashCards>
            <HideAbove>
              <ModulesList id={id}/>
            </HideAbove>
          </SetModelSection>
        </SetPageContainer>
        <SetDetails studySet={studySet}/>
      </>
      }
    </SetPageWrapper>
  );
};

export default SetPage;