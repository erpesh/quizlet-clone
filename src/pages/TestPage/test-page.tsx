import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase-config";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/loading-spinner";
import TrueOrFalse from './TrueOrFalse/true-or-false';
import MultipleChoice from './MultipleChoice/multiple-choice';
import { generateTest } from './test-generator';
import termInterface from '../../interfaces/term-interface';
import { trueFalseTest } from './interfaces';


const TestPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const studySetsCollectionRef = collection(db, "studySets");

  const [studySet, setStudySet] = useState<any>(null);
  const [selectedTerms, setSelectedTerms] = useState<termInterface[]>([]);
  const [trueFalseTest, setTrueFalseTest] = useState<trueFalseTest[]>([]);

  const getStudySets = async () => {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map(doc => doc.data());
    const [filteredSet] = sets.filter(item => item.id.toString() === id)
    if (!filteredSet.isPrivate || auth.currentUser?.uid === filteredSet.author.id) {
      setStudySet(filteredSet)
      const terms = [...filteredSet.terms];
      setTrueFalseTest(generateTest(terms));
    } else navigate('/');
  }

  useEffect(() => {
    getStudySets()
  }, [])

  return (
    <>
      {studySet ?
        <div>
          <div style={{ display: "flex" }}>
            <div>
              <div onClick={() => generateTest(studySet.terms)}>1414</div>
              {studySet.terms.map((item: termInterface) => (
                <div key={item.id} style={{ padding: "1rem" }}>{item.term} - {item.definition}</div>
              ))}
            </div>
            <div>
            {selectedTerms.map((item: termInterface) => (
                <div key={item.id} style={{ padding: "1rem" }}>{item.term} - {item.definition}</div>
              ))}
            </div>
          </div>
          {trueFalseTest.map((item, index) => (
            <TrueOrFalse 
              testItem={item}
              orderNumber={index + 1}
              totalNumber={selectedTerms.length}
              key={item.id}
            />
          ))}
          <MultipleChoice data={["daaaaaa", "124124124124", "13ophjfsajfkasf,", "12491274124"]} />
        </div>
        : <LoadingSpinner />}
    </>
  );
};

export default TestPage;