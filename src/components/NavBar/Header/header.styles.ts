import styled from "styled-components";
import colors from "../../../assets/colors";

export const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  background: ${colors.whiteColor};
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 2rem;
  z-index: 102;
  border-bottom: 1px solid darkgrey;
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
  @media screen and (max-width: 50em) {
    display: none;
  }
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
export const DefaultContainer = styled.div`
  height: 100%; 
  display: flex;
  align-items: center;
  @media screen and (max-width: 50em) {
    display: none;
  }
`
export const AuthButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  padding: 0.375rem 0.75rem;
  font-size: .875rem;
  background: ${colors.yellowMain};
  border-radius: 0.25rem;
  cursor: pointer;
  :hover {
    background: rgb(255, 205, 31, .75);
  }
`
export const SideBarIconWrap = styled.div`
  display: none;
  align-items: center;
  color: ${colors.mainBlueColor};
  cursor: pointer;
  @media screen and (max-width: 50em) {
    display: flex;
  }
`