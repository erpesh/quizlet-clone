import {useState} from "react";
import setDataInterface from "../../interfaces/set-data.interface";
import CreateCard from "../../components/CreateCard/create-card";
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import {useNavigate} from "react-router-dom";
import {
  PageContainer,
} from "./create.styles";
import {INITIAL_CREATE_STATE} from "./initial-state";
import Heading from "./Heading/heading";


const Create = () => {

  const navigate = useNavigate();
  const [data, setData] = useState<setDataInterface>(INITIAL_CREATE_STATE);

  const studySetsCollectionRef = collection(db, "studySets");

  const addCard = () => {
    let terms = data.terms;
    terms.push({term: "", definition: "", id: Math.random()})
    setData({...data, terms: terms})
  }

  const addStudySet = async () => {
    await addDoc(studySetsCollectionRef,
        {
          ...data,
          author:
              {
                id: auth.currentUser?.uid,
                name: auth.currentUser?.displayName
              }
        });
    navigate(`/${data.id}`)
  }

  return (
      <PageContainer>
        <Heading data={data} setData={setData}/>
        <div>
          {data.terms.map((item, id) => (
              <CreateCard
                  key={item.id}
                  id={id}
                  data={data}
                  setData={setData}
              />
          ))}
        </div>
        <button onClick={addCard}>Add card</button>
        <button onClick={addStudySet}>Submit</button>
      </PageContainer>
  );
};

export default Create;