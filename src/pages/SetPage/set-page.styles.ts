import styled from "styled-components";
import colors from "../../assets/colors";

export const SetPageWrapper = styled.div`
  background-color: ${colors.pageBackgroundColor};
  min-height: calc(100vh - 65px);
`
export const SetPageContainer = styled.div`
  margin: 0 auto;
  max-width: 54.5625rem;
  padding: 2.5rem;
  position: relative;
  color: ${colors.UIColorGray};
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
  margin-bottom: 1rem;
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