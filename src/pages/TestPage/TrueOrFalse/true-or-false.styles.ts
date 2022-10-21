import styled from "styled-components";
import colors from "../../../assets/colors";

export const MainSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 38.75rem) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }
`
export const TermPart = styled.div`
    border-right: 0.125rem solid ${colors.neurtal300};
    padding-right: 1rem;
    @media (max-width: 38.75rem){
        border-bottom: 0.125rem solid ${colors.neurtal300};
        border-right: none;
        padding-bottom: 1rem;
        padding-right: 0;
    }
`
export const DefinitionPart = styled.div`
    padding-left: 1rem;
    @media (max-width: 38.75rem){
        padding-left: 0;
        padding-top: 1rem;
    }
`
export const SecondTitle = styled.div`
    color: ${colors.UIColorGray60};
    font-size: 1rem;
    font-weight: 600;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5;
`
export const AnswerContainer = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 28.75rem) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
    }
`