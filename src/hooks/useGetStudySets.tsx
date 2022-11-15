import {useNavigate, useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../firebase-config";
import {useEffect, useState} from "react";

// returns all sets if isMultiple true and a certain set by page id when it's false
function useGetStudySets(isMultiple?: boolean, isPrivateNeeded?: boolean) {
  const {id} = useParams();
  const navigate = useNavigate();
  const studySetsCollectionRef = collection(db, "studySets");

  const [studySet, setStudySet] = useState<any>(null);

  const getStudySet = async () => {
    const data = await getDocs(studySetsCollectionRef);
    const sets = data.docs.map(doc => doc.data());
    if (isMultiple) {
      if (!isPrivateNeeded){
        setStudySet(sets.filter(item => auth.currentUser?.uid === item.author.id || !item.isPrivate));
        return;
      }
      setStudySet(sets.filter(item => auth.currentUser?.uid === item.author.id));
      return;
    }
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

export default useGetStudySets;