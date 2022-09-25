import React, {FC, useState} from 'react';
import {
  FormGroup,
  FormGroupWrap,
  GroupLabel,
  RadioButtonLabel,
  RadioItemsWrap,
  RadioInput,
  RadioItem,
  UIInput,
  UIInputBorder,
  UIInputContainer,
  UIInputContent,
  UIInputLabel,
  UIRadioLabel
} from "./radio-separators.styles";

interface Props {
  firstSeparator: string,
  setFirstSeparator: (sep: string) => void,
  secondSeparator: string,
  setSecondSeparator: (sep: string) => void,
}

const RadioSeparators: FC<Props> = (props) => {
  const {
    firstSeparator,
    setFirstSeparator,
    secondSeparator,
    setSecondSeparator
  } = props;

  const [isFirstCustom, setIsFirstCustom] = useState(false);
  const [isSecondCustom, setIsSecondCustom] = useState(false);

  return (
      <FormGroupWrap>
        <FormGroup>
          <GroupLabel>Between Term and Definition</GroupLabel>
          <RadioItemsWrap>
            <RadioItem>
              <RadioInput
                  type="radio"
                  name="firstSep"
                  value={"\t"}
                  checked={firstSeparator === "\t" && !isFirstCustom}
                  onChange={(e) => {
                    setFirstSeparator(e.target.value)
                    setIsFirstCustom(false)
                  }}
              />
              <RadioButtonLabel/>
              <UIRadioLabel>Tab</UIRadioLabel>
            </RadioItem>
            <RadioItem>
              <RadioInput
                  type="radio"
                  name="firstSep"
                  value=","
                  checked={firstSeparator === "," && !isFirstCustom}
                  onChange={(e) => {
                    setFirstSeparator(e.target.value)
                    setIsFirstCustom(false)
                  }}
              />
              <RadioButtonLabel/>
              <UIRadioLabel>Comma</UIRadioLabel>
            </RadioItem>
            <RadioItem>
              <RadioInput
                  type="radio"
                  name="firstSep"
                  value=""
                  checked={isFirstCustom}
                  onChange={e => {
                    setIsFirstCustom(true)
                    setFirstSeparator("")
                  }}
              />
              <RadioButtonLabel/>
              <UIRadioLabel>
                <div style={{display: "inline-block", width: "5rem"}}>
                  <UIInputContainer>
                    <UIInputContent>
                      <UIInput
                          onChange={e => setFirstSeparator(e.target.value)}
                          onFocus={e => {
                            setIsFirstCustom(true)
                            setFirstSeparator("")
                          }}
                          value={!isFirstCustom ? "" : firstSeparator}
                      />
                      <UIInputBorder/>
                    </UIInputContent>
                    <UIInputLabel>
                      Custom
                    </UIInputLabel>
                  </UIInputContainer>
                </div>
              </UIRadioLabel>
            </RadioItem>
          </RadioItemsWrap>
        </FormGroup>
        <FormGroup>
          <GroupLabel>Between cards</GroupLabel>
          <RadioItemsWrap>
            <RadioItem>
              <RadioInput
                  type="radio"
                  name="secondSep"
                  value={"\n"}
                  checked={secondSeparator === "\n" && !isSecondCustom}
                  onChange={(e) => {
                    setSecondSeparator(e.target.value)
                    setIsSecondCustom(false)
                  }}
              />
              <RadioButtonLabel/>
              <UIRadioLabel>New Line</UIRadioLabel>
            </RadioItem>
            <RadioItem>
              <RadioInput
                  type="radio"
                  name="secondSep"
                  value=";"
                  checked={secondSeparator === ";" && !isSecondCustom}
                  onChange={(e) => {
                    setSecondSeparator(e.target.value)
                    setIsSecondCustom(false)
                  }}
              />
              <RadioButtonLabel/>
              <UIRadioLabel>Semicolon</UIRadioLabel>
            </RadioItem>
            <RadioItem>
              <RadioInput
                  type="radio"
                  name="secondSep"
                  value=""
                  checked={isSecondCustom}
                  onChange={e => {
                    setIsSecondCustom(true)
                    setSecondSeparator("")
                  }}
              />
              <RadioButtonLabel/>
              <UIRadioLabel>
                <div style={{display: "inline-block", width: "5rem"}}>
                  <UIInputContainer>
                    <UIInputContent>
                      <UIInput
                          onChange={e => setSecondSeparator(e.target.value)}
                          onFocus={e => {
                            setIsSecondCustom(true)
                            setSecondSeparator("")
                          }}
                          value={!isSecondCustom ? "" : secondSeparator}
                      />
                      <UIInputBorder/>
                    </UIInputContent>
                    <UIInputLabel>
                      Custom
                    </UIInputLabel>
                  </UIInputContainer>
                </div>
              </UIRadioLabel>
            </RadioItem>
          </RadioItemsWrap>
        </FormGroup>
      </FormGroupWrap>
  );
};

export default RadioSeparators;