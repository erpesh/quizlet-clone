import styled from "styled-components";
import colors from "../../assets/colors";

export const DisplayFlex = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`
export const PageContainer = styled.main`
  float: left;
  width: 100%;
  min-height: 70vh;
  @media screen and (min-width: 64.0625em) and (max-height: 100em) {
    min-height: 60vh;
  }
  background-color: ${colors.pageBackgroundColor};
`
export const PageMainSection = styled.section`
  margin: auto;
  max-width: 65.5rem;
  padding: 2rem 1rem;
`
export const SearchContainer = styled.div`
  margin: auto;
  max-width: 65.5rem;
  padding: 2rem 1rem 0;
`
export const SearchForm = styled.form`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  background-color: ${colors.whiteColor};
  border: 0.0625rem solid ${colors.colorDisabled};
  border-radius: 0.5rem;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 0.3125rem 1rem;
`
export const SearchIconContainer = styled.div`
  color: ${colors.gray600};
  padding-top: 0.3125rem;
`
export const SearchInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${colors.whiteColor};
  border: none;
  box-shadow: none;
  color: ${colors.textGray800};
  cursor: text;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  font-size: 1.5rem;
  font-weight: 600;
  height: 3rem;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.5;
  padding: 0 1rem 0.25rem;
  width: 100%;
  &:focus {
    outline: none;
  }
`
export const Button = styled.button<{radius: string, padding: string}>`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-align-items: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font: inherit;
  -webkit-justify-content: center;
  justify-content: center;
  font-size: .875rem;
  font-weight: 600;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.4285714285714286;
  min-height: 2rem;
  background: ${colors.whiteColor};
  border: 0.0625rem solid ${colors.colorDisabled};
  color: ${colors.gray600};
  border-radius: ${props => props.radius};
  padding: ${props => props.padding};
  width: auto;
  &:hover {
    background-color: ${colors.neurtal300};
  }
`
export const MainContainer = styled.div`
  -webkit-box-align: flex-start;
  -ms-flex-align: flex-start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  color: ${colors.textGray800};
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  @media (max-width: 48rem) {
    display: block;
  }
`
export const ResultCardsContainer = styled.div`
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-right: 2rem;
  max-width: 33%;
  @media (max-width: 48rem) {
    margin-right: 0;
    max-width: inherit;
  }
`
export const ResultListContainer = styled.div`
  margin-top: 1.5rem;
  @media (max-width: 48rem) {
    -webkit-column-gap: 1rem;
    column-gap: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
  }
  @media (max-width: 38.75rem){
    display: block;
  }
`