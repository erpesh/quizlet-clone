import styled from "styled-components";
import colors from "../../assets/colors";

export const PageContainer = styled.div`
    width:100%;
    background-color: ${colors.pageBackgroundColor};
    max-height: 100%;
    -webkit-transition: max-height .2s ease-in;
    transition: max-height .2s ease-in;
`
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
    margin: 0 auto 0;
    max-width: 52.5rem;
    min-height: 29.25rem;
    padding: 1.5rem 2rem;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto auto;
    margin-top: 2rem;
    position: relative;
    @media (max-width: 64rem){
        padding: 1.5rem 2rem;
    }
    @media (max-width: 48rem) {
        border-radius: .5rem;
        padding: 1rem;
    }
`
export const PageWrapper = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    height: 100%;
    margin: 0 auto;
    width: 100%;
    @media (max-width: 48rem) {
        padding: 0;
    }
    @media (max-width: 64rem){
        padding-top: 1.5rem;
    }
`
export const PageContentWrap = styled.div`
    display: block;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: 0;
    padding: 2rem 1.5rem 1.5rem;
    position: relative;
    width: 100%;
    @media (max-width: 38.75em){
        padding: 2rem 0 1.5rem;
    }
`
export const TrueFalseSection = styled.section`
    margin: 0 auto;
    max-width: 52.5rem;
    padding: 0 2rem;
    @media (max-width: 38.75rem){
        margin-top: 0;
        padding: 2rem 1rem;
    }
    @media (max-width: 48rem) {
        margin-top: 2rem;
    }
`
export const OtherSection = styled.section`
    margin: 1rem auto 0;
    max-width: 52.5rem;
    padding: 0 2rem;
    @media (max-width: 38.75rem){
        padding: 2rem 1rem;
        margin-top: 0;
        padding-top: 0;
    }
    @media (max-width: 48rem) {
        margin-top: 1rem;
    }
`
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
export const TopPart = styled.div`
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
    @media (max-width: 48rem) {
        padding-top: 2rem;
    }
    @media (max-width: 38.75rem){
        padding-top: 0;
    }
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
export const WordContainer = styled.div`
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    -webkit-align-items: stretch;
    align-items: stretch;
    cursor: auto;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    word-break: break-word;
`
export const WordHandler = styled.div`
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
export const Word = styled.div`
    word-wrap: break-word;
    position: relative;
    word-break: break-word;
    font-size: 20px;
    -webkit-font-smoothing: antialiased;
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
export const AnswersTitle = styled.h4`
    color: ${colors.ink100};
    font-size: 1.25rem;
    font-weight: 700;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.4;
`