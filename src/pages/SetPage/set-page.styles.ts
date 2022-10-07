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
  //@media screen and (max-width: 64em) {
  //  max-width: none;
  //}
  //@media screen and (max-width: 38.75em){
  //  padding: 1rem;
  //}
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
export const HideBelowNavWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const HideBelowNav = styled.nav`
  -ms-flex-negative: 0;
  display: grid;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  gap: 1rem;
  -ms-flex-item-align: center;
  -webkit-align-self: center;
  align-self: center;
  margin: -0.5rem 0 1.5rem;
  width: 100%;
  max-width: 52.5rem;
  @media screen and (max-width: 69.6875rem) {
    margin: 1rem 0 0;
    max-width: 46rem;
    width: 100%;
  }
  @media (max-width: 64rem) {
    margin-bottom: 0;
    margin-top: 1.5rem;
  }
`