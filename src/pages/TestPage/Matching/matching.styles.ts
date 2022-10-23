import styled from "styled-components";
import colors from "../../../assets/colors";

export const Container = styled.article`
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    background-color: ${colors.whiteColor};
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 1rem 0 ${colors.shadowWithOpacity};
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 52.5rem;
    min-height: 29.25rem;
    padding: 1.5rem 2rem;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    margin-top: 2rem;
    position: relative;
`
export const ComponentTitle = styled.div`
    color: ${colors.UIColorGray60};
    font-size: .875rem;
    font-weight: 600;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.4285714285714286;
    margin-bottom: 1.5rem;
`
export const ComponentHeader = styled.div`
    color: ${colors.UIColorGray};
    font-size: 1rem;
    font-weight: 600;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5;
    margin-bottom: 1.5rem;
`
export const DefinitionsPart = styled.div`
    border-bottom: 0.0625rem solid ${colors.neurtal300};
    border-top: 0.0625rem solid ${colors.neurtal300};
    display: grid;
    font-size: 1rem;
    font-weight: 400;
    gap: 1.5rem;
    grid-template-columns: 1.25fr 3fr;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5;
    padding: 2rem 0;
    @media (max-width: 38.75rem) {
        grid-template-columns: 1fr;
    }
`
export const AnswersPart = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: -1 * .5rem;
    margin-top: -1 * 1rem;
    padding-top: 2rem;
`