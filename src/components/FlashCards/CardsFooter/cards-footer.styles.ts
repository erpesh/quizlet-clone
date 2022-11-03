import styled from "styled-components";
import colors from "../../../assets/colors";

export const CardsFooterBase = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  @media (max-width: 28.75rem) {
    padding-top: 0.75rem;
  }
`
export const CardsFooterSide = styled.div`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  height: 2.5rem;
  &:not(:last-child) {
    margin-right: 2rem;
  }
  @media (max-width: 38.75rem) {
    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
`
export const CardsFooterButton = styled.button`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-align-items: center;
  align-items: center;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font: inherit;
  -webkit-justify-content: center;
  justify-content: center;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 0.5rem;
  font-size: .875rem;
  font-weight: 600;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.4285714285714286;
  min-height: 2.5rem;
  border-radius: 50%;
  padding: 0;
  width: 2rem;
  background: none;
  color: ${colors.gray600};
  border-radius: 50%;
  padding: 0.625rem;
  width: 2.5rem;
  &:hover {
    background-color: ${colors.neurtal300};
  }
`