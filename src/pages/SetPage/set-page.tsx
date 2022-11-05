import {useParams} from "react-router-dom";
import {useState} from "react";
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
import useGetStudySets from "../../hooks/useGetStudySets";


const SetPage = () => {

  const {id} = useParams();
  const [studySet, setStudySet] = useGetStudySets();
  const [progressNumber, setProgressNumber] = useState(0);

  return (
    <SetPageWrapper tabIndex={0}>
      {studySet ? (
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
        </SetPageContainer>) : <div/>}
    </SetPageWrapper>
  );
};

export default SetPage;