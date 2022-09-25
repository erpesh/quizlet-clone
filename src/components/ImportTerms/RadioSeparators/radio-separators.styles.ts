import styled from "styled-components";
import colors from "../../../assets/colors";

export const FormGroupWrap = styled.div`
  margin-right: 7.5rem;
  margin-top: 1.25rem;
`
export const FormGroup = styled.div`
  display: inline-block;
  margin-right: 2rem;
`
export const GroupLabel = styled.label`
  display: block;
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.285714285714286;
  margin-bottom: .25rem;
  @media screen and (max-width: 38.75em) {
    font-size: .75rem;
    font-weight: 600;
    line-height: 1.333333333333333;
  }
`
export const RadioItemsWrap = styled.div`
  display: flex;
  gap: 1rem;
  @media screen and (max-width: 1100px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`
export const RadioItem = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
  box-sizing: border-box;
  border-radius: 2px;
  margin-bottom: .25rem;
`;
export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
export const RadioInput = styled.input`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${RadioItem} {
    background: ${colors.yellowMain};
    border: 2px solid ${colors.yellowMain};
  }
  &:checked + ${RadioButtonLabel} {
    background: ${colors.yellowMain};
    border: 1px solid ${colors.yellowMain};
    &::after {
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;
export const UIInputContainer = styled.label`
  cursor: pointer;
  display: block;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.444444444444444;
  @media screen and (max-width: 38.75em){
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.1875;
  }
`
export const UIInputContent = styled.div`
  align-items: flex-start;
  border-radius: 0.25rem;
  display: flex;
  flex-flow: row wrap;
  position: relative;
  width: 100%;
`
export const UIInputLabel = styled.span`
  color: ${colors.UIColorGray60};
  display: block;
  font-size: .75rem;
  font-weight: 600;
  letter-spacing: .0625rem;
  line-height: 1.333333333333333;
  margin-top: 0.625rem;
  text-align: inherit;
  text-transform: uppercase;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media screen and (max-width: 38.75em) {
    font-size: .625rem;
    font-weight: 600;
    letter-spacing: .0625rem;
    line-height: 1.3;
    text-transform: uppercase;
  }
`
export const UIInputBorder = styled.span`
  align-self: flex-end;
  box-shadow: 0 0.125rem 0 0 ${colors.UIColorGray};
  display: block;
  height: 0.25rem;
  transition: all .12s cubic-bezier(.47,0,.745,.715);
  width: 100%;
`
export const UIInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: initial;
  border: none;
  border-radius: 0.25rem;
  box-shadow: none;
  color: ${colors.UIColorGray20};
  cursor: text;
  filter: none;
  flex: 1 1 auto;
  font: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  outline: none;
  padding-bottom: 0.375rem;
  text-align: inherit;
  white-space: pre-wrap;
  width: 100%;
  word-break: break-word;
  &:focus ~ ${UIInputBorder} {
    box-shadow: 0 0.5rem 0 0 ${colors.yellowMain};
  }
  @media screen and (max-width: 38.75em){
    padding-bottom: 0;
  }
`
export const UIRadioLabel = styled.span`
  display: block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625;
  //margin-left: 1.875rem;
  transition: all .12s cubic-bezier(.47,0,.745,.715);
  @media screen and (max-width: 38.75em) {
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.571428571428571;
    margin-left: 2.125rem;
  }
`