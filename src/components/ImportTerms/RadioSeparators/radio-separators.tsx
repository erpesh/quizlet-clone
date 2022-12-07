import React, {Dispatch, FC, useState} from 'react';
import {
  FormGroup,
  FormGroupWrap,
  GroupLabel,
  RadioButtonLabel,
  RadioInput,
  RadioItem,
  RadioItemsWrap,
  UIInput,
  UIInputBorder,
  UIInputContainer,
  UIInputContent,
  UIInputLabel,
  UIRadioLabel
} from "./radio-separators.styles";
import {ImportTermsTextAction} from "../../../reducers/import-terms-text";

interface Props {
  firstSeparator: string,
  secondSeparator: string,
  dispatch: Dispatch<ImportTermsTextAction>,
}

const RadioSeparators: FC<Props> = (props) => {
  const {
    firstSeparator,
    secondSeparator,
    dispatch
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
                dispatch({type: "SET_FIRST_SEPARATOR", payload: e.target.value})
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
                dispatch({type: "SET_FIRST_SEPARATOR", payload: e.target.value})
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
                dispatch({type: "SET_FIRST_SEPARATOR", payload: ""})
              }}
            />
            <RadioButtonLabel/>
            <UIRadioLabel>
              <div style={{display: "inline-block", width: "5rem"}}>
                <UIInputContainer>
                  <UIInputContent>
                    <UIInput
                      onChange={e => dispatch({type: "SET_FIRST_SEPARATOR", payload: e.target.value})}
                      onFocus={e => {
                        setIsFirstCustom(true)
                        dispatch({type: "SET_FIRST_SEPARATOR", payload: ""})
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
                dispatch({type: "SET_SECOND_SEPARATOR", payload: e.target.value})
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
                dispatch({type: "SET_SECOND_SEPARATOR", payload: e.target.value})
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
                dispatch({type: "SET_SECOND_SEPARATOR", payload: ""})
              }}
            />
            <RadioButtonLabel/>
            <UIRadioLabel>
              <div style={{display: "inline-block", width: "5rem"}}>
                <UIInputContainer>
                  <UIInputContent>
                    <UIInput
                      onChange={e => dispatch({type: "SET_SECOND_SEPARATOR", payload: e.target.value})}
                      onFocus={e => {
                        setIsSecondCustom(true)
                        dispatch({type: "SET_SECOND_SEPARATOR", payload: ""})
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