import styled from "styled-components"
import colors from "../../assets/colors"

export const AssemblyInput = styled.input`
  @media (min-width: 38.8125rem) {
    font-size: 1rem;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5; 
  }
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: initial;
  border: none;
  box-shadow: none;
  color: ${colors.textGray800};
  cursor: text;
  -webkit-filter: none;
  filter: none;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  font-size: 1rem;
  font-weight: 600;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.5;
  padding-right: 1rem;
`