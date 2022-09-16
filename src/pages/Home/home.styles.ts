import styled from "styled-components";
import yellowCircleBg from "../../assets/images/yellow-circle-bg.svg";

export const PageContainer = styled.main`
  width: 100%;
`
export const HighlightedTextContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 0 6rem;
`
export const HighlightedText = styled.h2`
  margin-left: auto;
  margin-right: auto;
  padding: 0 2.5rem;
  font-size: 2rem;
`
export const TextWithBackground = styled.em`
  background-image: url(${yellowCircleBg});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 2.1875rem; 
`