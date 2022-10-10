import styled from "styled-components";

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
export const CardsFooterItem = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
`