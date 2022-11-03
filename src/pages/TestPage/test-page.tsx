import React, {useEffect, useState} from 'react';
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import {useNavigate, useParams} from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/loading-spinner";
import generateTest from './test-generator';
import {testType} from '../../types/test-page.types';
import {
  PageContainer,
  PageContentWrap,
  PageWrapper,
} from './test-page.styles';
import PageContent from './page-content';
import useProgressBarLength from "../../hooks/useProgressBarLength";
import useGetStudySet from "../../hooks/useGetStudySet";


const TestPage = () => {

  const [testSet, setTestSet] = useState<testType | null>(null);
  const [studySet, setStudySet] = useGetStudySet();
  useProgressBarLength(testSet);

  useEffect(() => {
    if (studySet){
      setTestSet(generateTest([...studySet.terms]));
    }
  }, [studySet])

  return (
      <>
        {testSet ?
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
            </PageContainer>
            : <LoadingSpinner/>}
      </>
  );
};

export default TestPage;