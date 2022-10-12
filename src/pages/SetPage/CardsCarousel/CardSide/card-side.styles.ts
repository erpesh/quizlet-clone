import styled from "styled-components";
import colors from "../../../../assets/colors";

export const CardContainer = styled.div`
  background-color: ${colors.whiteColor};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 1rem 0 rgba(48, 53, 69, .08);
  padding: 1.5rem 2rem;
  display: grid;
  gap: 1rem 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  @media (max-width: 64rem){
    padding: 1.5rem 2rem;
  }
  @media (max-width: 48rem){
    padding: 1rem;
  }
`
export const TermOrDefinition = styled.div`
  grid-column: 1;
  grid-row: 1;
`
export const ProgressNumber = styled.div`
  grid-column: 2;
  grid-row: 1;
`
export const TermOrDefData = styled.div`
  grid-column: 1/span 3;
  grid-row: 2;
  min-height: 0;
  position: relative;
`
export const TermOrDefDataContent = styled.div`
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  -webkit-box-pack: stretch;
  -ms-flex-pack: stretch;
  -webkit-align-items: stretch;
  align-items: stretch;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  gap: 3rem;
  height: 100%;
  -webkit-justify-content: stretch;
  justify-content: stretch;
  @media (max-width: 48rem) {
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
    gap: 1.5rem;
  }
  >div {
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    height: 100%;
    overflow: auto;
    text-align: center;
    @media (max-width: 48rem) {
      -webkit-flex: 1.5;
      -ms-flex: 1.5;
      flex: 1.5;
    }
  }
`
export const TextFormater = styled.div`
  word-wrap: break-word;
  position: relative;
  word-break: break-word;
  -webkit-font-smoothing: antialiased;
  -ms-flex-pack: center;
  min-height: 100%;
  width: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: 32px;
`
export const CarouselButtonsWrap = styled.div`
  grid-column: 1/span 3;
  grid-row: 3;
`
export const CarouselButtonsContainer = styled.div`
  -webkit-box-pack: space-around;
  -ms-flex-pack: space-around;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 1.5rem;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  @media (max-width: 38.75rem){
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
  }
  @media (max-width: 48rem) {
    gap: 1rem;
  }
`
export const NavButtonContainer = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-align-items: center;
  align-items: center;
  border: 0.125rem solid ${colors.neurtal300};
  border-radius: 0.5rem;
  color: ${colors.UIColorGray};
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 1rem;
  font-weight: 400;
  font-weight: 600;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.5;
  margin-bottom: 1rem;
  padding: 1rem;
  position: relative;
  width: 100%;
  word-break: break-word;
  :hover {
    border-color: #939bb4;
    outline: none;
  }
  @media (max-width: 38.75rem){
    margin-bottom: 1rem;
    max-height: 3rem;
    max-width: 50%;
  }
  @media (max-width: 48rem) {
    max-width: none;
  }
`
export const NavButtonSpan = styled.span`
  color: ${colors.gray600};
  margin: 0;
  max-height: 1.25rem;
  max-width: 1.25rem;
`