import styled from "styled-components";
import colors from "../../../assets/colors";

export const UIContainer = styled.div`
  clear: both;
  margin-left: auto;
  margin-right: auto;
  max-width: 81.25em;
  width: 100%;
`
export const Container = styled.div`
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
  
`
export const LinkButton = styled.button`
  color: ${colors.mainBlueColor};
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: -ms-inline-flexbox;
  display: inline-flex;
  font: inherit;
  outline: none;
  -webkit-transition: all .12s cubic-bezier(.47,0,.745,.715);
  transition: all .12s cubic-bezier(.47,0,.745,.715);
  font-size: 1rem;
  font-weight: 600;
  -webkit-letter-spacing: normal;
  -moz-letter-spacing: normal;
  -ms-letter-spacing: normal;
  letter-spacing: normal;
  line-height: 1.5;
  @media (min-width: 38.8125rem){
    font-size: 1rem;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 1.5;
  }
`
export const RightSide = styled.div`
  //float: right;
`
export const SwitchButton = styled.button`
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
  border-radius: 50%;
  padding: 0.625rem;
  width: 2.5rem;
  background: ${colors.mainBlueColor};
  color: ${colors.whiteColor};
  font-weight: 600;
  min-height: 2.5rem;
`

