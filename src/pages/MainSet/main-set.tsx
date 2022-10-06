import {useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";
import {useEffect, useState} from "react";
// import DocumentData = firebase.firestore.DocumentData;
import termInterface from "../../interfaces/term-interface";

const MainSet = () => {

  const {id} = useParams();
  const studySetsCollectionRef = collection(db, "studySets");
  const [studySet, setStudySet] = useState<any>(null);

  const getStudySets = async () => {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map(doc => doc.data());
    const [filteredSet] = sets.filter(item => item.id.toString() === id)
    setStudySet(filteredSet)
  }

  useEffect(() => {
    getStudySets()
  }, [])

  return (
      <>
        {studySet ? <div>
              {
                studySet.terms.map((item: termInterface) => (<>
                    <div>
                      {item.id}
                    </div>
                      <div>{item.term}</div>
                      <div>{item.definition}</div>
                    </>
                ))
              }
            </div> :
            <div>

            </div>
        }
      </>
  );
};

export default MainSet;