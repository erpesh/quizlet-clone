import styled from "styled-components";
import colors from "../../../../assets/colors";

export const TestItemContainer = styled.div`
    border-top: 0.0625rem solid ${colors.neurtal300};
    padding: 3rem 0;
`
export const TestItemHeaderContainer = styled.div`
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
    cursor: auto;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    word-break: break-word;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
`
export const TestItemHeaderWrap = styled.div`
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex: 0 0 100%;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    position: relative;
`
export const TextFormater = styled.div`
    word-wrap: break-word;
    position: relative;
    word-break: break-word;
    -webkit-font-smoothing: antialiased;
`
export const TestItemMessage = styled.div<{ textColor: string }>`
    font-size: 1rem;
    font-weight: 600;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    color: ${props => props.textColor};
`
export const AnswerContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    gap: 1.5rem;
    @media (max-width: 38.75rem){
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }
`