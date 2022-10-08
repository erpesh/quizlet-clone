import styled from "styled-components";
import colors from "../../assets/colors";

export const SetPageWrapper = styled.div`
  background-color: ${colors.pageBackgroundColor};
`
export const SetPageContainer = styled.div`
  margin: 0 auto;
  max-width: 54.5625rem;
  padding: 2.5rem;
  position: relative;
  @media screen and (max-width: 64em) {
    max-width: none;
  }
  @media screen and (max-width: 38.75em){
    padding: 1rem;
  }
`
export const SetTitle = styled.h1`
  flex-basis: 100%;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: normal;
  line-height: 1.25;
  word-break: break-word;
  @media screen and (max-width: 38.75em) {
    font-size: 1.5rem;
    letter-spacing: normal;
    line-height: 1.333333333333333;
  }
`
export const SetModelSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const HideBelow = styled.div`
  @media (max-width: 64rem) {
    display: none;
  }
`
export const HideAbove = styled.div`
  @media (min-width: 64rem){
    display: none;
  }
`
export const MainSectionWrapper = styled.div`
  background-color: ${colors.pageBackgroundColor};
  max-height: 100%;
  -webkit-transition: max-height .2s ease-in;
  transition: max-height .2s ease-in;
`
export const MainSectionContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  margin: 0 auto;
  width: 100%;
`
export const MainSectionContainer2 = styled.div`
  display: block;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-left: 0;
  padding: 0;
  position: relative;
  width: 100%;
`
export const HeightRegulator = styled.div`
  height: 100%;
  min-height: 31.25rem;
  @media (max-width: 38.75rem) {
    min-height: 25rem;
  }
`
export const MarginBottom = styled.div`
  margin-bottom: 1rem;
`
export const ProgressBarContainer = styled.div`
  background-color: ${colors.colorDisabled};
  border-radius: .25rem;
  height: 0.125rem;
`
export const ProgressBar = styled.div`
  background-color: ${colors.gray600};
  border-radius: .25rem;
  height: 100%;
`
export const PreviewSection = styled.div`
  display: grid;
  grid-template-rows: minmax(0,1fr) auto;
  height: calc(100% - 1rem);
  @media (max-width: 38.75rem) {
    height: calc(100% - .5rem);
  }
`