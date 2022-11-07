import styled from "styled-components";
import colors from "../../../assets/colors";

export const PageContainer = styled.div`
  display: flex;
  padding: 2.5rem 10% 0;
  flex-direction: column;
  background: ${colors.pageBackgroundColor};
  @media screen and (max-width: 38.75em) {
    padding: 2.5rem 5% 0;
  }
`
export const UIContainer = styled.div`
  clear: both;
  max-width: 81.25em;
  padding: 0 2.5rem;
  @media screen and (max-width: 38.75em){
    padding: 0 1rem;
  }
  box-sizing: border-box;
  margin-bottom: 1.5rem;
`
export const ValidationErrorsContainer = styled.div`
  margin: 0.625rem auto 0;
  max-width: 40.625em;
  text-align: center;
  @media screen and (max-width: 64em) {
    max-width: none;
  }
`
export const ValidationErrors = styled.div`
  border: 0.0625rem solid;
  border-radius: .5rem;
  color: #303545;
  font-size: .875rem;
  font-weight: 400;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.4285714285714286;
  padding: 1.5rem;
  background-color: #fff3f1;
  border-color: ${colors.sherbert500};
  width: 100%;
`
