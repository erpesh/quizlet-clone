import React, {FC, useEffect, useState} from 'react';
import Create from "./Create/create";
import {INITIAL_CREATE_STATE} from "./initial-state";
import {useNavigate, useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../../firebase-config";
import {IStudySet} from "../../types";

interface Props {
  isCreate: boolean
}

const CreateOrEdit: FC<Props> = ({isCreate}) => {

  const {id} = useParams();
  const navigate = useNavigate();
  const studySetsCollectionRef = collection(db, "studySets");
  const [data, setData] = useState<IStudySet | null>(isCreate ? INITIAL_CREATE_STATE : null);

  const getStudySets = async () => {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map((doc): any => ({...doc.data(), ref: doc.ref}));
    const [filteredSet] = sets.filter(item => item.id.toString() === id)
    if (filteredSet.author.id === auth.currentUser?.uid)
      setData(filteredSet)
    else
      navigate(`/set/${id}`);
  }

  useEffect(() => {
    if (!isCreate) getStudySets();
  }, [])

  return (
    <>
      {!!data && <Create data={data} setData={setData} isCreate={isCreate}/>}
    </>
  );
};

export default CreateOrEdit;