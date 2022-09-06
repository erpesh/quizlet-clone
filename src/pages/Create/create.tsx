import {useState} from "react";

interface dataInterface {
  title: string,
  description: string,
}

const initialState = {
  title: "",
  description: "",
}

const Create = () => {

  const [data, setData] = useState<dataInterface>(initialState);

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
        <button>Submit</button>
      </div>
  );
};

export default Create;