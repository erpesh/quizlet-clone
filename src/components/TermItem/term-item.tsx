import {FC} from "react";
import setDataInterface from "../../interfaces/set-data.interface";

interface Props {
  id: number,
  data: setDataInterface,
  setData: (data: setDataInterface) => void
}

const TermItem: FC<Props> = ({id, data, setData}) => {

  const removeCard = () => {
    let terms = data.terms;
    data.terms.splice(id, 1);
    setData({...data, terms})
  }

  return (
      <div>
        <div>{id + 1}</div>
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