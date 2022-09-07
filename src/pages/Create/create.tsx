import {useState} from "react";
import dataCreateInterface from "../../interfaces/data-create-interface";
import TermItem from "../../components/TermItem/term-item";
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../../firebase-config";

const initialCreateState = {
  author: {
    name: null,
    id: null
  },
  id: Date.now(),
  title: "",
  description: "",
  terms: [
    {term: "", definition: "", id: Math.random()},
    {term: "", definition: "", id: Math.random()},
    {term: "", definition: "", id: Math.random()},
    {term: "", definition: "", id: Math.random()},
    {term: "", definition: "", id: Math.random()},
  ]
}

const Create = () => {

  const [data, setData] = useState<dataCreateInterface>(initialCreateState);

  const studySetsCollectionRef = collection(db, "studySets");

  const addCard = () => {
    let terms = data.terms;
    terms.push({term: "", definition: "", id: Math.random()})
    setData({...data, terms: terms})
  }

  const handleSubmit = async () => {
    await addDoc(studySetsCollectionRef,
        {
          ...data,
          author:
              {
                id: auth.currentUser?.uid,
                name: auth.currentUser?.displayName
              }
        });
  }

  return (
      <div>
        <div>
          <input
              placeholder="Enter a title, like “Biology - Chapter 22: Evolution”"
              onChange={e => setData({...data, title: e.target.value})}
          />
          <input
              placeholder="Add a description..."
              onChange={e => setData({...data, description: e.target.value})}
          />
        </div>
        <div>
          {data.terms.map((item, id) => (
              <TermItem
                  key={item.id}
                  id={id}
                  data={data}
                  setData={setData}
              />))}
        </div>
        <button onClick={addCard}>Add card</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
  );
};

export default Create;