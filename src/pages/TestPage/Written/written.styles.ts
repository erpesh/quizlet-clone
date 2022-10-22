import styled from "styled-components";
import colors from "../../../assets/colors";
import {Container} from "../test-page.styles";

export const WrittenContainer = styled(Container)`
    @media (max-width: 38.75em){
        min-heigh: unset;
    }
`
export const BottomPart = styled.div`
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    -webkit-flex-grow: 0;
    flex-grow: 0;
    min-height: 10rem;
    width: 100%;
    z-index: 1;
`
export const AnswerTitle = styled.div`
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
    -webkit-justify-content: space-between;
    justify-content: space-between;
    margin-bottom: 1rem;
`
export const AnswerTitleSection = styled.section`
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: ${colors.UIColorGray60};
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    font-size: 1rem;
    font-weight: 600;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5;
    @media (max-width: 38.75rem) {
        padding-bottom: 1rem;
    }
    @media (max-width: 48rem) {
        padding-bottom: 1rem;
    }
`
export const AnswerForm = styled.form`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
`
export const InputContainer = styled.label`
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    background-color: ${colors.pageBackgroundColor};
    border-radius: 0.5rem;
    color: ${colors.gray600};
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    height: 3rem;
    -webkit-justify-content: center;
    justify-content: center;
    overflow: hidden;
    padding: 0.25rem 1rem;
    position: relative;
    :after{
    bottom: 0;
    content: " ";
    height: 0.15rem;
    left: 0;
    position: absolute;
    width: 100%;
    }
    :focus-within:after{
        background-color: ${colors.textGray800};
    }
`
export const ButtonContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    margin: 2rem 0 0;
`