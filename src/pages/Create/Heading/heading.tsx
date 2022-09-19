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
  TitleEffect,
  TitleInput
} from "./heading.styles";
import {BlueButton} from "../../../components/BlueButton/blue-button.styles";
import setDataInterface from "../../../interfaces/set-data.interface";

interface Props {
  data: setDataInterface,
  setData: (data: setDataInterface) => void;
}

const Heading: FC<Props> = ({data, setData}) => {
  return (
      <SetHeader>
        <SetHeaderHeading>
          <span>Create a new study set</span>
          <BlueButton
              padding="0.625rem 1rem"
              radius="0.5rem"
              fontSize=".875rem"
          >
            Create
          </BlueButton>
        </SetHeaderHeading>
        <InputContainer>
          <div>
            <InputLabel>
              {!!data.title && <TitleEffect>Title</TitleEffect>}
              <TitleInput
                  placeholder="Enter a title, like “Biology - Chapter 22: Evolution”"
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
                  <TextAreaSpacer></TextAreaSpacer>
                  <TextAreaWrapper>
                    {!!data.description && <TitleEffect>Description</TitleEffect>}
                    <TextAreaInput
                        placeholder="Add a description..."
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