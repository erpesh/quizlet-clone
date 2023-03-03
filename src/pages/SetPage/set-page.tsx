import {useLocation, useParams} from "react-router-dom";
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
import useGetStudySets from "../../hooks/useGetStudySets";
import SetDetails from "./SetDetails/set-details";
// import {RouteComponentProps} from "@react/router";

// interface Props extends RouteComponentProps

const SetPage = () => {

  // interface CustomizedState {
  //   prevPath: string
  // }
  //
  // const location = useLocation();
  // const { prevPath } = location.state as CustomizedState;

  const {id} = useParams();
  const [studySet, setStudySet] = useGetStudySets();
  const [progressNumber, setProgressNumber] = useState(0);
  // const [dummy, setDummy] = useState(false);

  // useEffect(() => {
  //   console.log(location.pathname, prevPath, dummy);
  //   console.log(prevPath.substring(1).length)
  //   if (prevPath.substring(1).length !== 0)
  //     setProgressNumber(2);
  // }, [location])

  return (
    <SetPageWrapper tabIndex={0}>
      {studySet ? (<>
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
      ) : <div/>}
    </SetPageWrapper>
  );
};

export default SetPage;