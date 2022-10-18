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
    position: relative;
    @media (max-width: 48rem) {
        border-radius: .5rem;
        padding: 1rem;
    }
    @media (max-width: 64rem) {
        padding: 1.5rem 2rem;
    }
`
export const DefinitionPart = styled.div`
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    -webkit-align-items: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    margin-bottom: 4rem;
    position: relative;
    @media (max-width: 38.75rem) {
        padding-top: 0;
    }
    @media (max-width: 48rem){
        padding-top: 2rem;
    }
`
export const AnswersPart = styled.div`
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    -webkit-flex-grow: 0;
    flex-grow: 0;
    width: 100%;
    z-index: 201;
`
export const DefinitionWrap = styled.div`
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
export const DefinitionContainer = styled.div`
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
    -webkit-box-align: flex-start;
    -ms-flex-align: flex-start;
    -webkit-align-items: flex-start;
    align-items: flex-start;
`
export const TextFormater = styled.div`
    word-wrap: break-word;
    position: relative;
    word-break: break-word;
    -webkit-font-smoothing: antialiased;
    font-family: Lucida Grande,Arial!important;
    font-size: 20px;
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