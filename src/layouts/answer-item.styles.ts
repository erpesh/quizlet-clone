import styled from "styled-components";
import colors from "../assets/colors";

interface answerItem {
  isFocus?: boolean,
  color?: string,
  bgColor?: string,
  removeHover?: boolean,
}
const AnswerItem = styled.section<answerItem>`
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    box-sizing: border-box;
    align-items: center;
    border: 0.125rem solid ${colors.neurtal300};
    ${props => props.color ? `border-color: ${props.color};` : ""}
    ${props => props.bgColor ? `background-color: ${props.bgColor};` : ""}
    border-radius: 0.5rem;
    color: ${colors.UIColorGray};
    cursor: pointer;
    display: grid;
    font-size: 1rem;
    font-weight: 400;
    grid-template-columns: auto 1fr;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5;
    padding: 1rem;
    position: relative;
    width: 100%;
    word-break: break-word;
    @media (max-width: 48rem) {
        max-width: 100%;
    }
    ${props => props.removeHover ? "cursor: auto;" : `&:hover{
        ${props.isFocus ? `border-color: ${colors.indigo100}` : "border-color: #939bb4;"}
        outline: none;
    }`}
    ${props => {
  if (props.isFocus) {
    return `
            border-color: ${colors.blueBorder};
            background-color: ${colors.indigo100};`
  }
}}
`
export default AnswerItem;