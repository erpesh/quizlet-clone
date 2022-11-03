import {testType} from "../types/test-page.types";
import {useContext, useEffect} from "react";
import AuthContext from "../context/auth-context";

// calculates progress bar width for Test Page
function useProgressBarLength(testSet: testType | null) {

  const {setProgressBarWidth} = useContext(AuthContext);

  useEffect(() => {
    if (testSet) {
      const answers = [
        ...testSet.trueFalse.map(item => item.isAnswered),
        ...testSet.multipleChoice.map(item => !!item.answer),
        ...testSet.matching.items.map(item => !!item.answer),
        ...testSet.written.map(item => !!item.answer)
      ]
      const total = answers.length;
      const progress = answers.filter(item => item).length;
      setProgressBarWidth(progress * 100 / total);
    }
  }, [testSet])
}
export default useProgressBarLength;