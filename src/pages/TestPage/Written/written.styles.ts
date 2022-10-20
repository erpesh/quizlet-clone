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
    @media (max-width: 38.75rem) {
        min-height: unset;
    }
    @media (max-width: 48rem){
        border-radius: .5rem;
        padding: 1rem;
    }
    @media (max-width: 64rem){
        padding: 1.5rem 2rem;
    }
`