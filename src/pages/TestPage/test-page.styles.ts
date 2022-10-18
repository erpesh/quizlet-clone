import styled from "styled-components";
import colors from "../../assets/colors";

export const NumberContainer = styled.div`
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    @media (max-width: 48rem) {
        right: 1rem;
        top: 1rem;
    }
`
export const NumberContent = styled.div`
    color: ${colors.UIColorGray60};
    font-size: .875rem;
    font-weight: 400;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.4285714285714286;
`
export const WordTitleWrap = styled.div`
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
`
export const WordTitleContainer = styled(WordTitleWrap)`
    margin-bottom: 1.5rem;
    width: 100%;
`
export const TitleWrap = styled(WordTitleWrap)`
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    min-width: -webkit-fit-content;
    min-width: -moz-fit-content;
    min-width: fit-content;
`
export const TitleCenter = styled(WordTitleWrap)`
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
`
export const TitleEnd = styled(WordTitleWrap)`
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
`
export const WordTitle = styled.section`
    color: ${colors.UIColorGray60};
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: .875rem;
    font-weight: 600;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.4285714285714286;
`
export const AnswerItem = styled.section<{isFocus: boolean}>`
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    box-sizing: border-box;
    align-items: center;
    border: 0.125rem solid ${colors.neurtal300};
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
    @media (min-width: 38.8125rem) {
        font-size: 1rem;
        -webkit-letter-spacing: normal;
        -moz-letter-spacing: normal;
        -ms-letter-spacing: normal;
        letter-spacing: normal;
        line-height: 1.5;
    }
    &:hover{
        ${props => props.isFocus ? `border-color: ${colors.indigo100}` : "border-color: #939bb4;"}
        outline: none;
    }
    ${props => {
        if (props.isFocus){
            return `
            border-color: ${colors.blueBorder};
            background-color: ${colors.indigo100};`
        }
    }}
`