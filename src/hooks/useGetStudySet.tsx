import {useNavigate, useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../firebase-config";
import {useEffect, useState} from "react";

function useGetStudySet(){
  const {id} = useParams();
  const navigate = useNavigate();
  const studySetsCollectionRef = collection(db, "studySets");

  const [studySet, setStudySet] = useState<any>(null);

  const getStudySet = async () => {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map(doc => doc.data());
    const [filteredSet] = sets.filter(item => item.id.toString() === id)
    if (!filteredSet.isPrivate || auth.currentUser?.uid === filteredSet.author.id) {
      setStudySet(filteredSet)
    } else navigate('/');
  }

  useEffect(() => {
    getStudySet()
  }, [])

  return [studySet, setStudySet];
}
export default useGetStudySet;