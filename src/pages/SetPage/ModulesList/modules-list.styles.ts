import styled from "styled-components";
import colors from "../../../assets/colors";
import {Link} from "react-router-dom";

export const StudyModulesWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const StudyModulesContainer = styled.nav`
  -ms-flex-negative: 0;
  display: grid;
  -webkit-flex-shrink: 0;
  flex-shrink: 0;
  gap: 1rem;
  -ms-flex-item-align: center;
  -webkit-align-self: center;
  align-self: center;
  margin: -0.5rem 0 1.5rem;
  max-width: 52.5rem;
  width: 100%;
  @media screen and (max-width: 69.6875rem) {
    margin: 1rem 0 0;
    max-width: 46rem;
    width: 100%;
  }
  @media (max-width: 48rem) {
    -ms-flex-item-align: center;
    -webkit-align-self: center;
    align-self: center;
    margin-top: 0;
  }
  @media (max-width: 38.75rem) {
    max-width: none;
    width: 100%;
  }
  @media (max-width: 28.75rem) {
    margin-top: 1rem;
  }
  @media (max-width: 64rem) {
    margin-bottom: 0;
    margin-top: 1.5rem;
  }
`
export const UnorderedList = styled.ul`
  display: grid;
  gap: 0.75rem;
  list-style: none;
  grid-template-columns: none;
  @media (min-width: 28.8125rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 64.0625rem) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    gap: 0;
  }
`
export const ListItem = styled.li`
  background: ${colors.whiteColor};
  border-bottom: 0.25rem solid transparent;
  border-radius: 0.5rem;
  box-shadow: 0 0.0625rem 0.1875rem 0 rgba(48, 53, 69, 0.08);
  cursor: pointer;
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 2rem 1fr;
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  place-items: center start;
  position: relative;
  -webkit-flex: 1 1;
  -ms-flex: 1 1;
  flex: 1 1;
  @media (min-width: 64.0625rem) {
      margin-right: 1rem;
  }
`
export const ItemHeader = styled.header`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
`
export const ItemH2 = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.5;
`
export const ItemLink = styled(Link)`
  color: ${colors.textGray800};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.5;
`