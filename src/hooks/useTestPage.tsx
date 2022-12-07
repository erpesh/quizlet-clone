import {useEffect, useState} from "react";
import {ITestSet} from "../types";
import useGetStudySets from "./useGetStudySets";
import useProgressBarLength from "./useProgressBarLength";
import generateTest from "../pages/TestPage/test-generator";

function useTestPage(){
  const [testSet, setTestSet] = useState<ITestSet | null>(null);
  const [studySet, setStudySet] = useGetStudySets();
  useProgressBarLength(testSet);

  useEffect(() => {
    if (studySet) setTestSet(generateTest([...studySet.terms]));
  }, [studySet])

  return {testSet, setTestSet};
}
export default useTestPage;