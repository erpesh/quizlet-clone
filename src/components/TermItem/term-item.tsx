import {FC} from "react";
import dataCreateInterface from "../../interfaces/data-create-interface";

interface termItemProps {
  id: number,
  data: dataCreateInterface,
  setData: (data: dataCreateInterface) => void
}

const TermItem: FC<termItemProps> = ({id, data, setData}) => {

  const removeCard = () => {
    let terms = data.terms;
    data.terms.splice(id, 1);
    setData({...data, terms})
  }

  return (
      <div>
        <div>{id}</div>
        <div>
          <input
              placeholder="Enter term"
              onChange={e => {
                let items = data.terms;
                items[id].term = e.target.value;
                setData({...data, terms: items})
              }}
          />
          <input
              placeholder="Enter definition"
              onChange={e => {
                let items = data.terms;
                items[id].definition = e.target.value;
                setData({...data, terms: items})
              }}
          />
          <button onClick={removeCard}>Remove</button>
        </div>
      </div>
  );
};

export default TermItem;