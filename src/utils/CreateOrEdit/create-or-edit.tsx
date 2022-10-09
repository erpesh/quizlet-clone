import React, {FC, useEffect, useState} from 'react';
import Create from "../../pages/Create/create";
import {INITIAL_CREATE_STATE} from "./initial-state";
import setDataInterface from "../../interfaces/set-data.interface";
import {useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";

interface Props {
  isCreate: boolean
}

const CreateOrEdit: FC<Props> = ({isCreate}) => {

  const {id} = useParams();
  const studySetsCollectionRef = collection(db, "studySets");
  const [data, setData] = useState<any>(isCreate ? INITIAL_CREATE_STATE : null);

  const getStudySets = async () => {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map((doc): any => ({...doc.data(), ref: doc.ref}));
    const [filteredSet] = sets.filter(item => item.id.toString() === id)
    setData(filteredSet)
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