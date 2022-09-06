import {useState} from "react";
import dataCreateInterface from "../../interfaces/data-create-interface";
import TermItem from "../../components/TermItem/term-item";

const initialCreateState = {
  title: "",
  description: "",
  terms: [{term: "", definition: ""}, {term: "", definition: ""}]
}

const Create = () => {

  const [data, setData] = useState<dataCreateInterface>(initialCreateState);

  return (
      <div>
        <input
            placeholder="Enter a title, like “Biology - Chapter 22: Evolution”"
            onChange={e => setData({...data, title: e.target.value})}
        />
        <input
            placeholder="Add a description..."
            onChange={e => setData({...data, description: e.target.value})}
        />
        {data.terms.map((item, id) => <TermItem key={id} id={id} data={data} setData={setData}/>)}
        <button onClick={() => console.log(data)}>Submit</button>
      </div>
  );
};

export default Create;