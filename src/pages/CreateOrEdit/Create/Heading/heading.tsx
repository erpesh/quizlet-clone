import React, {FC} from 'react';
import {
  InputContainer,
  InputLabel,
  SetHeader,
  SetHeaderHeading,
  TextAreaInput,
  TextAreaLabel,
  TextAreaSpacer,
  TextAreaWrapper,
  TitleEffect
} from "./heading.styles";
import BlueButton from "../../../../layouts/blue-button.styles";
import {IStudySet} from "../../../../types";
import {AssemblyInput} from '../../../../layouts/assembly-input';

interface Props {
  data: IStudySet,
  setData: (data: IStudySet) => void,
  addStudySet: () => void,
  isCreate: boolean
}

const Heading: FC<Props> = ({data, setData, addStudySet, isCreate}) => {
  return (
    <SetHeader>
      <SetHeaderHeading>
        <span>Create a new study set</span>
        <BlueButton
          padding="0.625rem 1rem"
          radius="0.5rem"
          fontSize=".875rem"
          onClick={addStudySet}
        >
          {isCreate ? "Create" : "Save"}
        </BlueButton>
      </SetHeaderHeading>
      <InputContainer>
        <div>
          <InputLabel>
            {!!data.title && <TitleEffect>Title</TitleEffect>}
            <AssemblyInput
              placeholder="Enter a title, like “Biology - Chapter 22: Evolution”"
              value={data.title}
              onChange={e => setData({...data, title: e.target.value})}
            />
          </InputLabel>
        </div>
      </InputContainer>
      <InputContainer>
        <div style={{position: "relative"}}>
          <TextAreaLabel>
            <div>
              <div>
                <TextAreaSpacer/>
                <TextAreaWrapper>
                  {!!data.description && <TitleEffect>Description</TitleEffect>}
                  <TextAreaInput
                    placeholder="Add a description..."
                    value={data.description}
                    onChange={e => setData({...data, description: e.target.value})}
                  />
                </TextAreaWrapper>
              </div>
            </div>
          </TextAreaLabel>
        </div>
      </InputContainer>

    </SetHeader>
  );
};

export default Heading;