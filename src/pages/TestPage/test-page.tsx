import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/loading-spinner";
import TrueOrFalse from './TrueOrFalse/true-or-false';
import MultipleChoice from './MultipleChoice/multiple-choice';
import { generateTest } from './test-generator';
import termInterface from '../../interfaces/term-interface';
import { multipleChoiseTest, testType, trueFalseTest } from './interfaces';


const TestPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const studySetsCollectionRef = collection(db, "studySets");

  const [studySet, setStudySet] = useState<any>(null);
  const [testSet, setTestSet] = useState<testType | null>(null);

  const getStudySets = async () => {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map(doc => doc.data());
    const [filteredSet] = sets.filter(item => item.id.toString() === id)
    if (!filteredSet.isPrivate || auth.currentUser?.uid === filteredSet.author.id) {
      setStudySet(filteredSet)
      const terms = [...filteredSet.terms];
      // setTrueFalseTest(generateTest(terms));
      setTestSet(generateTest(terms));
    } else navigate('/');
  }

  useEffect(() => {
    getStudySets()
  }, [])

  return (
    <>
      {studySet ?
        <div>
          {testSet?.trueFalse.map((item, index) => {
            return <TrueOrFalse
              key={item.id}
              testItem={item}
              orderNumber={index}
              totalNumber={testSet.totalLength}
            />

          })}
        </div>
        : <LoadingSpinner />}
    </>
  );
};

export default TestPage;