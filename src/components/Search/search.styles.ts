import styled from "styled-components";
import colors from "../../assets/colors";

export const SearchContainer = styled.form`
  background: ${colors.pageBackgroundColor};
  min-width: 15rem;
  min-height: 2rem;
  border-radius: 0.5rem;
  padding: 0.25rem 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`
export const LogoContainer = styled.span`
  > svg {
    transform: scale(0.75);
  }
`
export const SearchInput = styled.input`
  border: none;
  background: transparent;
  font-size: 1rem;
  font-weight: 600;
  :focus {
    outline: none;
  }
`