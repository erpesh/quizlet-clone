import {
  Label,
  Input,
  Switch
} from "./toggle-switch.styles";
import {ChangeEvent, FC, useState} from "react";
import setDataInterface from "../../types/set-data.types";

interface Props {
  onWord: string,
  offWord: string,
  data: setDataInterface,
  setData: (data: setDataInterface) => void
}

const ToggleSwitch: FC<Props> = ({onWord, offWord, data, setData}) => {
  const [checked, setChecked] = useState(data.isPrivate);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    setData({...data, isPrivate: e.target.checked});
  };

  return (
      <Label>
        <span>{checked ? onWord : offWord}</span>
        <Input checked={checked} type="checkbox" onChange={handleChange}/>
        <Switch/>
      </Label>
  );
};
export default ToggleSwitch;