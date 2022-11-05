import React, {useEffect, useState} from 'react';
import generateTest from './test-generator';
import {PageContainer, PageContentWrap, PageWrapper,} from './test-page.styles';
import PageContent from './page-content';
import useProgressBarLength from "../../hooks/useProgressBarLength";
import useGetStudySets from "../../hooks/useGetStudySets";
import {ITestSet} from "../../types";


const TestPage = () => {

  const [testSet, setTestSet] = useState<ITestSet | null>(null);
  const [studySet, setStudySet] = useGetStudySets();
  useProgressBarLength(testSet);

  useEffect(() => {
    if (studySet) setTestSet(generateTest([...studySet.terms]));
  }, [studySet])

  return (
    <>
      {testSet &&
        <PageContainer>
          <PageWrapper>
            <PageContentWrap>
              <PageContent
                testSet={testSet}
                setTestSet={setTestSet}
                refsLength={testSet.lengths[0] + testSet.lengths[1] + testSet.lengths[3] + 1}
              />
            </PageContentWrap>
          </PageWrapper>
        </PageContainer>}
    </>
  );
};

export default TestPage;