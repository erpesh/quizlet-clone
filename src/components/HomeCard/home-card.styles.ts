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
export const HomeCardContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  padding-top: 0;
  padding-bottom: 0;
`
export const ImageContainer = styled.div`
  flex: 1.12 0 0;
  width: 100%;
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
`
export const CardHeader = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`
export const CardText = styled.p`
  font-size: 1.25rem;
  font-weight: var(--typography-body-weight);
  letter-spacing: normal;
  line-height: 1.4;
  margin: 0;
  padding: 0;
  min-height: 1.25em;
`