import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/loading-spinner";
import TrueOrFalse from './TrueOrFalse/true-or-false';
import MultipleChoice from './MultipleChoice/multiple-choice';
import { generateTest } from './test-generator';
import { testType } from './interfaces';
import {
  OtherSection,
  PageContainer,
  PageContentWrap,
  PageWrapper,
  TrueFalseSection
} from './test-page.styles';
import Written from './Written/written';
import Matching from './Matching/matching';


const TestPage = () => {

  const { id } = useParams();
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

  useEffect(() => {
    getStudySets()
  }, [])

  return (
    <>
      {testSet ?
        <PageContainer>
          <PageWrapper>
            <PageContentWrap>
              <TrueFalseSection>
                {testSet.trueFalse.map((item, index) => {
                  return <TrueOrFalse
                    key={item.id}
                    testSet={testSet}
                    index={index}
                    orderNumber={index}
                    totalNumber={testSet.totalLength}
                    setTestSet={setTestSet}
                  />
                })}
              </TrueFalseSection>
              <OtherSection>
                {testSet.multipleChoice.map((item, index) => {
                  return <MultipleChoice
                    key={item.id}
                    testSet={testSet}
                    index={index}
                    orderNumber={index}
                    totalNumber={testSet.totalLength}
                    setTestSet={setTestSet}
                  />
                })}
              </OtherSection>
              <OtherSection>
                <Matching
                  testSet={testSet}
                  setTestSet={setTestSet}
                />
              </OtherSection>
              <OtherSection>
                {testSet.written.map((item, index) => {
                  return <Written
                  key={item.id}
                  testSet={testSet}
                  index={index}
                  orderNumber={index}
                  totalNumber={testSet.totalLength}
                  setTestSet={setTestSet}
                />
                })}
              </OtherSection>
            </PageContentWrap>
          </PageWrapper>
        </PageContainer>
        : <LoadingSpinner />}
    </>
  );
};

export default TestPage;