import styled from "styled-components";

export const HomeCardSection = styled.section`
  margin-top: 4rem;
  padding-bottom: 0;
  padding-top: 0;
`
export const UIContainer = styled.div`
  position: relative;
  z-index: 101;
  clear: both;
  margin-left: auto;
  margin-right: auto;
  max-width: 64em;
`
export const HomeCardContainer = styled.div<{isLeft: boolean}>`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding-top: 0;
  padding-bottom: 0;
  @media (max-width: 40.625rem){
    ${props => props.isLeft? "flex-direction: column;" : "flex-direction: column-reverse;"}
  }
`
export const ImageContainer = styled.div`
  flex: 1.12 0 0;
  width: 100%;
  @media (max-width: 40.625rem){
    width: 80%;
  }
`
export const Image = styled.img`
  width: 100%;
  border: none;
`
export const TextContainer = styled.div<{isLeft: boolean}>`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  ${props => props.isLeft? "margin-left: 5.375rem;" : "margin-right: 5.375rem;"}
  gap: 1rem;
  text-align: center;
  @media (max-width: 69.375rem){
    ${props => props.isLeft? "margin-left: 3.375rem;" : "margin-right: 3.375rem;"}
  }
  @media (max-width: 40.625rem){
    margin-left: 0;
    margin-right: 0;
    padding: 1rem;
  }
`
export const CardHeader = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 1.25;
  margin: 0;
  padding: 0;
  @media (max-width: 69.375rem) and (min-width: 40.625rem){
    font-size: 1.35rem;
  }
`
export const CardText = styled.p`
  font-size: 1.25rem;
  letter-spacing: normal;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  min-height: 1.25em;
`