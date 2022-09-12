import styled from "styled-components";
import backgroundImage from "../../assets/images/hero-background.svg";
import colors from "../../assets/colors";

export const PageContainer = styled.main`
  display: block;
  width: 100%;
`
export const HeroContainer = styled.section`
  background-image: url("${backgroundImage}");
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem 0;
`
export const UIContainer = styled.div`
  position: relative;
  clear: both;
  margin-left: auto;
  margin-right: auto;
  max-width: 81.25em;
  padding: 0 2.5rem;
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const HeroImageWrapper = styled.div`
  position: relative;
`
export const HeroImage = styled.img`
  border-radius: 1.5rem;
  display: block;
  min-height: 31.25rem;
  object-fit: cover;
  width: 100%;
  
  :after {
    background: linear-gradient(154.61deg,rgba(19,20,27,0) 40.48%,${colors.ink400} 107.87%);
    border-radius: 1.5rem;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: matrix(-1,0,0,1,0,0);
  }
`
export const HeroContent = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  color: ${colors.whiteColor};
`
export const HeroText = styled.div`
  box-sizing: inherit;
  max-width: 30rem;
  margin: 3rem;
`
export const H1 = styled.h1`
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 1rem;
  font-size: 2.75rem;
  font-weight: 700;
`
export const Text = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: normal;
  line-height: 1.4;
`