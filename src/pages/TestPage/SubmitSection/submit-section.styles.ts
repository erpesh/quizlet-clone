import styled from "styled-components";
import submitTestBg from "../../../assets/images/submit-test-bg.svg";

export const Container = styled.section`
    margin: 1rem auto 0;
    max-width: 52.5rem;
    padding: 0 2rem;
    position: relative;
    -webkit-box-pack: space-around;
    -ms-flex-pack: space-around;
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
    -webkit-justify-content: space-around;
    justify-content: space-around;
    margin-top: 4rem;
    padding-bottom: 1.875rem;
    text-align: center;
    @media (max-width: 38.75rem){
        margin-top: 0;
        padding: 0 1rem 2rem;
    }
    @media (max-width: 48rem) {
        margin-top: 1rem;
    }
`
export const BackgroundImage = styled.section`
    background-image: url(${submitTestBg});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: contain;
    height: 4rem;
    width: 50%;
    margin-bottom: 2.625rem;
`
export const H3 = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.3333333333333333;
    margin-bottom: 2.625rem;
`