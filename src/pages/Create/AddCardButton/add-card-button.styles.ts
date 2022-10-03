import styled from "styled-components";
import colors from "../../../assets/colors";

export const Container = styled.a`
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box;    /* Firefox, other Gecko */
  box-sizing: border-box;         /* Opera/IE 8+ */
  bottom: 0;
  height: 100%;
  left: 0;
  position: relative;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 100;
  background: ${colors.whiteColor};
  padding: 3rem;
  margin-bottom: 2rem;
`
export const ButtonWrap = styled.span`
  white-space: nowrap;
  >* {
    bottom: auto;
    left: 50%;
    position: absolute;
    right: auto;
    top: 50%;
    transform: translate(-50%,-50%);
  }
`
export const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: none;
  border: none;
  border-bottom: 0.3125rem solid #3ccfcf;
  color: ${colors.UIColorGray};
  cursor: pointer;
  display: inline-block;
  font: inherit;
  font-size: .9375rem;
  font-weight: 700;
  letter-spacing: .075rem;
  line-height: 1.2;
  max-width: 100%;
  padding: 0 0 0.75rem;
  text-align: center;
  text-transform: uppercase;
  transition: all .12s cubic-bezier(.47,0,.745,.715);
  vertical-align: middle;
  width: auto;
  @media screen and (max-width: 38.75em) {
    font-size: .75rem;
    font-weight: 700;
    letter-spacing: .075rem;
    line-height: 1.333333333333333;
    padding: 0 0 0.5rem;
    text-transform: uppercase;
  }
`