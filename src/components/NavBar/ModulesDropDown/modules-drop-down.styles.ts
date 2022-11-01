import styled from "styled-components";
import colors from "../../../assets/colors";

export const Container = styled.div`
  position: absolute;
  z-index: 1099;
  left: 56px;
  top: 68px;
  max-height: 641.6px;
`
export const DownContainer = styled.div`
  background: ${colors.whiteColor};
  border: 0.0625rem solid ${colors.neurtal300};
  border-radius: 1rem;
  box-shadow: 0 0.25rem 1rem 0 ${colors.shadowWithOpacity};
  max-height: inherit;
  overflow-y: auto;
  &:first-child {
    border: none;
  }
`
export const Item = styled.div`
  border-top: 0.0625rem solid ${colors.neurtal300};
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`
export const Link = styled.a`
  background: none;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: normal;
  line-height: 1.4285714285714286;
  padding: 0.15rem 1.5rem;
  @media (max-width: 48rem){
    padding: 0 1rem;
  }
  color: ${colors.ink100};
  text-decoration: none;
  &:hover {
    background-color: ${colors.pageBackgroundColor};
  }
`