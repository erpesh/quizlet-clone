import styled from "styled-components";
import colors from "../../../assets/colors";

export const CardContainer = styled.div`
  background: ${colors.whiteColor};
  counter-increment: term-row;
  padding: 0.25rem;
  position: relative;
  margin-bottom: 1rem;
`
export const CardContent = styled.div`
  opacity: .65;
  display: flex;
  align-items: center;
`
export const CardNumber = styled.div`
  bottom: auto;
  display: block;
  font-size: 1.25rem;
  font-weight: 700;
  height: 2rem;
  left: 0;
  line-height: 2rem!important;
  line-height: 1.2;
  position: absolute;
  right: auto;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 5.375rem;
  bottom: auto;
  flex: 0 1 auto;
  left: auto;
  position: static;
  right: auto;
  top: auto;
  transform: translate(0);
  width: 2.5rem;
  color: ${colors.UIColorGray60};
  @media screen and (max-width: 38.75em) {
    visibility: visible!important;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.111111111111111;
  }
  @media screen and (max-width: 48em) {
    height: 1rem;
    line-height: 1rem!important;
    text-align: left;
    width: 1rem;
    bottom: 0;
    left: 0;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    //position: absolute;
    right: auto;
    top: auto;
    //transform: translate(0);
  }
  &:before {
    bottom: auto;
    display: block;
    font-size: 1.25rem;
    font-weight: 700;
    height: 2rem;
    left: 0;
    line-height: 2rem!important;
    line-height: 1.2;
    position: absolute;
    right: auto;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 5.375rem;
    bottom: auto;
    flex: 0 1 auto;
    left: auto;
    position: static;
    right: auto;
    top: auto;
    transform: translate(0);
    width: 2.5rem;
    content: counter(term-row);
    @media screen and (max-width: 38.75em) {
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.111111111111111;
      visibility: visible!important;
    }
    @media screen and (max-width: 48em) {
      height: 1rem;
      line-height: 1rem!important;
      text-align: left;
      width: 1rem;
      visibility: visible!important;
    }
  }
`
export const CardInner = styled.div`
  background-color: ${colors.whiteColor};
  border-radius: 0.5rem;
  cursor: move;
  position: relative;
  padding: .25rem;
`
export const ContentSideWrap = styled.div`
  display: table;
  min-height: 3.375rem;
  table-layout: fixed;
  transition: none .3s ease-out;
  transition-property: background;
  width: 100%;
  @media screen and (max-width: 38.75em) {
    min-height: 0;
  }
`
export const SideWordContainer = styled.div`
  cursor: text;
  display: table-cell;
  padding-top: 0.75rem;
  position: relative;
  vertical-align: top;
  word-break: break-word;
  z-index: 1;
  padding-left: 0.75rem;
  padding-right: 1.25rem;
  width: 50%;
  @media screen and (max-width: 38.75em) {
    display: block;
    padding: 0!important;
    width: 100%!important;
  }
  @media screen and (max-width: 48em) {
    padding-left: 0;
    padding-top: 0;
  }
`
export const UITextArea = styled.label`
  cursor: pointer;
  display: block;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.444444444444444;
  @media screen and (max-width: 38.75em) {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.1875;
  }
`
export const UITextAreaContent = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`
export const TextAreaContainer = styled.div`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: initial;
  border: none;
  border-radius: 0;
  box-shadow: none;
  color: ${colors.UIColorGray20};
  cursor: text;
  flex: 1 1 auto;
  font: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  outline: none;
  overflow: hidden;
  padding-bottom: 0.375rem;
  text-align: inherit;
  white-space: pre-wrap;
  width: 100%;
  word-break: break-word;
  position: relative;
  resize: none;
  @media screen and (max-width: 38.75em) {
    padding-bottom: 0;
  }
`
export const TextAreaSizer = styled.div`
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  white-space: pre-wrap;
  visibility: hidden;
`
export const TextAreaWrapper = styled.div`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`
export const TextArea = styled.textarea`
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  white-space: pre-wrap;
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  background: transparent;
  border: none;
  color: inherit;
  cursor: inherit;
  display: block;
  font: inherit;
  height: 100%;
  line-height: inherit;
  outline: none;
  overflow: hidden;
  resize: none;
  text-shadow: inherit;
  width: 100%;
`
export const UITextAreaBorder = styled.span`
  align-self: flex-end;
  box-shadow: 0 0.125rem 0 0 ${colors.UIColorGray};
  display: block;
  height: 0.25rem;
  transition: all .12s cubic-bezier(.47,0,.745,.715);
  width: 100%;
`
export const UITextAreaLabel = styled.span`
  color: ${colors.UIColorGray60};
  display: flex;
  font-size: .75rem;
  font-weight: 600;
  justify-content: space-between;
  letter-spacing: .0625rem;
  line-height: 1.333333333333333;
  margin-top: 0.625rem;
  text-align: inherit;
  text-transform: uppercase;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  @media screen and (max-width: 38.75em) {
    font-size: .625rem;
    font-weight: 600;
    letter-spacing: .0625rem;
    line-height: 1.3;
    text-transform: uppercase;
  }
`
export const SideDefinitionContainer = styled.div`
  cursor: text;
  display: table-cell;
  padding-top: 0.75rem;
  position: relative;
  vertical-align: top;
  word-break: break-word;
  z-index: 1;
  padding-left: 1.25rem;
  padding-right: 0.75rem;
  width: 50%;
  @media screen and (max-width: 38.75em) {
    display: block;
    padding: 0!important;
    width: 100%!important;
    margin-top: 0.5rem;
  }
  @media screen and (max-width: 48em) {
    padding-top: 0;
    padding-right: 0;
  }
`