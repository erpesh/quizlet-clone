import styled from "styled-components";
import colors from "../../../../assets/colors";

export const TextContainer = styled.div`
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
export const TextWrap = styled.div`
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-align-items: center;
    align-items: center;
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
    font-family: Lucida Grande,Arial!important;
    font-size: 1.1em;
`
export const DefaultAnswerBox = styled.div`
    -webkit-box-align: center;
    -ms-flex-align: center;
    -ms-flex-item-align: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-align-items: center;
    align-items: center;
    -webkit-align-self: center;
    align-self: center;
    background-color: ${colors.whiteColor};
    border: 0.125rem solid ${colors.neurtal300};
    border-radius: 0.5rem;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: .875rem;
    font-weight: 600;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.4285714285714286;
    box-sizing: border-box;
    min-height: 3.5rem;
    padding: 1rem;
    color: ${colors.ink100};
`
export const InactiveAnswerBox = styled(DefaultAnswerBox)`
    border: 0.125rem dashed ${colors.colorDisabled};
    border-radius: .25rem;
    &:hover{
        border-color: #939bb4;
    }
`
export const ActiveAnswerBox = styled(DefaultAnswerBox)`
    background-color: ${colors.indigo100};
    border: 0.125rem solid #4257b2;
    border-radius: 0.25rem;
`
export const ActiveAnswerBoxWithMessage = styled(ActiveAnswerBox)`
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
`
export const ActiveBoxMessage = styled.span`
    cursor: pointer;
    color: #4257b2;
    font-style: italic;
`
export const RemoveIconContainer = styled.div`
    -webkit-box-align: center;
    -ms-flex-align: center;
    -ms-flex-negative: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-align-items: center;
    align-items: center;
    color: #939bb4;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    -webkit-justify-content: center;
    justify-content: center;
    margin-left: 0.5rem;
    min-height: 1.5rem;
    min-width: 1.5rem;
`
export const AnsweredBoxContent = styled.div`
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    -webkit-align-items: center;
    align-items: center;
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