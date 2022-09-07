import styled from "styled-components";
import colors from "../../assets/colors";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 1rem;
`
export const NavPart = styled.div`
  height: 100%;
  display: flex;
  gap: 1.5rem;
`
export const LogoContainer = styled.div`
  display: flex;
  width: 5.9375rem;
  height: 100%;
  align-items: center;
  padding: 0 0.5rem;
  cursor: pointer;
`
export const NavItem = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: .875rem;
  color: ${colors.textGray800};
  :hover {
    border-bottom: 0.25rem solid ${colors.navHover};
    border-radius: 0.25rem;
  }
  a {
    display: flex;
    align-items: center;
    height: 100%;
    text-decoration: none;
    :visited {
      color: ${colors.textGray800};
    }
  }
`
export const ButtonContainer = styled.div`
  height: 100%; 
  display: flex;
  align-items: center;
`
