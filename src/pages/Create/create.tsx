import {useState} from "react";
import dataCreateInterface from "../../interfaces/data-create-interface";
import TermItem from "../../components/TermItem/term-item";
import {addDoc, collection} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import {useNavigate} from "react-router-dom";
import {
  PageContainer,
} from "./styles/create.styles";
import {
  SetHeader,
  SetHeaderHeading,
  InputContainer,
  TextAreaInput,
  TitleInput,
  TextAreaSpacer,
  TextAreaLabel,
  TextAreaWrapper,
  TitleEffect,
  InputLabel
} from "./styles/heading.styles";
import {BlueButton} from "../../components/BlueButton/blue-button.styles";
import {INITIAL_CREATE_STATE} from "./initial-state";


const Create = () => {

  const navigate = useNavigate();
  const [data, setData] = useState<dataCreateInterface>(INITIAL_CREATE_STATE);

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
        <SetHeader>
          <SetHeaderHeading>
            <span>Create a new study set</span>
            <BlueButton
                padding="0.625rem 1rem"
                radius="0.5rem"
                fontSize=".875rem"
            >
              Create
            </BlueButton>
          </SetHeaderHeading>
          <InputContainer>
            <div>
              <InputLabel>
                {!!data.title && <TitleEffect>Title</TitleEffect>}
                <TitleInput
                    placeholder="Enter a title, like “Biology - Chapter 22: Evolution”"
                    onChange={e => setData({...data, title: e.target.value})}
                />
              </InputLabel>
            </div>
          </InputContainer>
          <InputContainer>
            <div style={{position: "relative"}}>
              <TextAreaLabel>
                <div>
                  <div>
                    <TextAreaSpacer></TextAreaSpacer>
                    <TextAreaWrapper>
                      {!!data.description && <TitleEffect>Description</TitleEffect>}
                      <TextAreaInput
                          placeholder="Add a description..."
                          onChange={e => setData({...data, description: e.target.value})}
                      />
                    </TextAreaWrapper>
                  </div>
                </div>
              </TextAreaLabel>
            </div>
          </InputContainer>
        </SetHeader>
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
        <button onClick={addStudySet}>Submit</button>
      </PageContainer>
  );
};

export default Create;