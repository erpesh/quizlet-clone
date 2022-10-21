import styled from "styled-components";
import colors from "../../../assets/colors";

export const AnswersPart = styled.div`
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    -webkit-flex-grow: 0;
    flex-grow: 0;
    width: 100%;
    z-index: 201;
`
export const AsnwerTitleContainer = styled.section`
    color: ${colors.gray600};
    font-size: 1rem;
    font-weight: 600;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    @media (max-width: 38.75rem) {
        padding-bottom: 1rem;
    }
    @media (max-width: 48rem) {
        padding-bottom: 1rem;
    }
`
export const AnswerContainer = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 38.75rem){
        grid-template-columns: 1fr;
    }
`