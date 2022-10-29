import styled from "styled-components";
import colors from "../../../assets/colors";

export const Container = styled.section`
    margin: 0 auto;
    max-width: 52.5rem;
    padding: 0 2rem;
    @media (max-width: 38.75rem) {
        margin-top: 0;
        padding: 2rem 1rem;
    }
    @media (max-width: 48rem) {
        margin-top: 2rem;
    }
`
export const ContentWrap = styled.article`
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 50rem;
    @media (max-width: 38.75rem) {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        overflow: hidden;
        padding: 0 1rem;
    }
    @media (max-width: 64rem) {
        -webkit-flex-direction: column-reverse;
        -ms-flex-direction: column-reverse;
        flex-direction: column-reverse;
    }
`
export const ContentDivision = styled.div`
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    @media (max-width: 38.75rem) {
        padding: 0;
    }
`
export const ContentContainer = styled.div`
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    gap: 0.5rem;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 38.75rem) {
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        margin-top: 1rem;
    }
    @media (max-width: 48rem) {
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        gap: 1.5rem;
    }
`
export const ContentItemContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    @media (max-width: 28.75rem){
        max-width: 100%;
    }
`
export const ContentItemHeader = styled.div`
    color: ${colors.gray600};
    font-size: 1.25rem;
    font-weight: 700;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.4;
`
export const TopItemContentWrap = styled.div`
    margin-top: 1rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
`
export const ResultContainer = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-left: 2rem;
    @media (max-width: 28.75rem){
        margin-left: 1rem;
    }
`
export const ResultLefItem = styled.div`
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    font-size: 1.25rem;
    font-weight: 600;
    -webkit-justify-content: space-evenly;
    justify-content: space-evenly;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.4;
`
export const ResultRightItem = styled.div`
    -webkit-box-pack: space-evenly;
    -ms-flex-pack: space-evenly;
    color: #59e8b5;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    font-size: 1.25rem;
    font-weight: 600;
    -webkit-justify-content: space-evenly;
    justify-content: space-evenly;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.4;
    margin-left: 3rem;
    @media (max-width: 28.75rem){
        margin-left: 2rem;
    }
`
export const NumberOfAnswers = styled.div<{ isCorrect?: boolean }>`
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-align-items: center;
    align-items: center;
    border: 0.0625rem solid ${colors.UIColorGray};
    border-radius: 1.125rem;
    color: ${colors.gray600};
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    height: 1.75rem;
    -webkit-justify-content: center;
    justify-content: center;
    width: 3rem;
    ${props => props.isCorrect ? `
        background: #e6fcf4;
        border-color: #98f1d1;
        color: ${colors.mint500}
    `: `
    background: #fff6ef;
    border-color: #ffc38c;
    color: ${colors.sherbert500}
    `}
`
export const SecondPartContent = styled.div`
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    margin-top: 0.5rem;
    @media (max-width: 48rem){
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
    }
    @media (max-width: 38.75rem){
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }
`
export const ReferenceItemContainer = styled.article`
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-align-items: center;
    align-items: center;
    background-color: ${colors.whiteColor};
    border: 0.125rem solid ${colors.pageBackgroundColor};
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 1rem rgb(48 53 69 / 8%);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    min-height: 6.25rem;
    overflow: hidden;
    padding: 1rem;
    margin-top: 1rem;
    @media (max-width: 48rem){
        max-width: 19.75rem;
    }
    @media (max-width: 38.75rem) {
        min-height: 4.75rem;
        width: 100%;
        max-width: unset;
    }
`
export const IconContainer = styled.div`
    -ms-flex-negative: 0;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    position: relative;
`
export const IconContent = styled.div<{img: string}>`
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 4rem;
    width: 4rem;
    background-image: url(${props => props.img});
`
export const RefMainContent = styled.div`
    -webkit-box-flex: 4;
    -ms-flex-positive: 4;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-grow: 4;
    flex-grow: 4;
    -webkit-justify-content: center;
    justify-content: center;
    margin-left: 1rem;
`
export const RefMainHeader = styled.div`
    color: ${colors.mainBlueColor};
    font-size: 1rem;
    font-weight: 600;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5;
`
export const RefMainText = styled.div`
    color: ${colors.textGray800};
    font-size: .875rem;
    font-weight: 400;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.4285714285714286;
    margin-top: 0.5rem;
`