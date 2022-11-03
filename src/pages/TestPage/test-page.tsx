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


const TestPage = () => {

  const {id} = useParams();
  const navigate = useNavigate();
  const studySetsCollectionRef = collection(db, "studySets");

  const [testSet, setTestSet] = useState<testType | null>(null);

  const getStudySets = async () => {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map(doc => doc.data());
    const [filteredSet] = sets.filter(item => item.id.toString() === id)
    if (!filteredSet.isPrivate || auth.currentUser?.uid === filteredSet.author.id) {
      const terms = [...filteredSet.terms];
      setTestSet(generateTest(terms));
    } else navigate('/');
  }
  // progress bar
  useProgressBarLength(testSet);

  useEffect(() => {
    getStudySets()
  }, [])

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