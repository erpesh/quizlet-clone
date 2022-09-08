import {useParams} from "react-router-dom";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";

const MainSet = () => {

  const {id} = useParams();
  const studySetsCollectionRef = collection(db, "studySets");

  const getStudySets = async () => {
    const data = await getDocs(studySetsCollectionRef);
    console.log(data.docs.map(doc => doc.data()))
  }

  return (
      <div onClick={getStudySets}>
        {id}
      </div>
  );
};

export default MainSet;