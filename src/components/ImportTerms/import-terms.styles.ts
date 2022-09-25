import styled from "styled-components";
import colors from "../../assets/colors";

export const ContainerWrap = styled.div`
  background-color: #fff;
  padding: 2.5rem 0 1.25rem;
`
export const UIContainer = styled.div`
  clear: both;
  margin-left: auto;
  margin-right: auto;
  max-width: 81.25em;
  padding: 0 2.5rem;
  @media screen and (max-width: 38.75em){
    padding: 0 0.75rem!important;
  }
`
export const UILinkButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border: none;
  border-bottom: 0.3125rem solid #3ccfcf;
  color: ${colors.UIColorGray};
  cursor: pointer;
  display: inline-block;
  font: inherit;
  font-size: .9375rem;
  font-weight: 700;
  letter-spacing: .075rem;
  line-height: 1.2;
  max-width: 100%;
  padding: 0 0 0.75rem;
  text-align: center;
  text-transform: uppercase;
  transition: all .12s cubic-bezier(.47,0,.745,.715);
  vertical-align: middle;
  width: auto;
  :hover {
    color: ${colors.yellowMain};
    border-bottom: 0.3125rem solid ${colors.yellowMain};
  }
  @media screen and (max-width: 38.75em) {
    font-size: .75rem;
    font-weight: 700;
    letter-spacing: .075rem;
    line-height: 1.333333333333333;
    padding: 0 0 0.5rem;
    text-transform: uppercase;
  }
`
export const ImportTermsHeading = styled.span`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.625;
  @media screen and (max-width: 38.75em) {
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.571428571428571;
  }
`
export const ImportTermsInstruction = styled.span`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.625;
  @media screen and (max-width: 38.75em){
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.571428571428571;
  }
`
export const ImportTermsForm = styled.form`
  :before {
    content: "";
    display: table;
  }
  :after {
    content: "";
    display: table;
    clear: both;
  }
`
export const TextArea = styled.textarea`
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
  font: 12px/18px hurme_no2-webfont,-apple-system,BlinkMacSystemFont,sans-serif;
  background-color: initial;
  border: 0.125rem solid ${colors.UIColorGray};
  color: ${colors.UIColorGray20};
  display: block;
  font-size: 1.125rem;
  font-weight: 400;
  height: 15rem;
  line-height: 1.444444444444444;
  margin-top: 0.625rem;
  outline: none;
  padding: 0.75rem;
  transition: all .12s;
  width: 100%;
  :focus {
    border-color: ${colors.yellowMain};
    box-shadow: 0 0 0 0.125rem ${colors.yellowMain};
  }
  @media screen and (max-width: 38.75em){
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.1875;
  }
`
export const ImportButtonWrap = styled.div`
  float: right;
  margin-top: 1.25rem;
`
export const ImportButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-block;
  font: inherit;
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.285714285714286;
  max-width: 100%;
  padding: 0.75rem 1.5rem;
  transition: all .12s cubic-bezier(.47,0,.745,.715);
  width: auto;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: .0625rem;
  line-height: 1.222222222222222;
  padding: 1.5rem 5rem;
  :visited, :hover {
    background-color: ${colors.primaryButton};
    color: ${colors.whiteColor};
  }
  @media screen and (max-width: 38.75em){
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: .0625rem;
    line-height: 1.1875;
    padding: 1.25rem 2.5rem;
  }
  :disabled {
    background-color: ${colors.colorDisabled};
    box-shadow: none;
    color: #fff;
    cursor: default;
  }
`
export const ButtonTextWrap = styled.span`
  align-items: center;
  display: inline-flex;
  justify-content: center;
  white-space: pre-wrap;
  width: 100%;
`